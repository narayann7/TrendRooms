import React from "react";
import common_components from "./CommonComponents";
import { Box, Snackbar, CircularProgress } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Spacer from "./Spacer";
import { closeSnackbar } from "../controllers/slices/snackbarSlice";
import { useSelector, useDispatch } from "react-redux";

function AppSnackbar() {
  const dispatch = useDispatch();
  const { open, message, type } = useSelector((state) => state.snackbarReducer);
  const { isLoading, loaderTitle } = useSelector((state) => {
    return {
      isLoading: state.snackbarReducer.isLoading,
      loaderTitle: state.snackbarReducer.title,
    };
  });
  return (
    <>
      <Snackbar
        open={isLoading}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        tabIndex
      >
        <Box
          sx={{
            backgroundColor: "#212123",
            display: "flex",
            paddingLeft: "1.2rem",
            paddingRight: "0.3rem",
            paddingTop: "0.3rem",
            paddingBottom: "0.3rem",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            outline: "none",
            borderRadius: "5px",
          }}
        >
          <Text>{loaderTitle}</Text>
          <Spacer width={20} />
          <CircularProgress
            size={20}
            sx={{ color: "white", marginRight: "10px" }}
          />
        </Box>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={1500}
        onClose={() => {
          dispatch(closeSnackbar());
        }}
      >
        <Alert
          onClose={() => {
            dispatch(closeSnackbar());
          }}
          severity={type}
          sx={{
            width: "100%",
          }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert t elevation={6} ref={ref} variant="filled" {...props} />;
});

export default AppSnackbar;
const Text = common_components.Text;
