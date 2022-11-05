import React from "react";

function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
      onClick={() => {
        localStorage.removeItem("refreshToken");
      }}
    >
      HomePage
    </div>
  );
}

export default HomePage;
