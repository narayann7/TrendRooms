import React from "react";
import common_components from "../components/CommonComponents";
import { Box, Snackbar, CircularProgress } from "@mui/material";
import Spacer from "./Spacer";
import { useSelector } from "react-redux";

function ToastLoader({
  customTheme = { vertical: "bottom", horizontal: "center" },
}) {
  const { isLoading, loaderTitle } = useSelector((state) => {
    return {
      isLoading: state.toastLoaderReducer.isLoading,
      loaderTitle: state.toastLoaderReducer.title,
    };
  });
  return (
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
  );
}

export default ToastLoader;
const Text = common_components.Text;
