export enum ServerConfigKeysEnum {
  API_BASE_URL = 'API_BASE_URL',
}

export enum ClientConfigKeysEnum {
  NEXT_PUBLIC_GOOGLE_API_KEY = 'NEXT_PUBLIC_GOOGLE_API_KEY',
}

export const getServerConfig = (key: ServerConfigKeysEnum) => {
  const config = process.env[key];

  if (config === undefined) {
    throw new Error(`${key} environment variable is undefined`);
  }

  return config;
};

export const getClientConfig = (key: ClientConfigKeysEnum) => {
  const configValues = {
    [ClientConfigKeysEnum.NEXT_PUBLIC_GOOGLE_API_KEY]: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  };

  const config = configValues[key];

  if (!config) {
    throw new Error(`${key} environment variable is undefined`);
  }

  return config;
};
