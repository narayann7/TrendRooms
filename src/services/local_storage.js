class LocalStorage {
  static getRefreshToken() {
    var token = localStorage.getItem("refreshToken");

    return token;
  }
  //set refresh token
  static setRefreshToken(token) {
    localStorage.setItem("refreshToken", token);
  }
}

export default LocalStorage;
