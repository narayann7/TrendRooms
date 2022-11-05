class Urls {
  static serverBaseUrl = process.env.REACT_APP_SERVER_BASE_URL;
  static clientBaseUrl = process.env.REACT_APP_BASE_URL;
  static loginWithGoogleUrl = `${Urls.serverBaseUrl}/api/auth/google`;
  static loginWithGithubUrl = `${Urls.serverBaseUrl}/api/auth/github`;
  static loginWithLinkedinUrl = `${Urls.serverBaseUrl}/api/auth/linkedin`;
  static getUser = `${Urls.serverBaseUrl}/api/user`;
}

export default Urls;
