export type ServerAction<S extends object> = (formData: FormData) => Promise<S>;
