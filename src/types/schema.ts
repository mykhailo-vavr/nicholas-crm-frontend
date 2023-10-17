import { TypeOf, ZodIssue, ZodObject, ZodRawShape, ZodTypeAny } from 'zod';

export type SchemaIssue = ZodIssue;

export type SchemaShape = ZodRawShape;

export type Schema<S extends SchemaShape> = ZodObject<S>;

export type SchemaType<S extends ZodTypeAny> = TypeOf<S>;

export type SchemaShapeType<S extends SchemaShape> = SchemaType<ZodObject<S>>;
