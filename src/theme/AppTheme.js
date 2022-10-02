import { createTheme } from "@mui/material/styles";
const AppTheme = createTheme({
  palette: {
    primary: {
      main: "#212123",
    },
  },
  typography: {
    fontFamily: `"Poppins","Sen"`,
  },
  components: {
    MuiButton: {
      defaultProps: {
        // disableRipple: true,

        sx: {
          ".MuiTouchRipple-child": {
            backgroundColor: "grey",
          },
        },
      },
    },
  },
});

export default AppTheme;
