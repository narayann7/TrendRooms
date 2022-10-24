import React from "react";
import { Box } from "@mui/system";
import common_components from "../CommonComponents";
import { center_column } from "./../../theme/CommonStyles";
import Spacer from "../Spacer";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Button, Snackbar, Alert, CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  nextStep,
  previousStep,
} from "./../../controllers/slices/authStepSlice";

function Welcome() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
    </React.Fragment>
  );
  return (
    <Box sx={center_column}>
      <Snackbar
        open={open}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        tabIndex
        action={action}
      >
        <Box
          sx={{
            backgroundColor: "#212123",
            width: "200px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: "15px",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingRight: "15px",
            textTransform: "none",
            outline: "none",
            borderRadius: "5px",
          }}
        >
          <Text>Please wait</Text>
          <CircularProgress
            size={20}
            sx={{ color: "white", marginRight: "10px" }}
          />
        </Box>
      </Snackbar>
      <Text variant="h4">Welcome ✨ </Text>
      <Spacer height={30} />
      <AppButton
        onClick={() => {
          handleClick();
        }}
        startIcon={
          <FcGoogle
            style={{
              fontSize: "30px",
              marginRight: "10px",
            }}
          />
        }
      >
        <Text>continue with Google </Text>
      </AppButton>
      <Spacer height={10} />
      <AppButton
        onClick={() => {
          dispatch(nextStep());
        }}
        startIcon={
          <BsGithub
            style={{
              fontSize: "30px",
              marginRight: "10px",
              color: "white",
            }}
          />
        }
      >
        <Text>continue with GitHub</Text>
      </AppButton>

      <Spacer height={10} />
      <AppButton
        onClick={() => {
          dispatch(nextStep());
        }}
        startIcon={
          <FaLinkedin
            style={{
              fontSize: "30px",
              color: "#0078d4",
            }}
          />
        }
      >
        <Text>continue with Linkedin</Text>
      </AppButton>
    </Box>
  );
}

export default Welcome;
const Text = common_components.Text;
const AppButton = common_components.AppButton;
