import React from "react";
import common_components from "./CommonComponents";
import { useSelector, useDispatch } from "react-redux";
import { selectAvatarLable } from "../theme/CommonStyles";
import Spacer from "./Spacer";

function Header() {
  const userData = useSelector((state) => state.userReducer.user);

  return (
    <div
      style={{
        ...spaceAround,
        paddingLeft: "80px",
        paddingRight: "100px",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderBottom: "2.5px solid #212123",
      }}
    >
      <Text variant="h5">TrendRooms🔮</Text>

      <div style={spaceAround}>
        <Text variant="h6">{userData.name}</Text>
        <Spacer width={15} />
        <div>
          <img
            referrerPolicy="no-referrer"
            style={{
              ...selectAvatarLable,
              height: "45px",
              width: "45px",
            }}
            height={100}
            src={userData.displayPicture}
            alt="select avatar"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

const spaceAround = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flowDirection: "row",
};

export default Header;
const Text = common_components.Text;
