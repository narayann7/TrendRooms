import app_images from "../assets/exportImage";
const center_row = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};
const center_column = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const bg = {
  backgroundImage: `url(${app_images.appbg})`,
  opacity: "0.25",
};

const base_box = {
  position: "absolute",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  flowDirection: "column",
};

const auth_center_box = {
  ...center_column,
  height: "335px",
  width: "442px",
  background: "#060608",
  borderRadius: "10px",
  minHeight: "335px",
  maxHeight: "335px",
  minWidth: "442px",
  maxWidth: "442px",
};

const textfield_style = {
  ...center_row,
  backgroundColor: "#212123",
  height: "45px",
  width: "300px",
  paddingLeft: "30px",
  paddingRight: "30px",

  margin: "10px",
  borderRadius: "10px",
};

const test = {
  background: "red",
};

const app_button_2 = {
  width: "110px",
  height: "35px",
};

export {
  center_row,
  bg,
  center_column,
  base_box,
  app_button_2,
  test,
  auth_center_box,
  textfield_style,
};
