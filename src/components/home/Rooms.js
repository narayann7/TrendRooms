import React from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

function Rooms() {
  const navigate = useNavigate();

  return (
    <div
    // onClick={() => {
    //   navigate("/home/1", {
    //     replace: true,
    //   });
    // }}
    >
      <Search />
    </div>
  );
}

export default Rooms;
