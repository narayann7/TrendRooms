import React from "react";

function Spacer({ height = 0, width = 0 }) {
  return (
    <div
      style={{
        height: height,
        width: width,
      }}
    ></div>
  );
}

export default Spacer;
