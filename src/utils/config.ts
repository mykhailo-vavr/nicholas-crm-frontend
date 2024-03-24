export enum CommonConfigKeysEnum {
  NEXT_PUBLIC_API_BASE_URL = 'NEXT_PUBLIC_API_BASE_URL',
}

export enum ServerConfigKeysEnum {}

export enum ClientConfigKeysEnum {
  NEXT_PUBLIC_GOOGLE_API_KEY = 'NEXT_PUBLIC_GOOGLE_API_KEY',
}

export const getServerConfig = (key: ServerConfigKeysEnum | CommonConfigKeysEnum) => {
  const config = process.env[key];

  if (config === undefined) {
    throw new Error(`${key} environment variable is undefined`);
  }

  return config;
};

export const getClientConfig = (key: ClientConfigKeysEnum | CommonConfigKeysEnum) => {
  const configValues = {
    [CommonConfigKeysEnum.NEXT_PUBLIC_API_BASE_URL]: process.env.NEXT_PUBLIC_API_BASE_URL,
    [ClientConfigKeysEnum.NEXT_PUBLIC_GOOGLE_API_KEY]: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  };

  const config = configValues[key];

  if (!config) {
    throw new Error(`${key} environment variable is undefined`);
  }

  return config;
};
