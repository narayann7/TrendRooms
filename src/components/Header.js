import React from "react";
import common_components from "./CommonComponents";
import { useSelector, useDispatch } from "react-redux";
import { selectAvatarLable } from "../theme/CommonStyles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate, Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Spacer from "./Spacer";
import { showSnackbar } from "../controllers/slices/snackbarSlice";
import { logout } from "../controllers/slices/userSlice";
import { useTheme } from "@mui/material/styles";
import {
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
} from "@mui/material";
const MyMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "#212123",
    color: "white",

    borderRadius: "5px",
    border: "0.1px solid #212123",

    "& .MuiMenuItem-root": {
      "&:hover": {
        backgroundColor: "#060608",
      },
    },
  },
}));

const MyDialog = styled(Dialog)(() => ({
  "& .MuiDialog-paper": {
    backgroundColor: "#212123",
    color: "white",
    borderRadius: "5px",
    border: "0.1px solid #212123",
  },
}));

function Header() {
  const userData = useSelector((state) => state.userReducer.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openLogOut, setopenLogOut] = React.useState(false);
  const open = Boolean(anchorEl);
  const handlePicClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutOnClick = () => {
    navigate("/auth", {
      replace: true,
    });
    dispatch(logout());
    dispatch(
      showSnackbar({
        message: "Logged out successfully",
        type: "info",
      })
    );
  };
  return (
    <div
      style={{
        ...spaceAround,
        paddingLeft: "80px",
        paddingRight: "100px",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderBottom: "2.5px solid #212123",
      }}
    >
      <Text variant="h5">TrendRooms🔮</Text>

      <div style={spaceAround}>
        <Text variant="h6">{userData.name}</Text>
        <Spacer width={15} />
        <div>
          <img
            onClick={handlePicClick}
            referrerPolicy="no-referrer"
            style={{
              ...selectAvatarLable,
              height: "45px",
              width: "45px",
            }}
            height={100}
            src={userData.displayPicture}
            alt="select avatar"
            loading="lazy"
          />
          <MyMenu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            color="primary"
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => {}}>Profile</MenuItem>

            <MenuItem
              onClick={() => {
                setopenLogOut(true);
                handleClose();
              }}
            >
              Logout
            </MenuItem>
          </MyMenu>
        </div>
      </div>
      <MyDialog
        fullScreen={fullScreen}
        open={openLogOut}
        onClose={() => setopenLogOut(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          "Want to Logout?"
        </DialogTitle>
        <DialogContent>
          <DialogContentText color="white">
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: "white" }}
            autoFocus
            onClick={() => setopenLogOut(false)}
          >
            Cancel
          </Button>
          <Button sx={{ color: "white" }} onClick={logoutOnClick} autoFocus>
            Sure
          </Button>
        </DialogActions>
      </MyDialog>
    </div>
  );
}

const spaceAround = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flowDirection: "row",
};

export default Header;
const Text = common_components.Text;
