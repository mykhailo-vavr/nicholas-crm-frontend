export enum ConfigKeysEnum {
  API_BASE_URL = 'API_BASE_URL',
}

export const getServerConfig = (key: ConfigKeysEnum) => {
  const config = process.env[key];

  if (config === undefined) {
    throw new Error(`${key} environment variable is undefined`);
  }

  return config;
};
