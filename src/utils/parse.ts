import { custom } from 'zod';
import { Schema, SchemaEffect, SchemaIssue, SchemaShape } from '@/types';
import { addressSchema, idSchema } from './schema';

export const parseErrors = <S extends SchemaShape>(issues: SchemaIssue[]) =>
  Object.fromEntries(issues.map(({ path, message }) => [path[0], message])) as Partial<Record<keyof S, string>>;

export const parseFormData = async <S extends SchemaShape>(schema: Schema<S> | SchemaEffect<S>, formData: FormData) => {
  const parsed = await schema.safeParseAsync(Object.fromEntries(formData.entries()));

  if (parsed.success) {
    return { data: parsed.data, errors: null };
  }

  const errors = parseErrors<S>(parsed.error.issues);

  return { data: null, errors };
};

export const parseId = (id: any) => idSchema().parseAsync(id);

export const parseAddressString = (address: string) => {
  const parts = address.split(', ');

  return {
    city: parts.at(-3)!,
    streetNumber: parts.find((part) => /\d/.test(part)),
    street: parts[0],
  };
};

// TODO: refactor with .refine to better error message
export const addressStringSchema = () =>
  custom<string>((str) => {
    if (typeof str !== 'string') {
      return false;
    }

    const [street, streetNumber, city] = str.split(', ');

    const { success } = addressSchema().safeParse({ street, streetNumber, city });

    return success;
  }, 'Неправильний формат').transform((str) => {
    const [street, streetNumber, city] = str.split(', ');
    return { street, streetNumber, city };
  });
