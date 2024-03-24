export interface Storage<O extends object = never> {
  get: (key: string) => string | null;
  set: (key: string, value: any, options?: O) => void;
  delete: (key: string) => void;
}

export interface CookieStorageService extends Storage<{ expires?: number }> {}
