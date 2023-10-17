import { ZodBoolean, ZodNull, ZodNumber, ZodObject, ZodString } from 'zod';
import { Schema, SchemaIssue, SchemaShape, SchemaShapeType } from '@/types';

export const parseErrors = <S extends SchemaShape>(issues: SchemaIssue[]) =>
  Object.fromEntries(issues.map(({ path, message }) => [path[0], message])) as Partial<Record<keyof S, string>>;

export const parseFormData = async <S extends SchemaShape>(schema: Schema<S>, formData: FormData) => {
  const parsed = await schema.safeParseAsync(Object.fromEntries(formData.entries()));

  if (parsed.success) {
    return { data: parsed.data, errors: null };
  }

  const errors = parseErrors<S>(parsed.error.issues);

  return { data: null, errors };
};

export const getSchemaInitialValues = <S extends SchemaShape>(schema: Schema<S>) =>
  Object.fromEntries(
    Object.entries(schema.shape).map(([key, value]) => {
      if (value instanceof ZodNumber) return [key, 0];
      if (value instanceof ZodString) return [key, ''];
      if (value instanceof ZodBoolean) return [key, false];
      if (value instanceof ZodObject) return [key, {}];
      if (value instanceof ZodNull) return [key, null];
      return [key, undefined];
    }),
  ) as SchemaShapeType<S>;
