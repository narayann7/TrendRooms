import React from "react";
import cc from "../CommonComponents";
import { Box } from "@mui/material";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import Spacer from "./../Spacer";

function RoomPreview({ room_name }) {
  return (
    <Box
      sx={{
        paddingTop: "20px",
        paddingBottom: "20px",
        backgroundColor: "#212123",
        height: "280px",
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
        variant="h7"
      >
        {room_name}
      </cc.Text>
      <Box
        style={{
          padding: "20px",

          height: "150px",
          width: "300px",
        }}
      >
        <img
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          SRC="https://www.parents.com/thmb/9_tXg2OGn876wTDHUt9n_-7Icz0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1300384940-2000-a5979552a66f4fc7b67aeb35110fea8d.jpg"
          alt="post"
        />
        <div
          style={{
            paddingTop: "4px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <AiFillHeart color="red" />
            <Spacer width={5} />
            <cc.Text variant="h7" fontSize={15}>
              500
            </cc.Text>
          </div>
          <cc.Text variant="h7" fontSize={15}>
            username
          </cc.Text>
        </div>
      </Box>
    </Box>
  );
}

export default RoomPreview;
