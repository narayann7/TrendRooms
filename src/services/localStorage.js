import CommonServices from "./commonServices";

class LocalStorage {
  //get refresh token
  static getRefreshToken() {
    var token = localStorage.getItem(
      CommonServices.Base64Encode("refreshToken")
    );
    return token;
  }
  //set refresh token
  static setRefreshToken(token) {
    localStorage.setItem(CommonServices.Base64Encode("refreshToken"), token);
  }
  //get access token
  static getAccessToken() {
    var token = localStorage.getItem(
      CommonServices.Base64Encode("accessToken")
    );
    return token;
  }
  //set access token
  static setAccessToken(token) {
    localStorage.setItem(CommonServices.Base64Encode("accessToken"), token);
  }
  //set user data
  static setUserData(data) {
    //base64 encoding the user data
    var encodedData = CommonServices.Base64Encode(JSON.stringify(data));
    localStorage.setItem("userData", encodedData);
  }
  //get user data
  static getUserData() {
    var data = localStorage.getItem("userData");
    //base64 decoding the user data
    var decodedData = CommonServices.Base64Decode(data);
    return JSON.parse(decodedData);
  }

  static deleteAll() {
    localStorage.clear();
  }
}

export default LocalStorage;
