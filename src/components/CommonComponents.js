import { styled } from "@mui/material/styles";
import { Typography, Button } from "@mui/material";

const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Sen",
  color: "white",
}));
const AppButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#212123",
  width: "245px",
  paddingLeft: "15px",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingRight: "15px",
  textTransform: "none",
  outline: "none",
  border: "0.1px solid #212123",
  borderRadius: "10px",
  "&:hover": {
    border: "0.1px solid white",
    backgroundColor: "#060608",
  },
  ".MuiTouchRipple-child": {
    backgroundColor: theme.palette.grey[100],
  },
}));

const common_components = {
  Text,
  AppButton,
};

export default common_components;
