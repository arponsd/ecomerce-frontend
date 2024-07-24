const SERVER_NAME = `http://localhost:3000`;
// const SERVER_URL = `${SERVER_NAME}/api/theme`;
const SERVER_URL = `${SERVER_NAME}`;

export const environment = {
  appName: 'Demo Ecomerce',
  production: false,
  useHash: true,
  api: {
    baseUrl: SERVER_URL,
    storageUrl: `${SERVER_NAME}/storage`,
    refreshTokenEnabled: false,
    refreshTokenType: 'auth-refresh'
  }
}
