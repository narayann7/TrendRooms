import React from "react";
import { useNavigate } from "react-router-dom";

function Rooms() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/home/1", {
          replace: true,
        });
      }}
    >
      Rooms
    </div>
  );
}

export default Rooms;
