import React from "react";
import cc from "../CommonComponents";
import { Box } from "@mui/material";

function RoomPreview({ room_name }) {
  return (
    <Box
      sx={{
        backgroundColor: "#212123",
        height: "150px",
        width: "300px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
      }}
    >
      <cc.Text
        sx={{
          lineHeight: "1.2",
          paddingLeft: "20px",
          paddingTop: "20px",
        }}
        variant="h6"
      >
        {room_name}
      </cc.Text>
    </Box>
  );
}

export default RoomPreview;
