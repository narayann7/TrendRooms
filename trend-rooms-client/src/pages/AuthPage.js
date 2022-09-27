import React from "react";

function AuthPage() {
  console.log(localStorage.getItem("token"));

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
        localStorage.setItem(
          "token",
          "12345fduiobvhodfuihbvuiFHBuiovDFHuiobhvfUIODHvUFIhvbuDFHugv6789"
        );
      }}
    >
      AuthPage
    </div>
  );
}

export default AuthPage;
