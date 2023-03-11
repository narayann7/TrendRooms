import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Search from "./Search";
import RoomPreview from "./RoomPreview";
const fakeData = [
  {
    id: 1,
    name: "When is the last time you experienced nostalgia",
  },
  {
    id: 2,
    name: "What’s the scariest dream you’ve ever had?",
  },
  {
    id: 3,
    name: "What’s the weirdest thought you’ve ever had?",
  },

  {
    id: 4,
    name: "What’s the first thing that comes to mind when you hear the word “fidget”?",
  },
  {
    id: 5,
    name: "What made-up word would you incorporate into the English language if you could?",
  },
  {
    id: 6,
    name: "What animal would you want to be reincarnated as?",
  },
  {
    id: 7,
    name: "If you could visit one planet, which would it be?",
  },
  {
    id: 8,
    name: "What super power do you wish you had?",
  },
  {
    id: 9,
    name: "What’s your very first memory?",
  },
  {
    id: 10,
    name: "What did say as a kid when asked: What do you want to be when you grow up?",
  },
  {
    id: 10,
    name: "What did say as a kid when asked: What do you want to be when you grow up?",
  },
  {
    id: 10,
    name: "What did say as a kid when asked: What do you want to be when you grow up?",
  },
  {
    id: 10,
    name: "What did say as a kid when asked: What do you want to be when you grow up?",
  },
  {
    id: 10,
    name: "What did say as a kid when asked: What do you want to be when you grow up?",
  },
];

function Rooms() {
  const navigate = useNavigate();

  return (
    <div>
      <Search />
      <Grid
        style={{
          paddingLeft: "80px",
          paddingRight: "100px",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
        container
        spacing={2}
      >
        {fakeData.map((room) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <RoomPreview room_name={room.name} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Rooms;
