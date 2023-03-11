import React from "react";
import common_components from "../CommonComponents";
import { InputBase, Box } from "@mui/material";
import { textfield_style } from "./../../theme/CommonStyles";
import { BiSearchAlt } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import Spacer from "../Spacer";
function Search() {
  return (
    <div
      style={{
        ...center_row,
        paddingLeft: "80px",
        paddingRight: "100px",

        paddingTop: "20px",
        paddingBottom: "10px",

        justifyContent: "space-between",
      }}
    >
      <div style={center_row}>
        <div>
          <Text variant="h6">{"All Treanding Posts"}</Text>
        </div>
        <Spacer width="20px" />
        <Box
          sx={{
            backgroundColor: "#212123",
            height: "35px",
            width: "300px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "20px",
            paddingRight: "30px",
            borderRadius: "50px",
            ":hover": {
              border: "1px solid grey",
            },
          }}
        >
          <BiSearchAlt size={30} color="grey" />
          <Spacer width={10} />
          <InputBase
            className="bio_textfield"
            multiline={true}
            rows="1"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // next();
              }
            }}
            type="text"
            placeholder="search Posts"
            sx={{
              color: "white",
            }}
          />
        </Box>
      </div>
      <Box
        sx={{
          ...center_row,
          backgroundColor: "#4d4365",
          height: "35px",
          width: "140px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50px",
          ":hover": {
            border: "1px solid #7e7e7f",
          },
        }}
      >
        <Box>
          <Text
            variant="h7"
            sx={{
              color: "#fff",
              cursor: "pointer",
              "::selection": {
                backgroundColor: "transparent",
              },
            }}
          >
            {"Create Post"}
          </Text>
        </Box>
        <Spacer width="5px" />
        <MdAdd color="white" />
      </Box>
    </div>
  );
}

const center_row = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
};
export default Search;
const Text = common_components.Text;
