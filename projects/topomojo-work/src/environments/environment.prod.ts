export const environment = {
  production: true,
  settings: {
    appname: 'TopoMojo',
    apphost: 'https://topomojo-api.crucible.io/',
    mkshost: 'https://topomojo.crucible.io/mks/',
    oidc: {
      "authority": "https://id.crucible.io",
      "client_id": "topomojo-ui-dev",
      "response_type": "code",
      "scope": "openid profile role topomojo-api",
      "redirect_uri": "https://topomojo.crucible.io/oidc",
      "silent_redirect_uri": "https://topomojo.crucible.io/assets/odic-silent.html",
      "loadUserInfo": true,
      "useLocalStorage": true,
      "debug": false,
      "automaticSilentRenew": true
    }
  }
};
