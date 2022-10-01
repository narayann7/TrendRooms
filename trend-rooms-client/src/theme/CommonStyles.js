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
  height: "50vh",
  width: "30vw",
  background: "#060608",
  borderRadius: "10px",
  minHeight: "335px",
  minWidth: "442px",
};

const test = {
  background: "red",
};

export { center_row, bg, center_column, base_box, test, auth_center_box };
