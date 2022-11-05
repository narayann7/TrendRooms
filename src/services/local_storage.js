import CommonServices from "./common_services";

class LocalStorage {
  static getRefreshToken() {
    var token = localStorage.getItem("refreshToken");
    return token;
  }
  //set refresh token
  static setRefreshToken(token) {
    localStorage.setItem("refreshToken", token);
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
