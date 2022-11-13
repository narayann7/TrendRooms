class Urls {
  static serverBaseUrl = window._env_.SERVER_BASE_URL;
  static clientBaseUrl = window._env_.BASE_URL;
  static loginWithGoogleUrl = `${Urls.serverBaseUrl}/api/auth/google`;
  static loginWithGithubUrl = `${Urls.serverBaseUrl}/api/auth/github`;
  static loginWithLinkedinUrl = `${Urls.serverBaseUrl}/api/auth/linkedin`;
  static user = `${Urls.serverBaseUrl}/api/user`;
}

export default Urls;
