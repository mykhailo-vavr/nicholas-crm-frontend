import { FC } from 'react';
import { signInSchema } from './schemas';
import { FormState, SchemaType } from '@/types';

export type SignInSchema = SchemaType<typeof signInSchema>;

export type SignInFormState = FormState<SignInSchema>;

export type SignInContainerFC = FC;

export type SignInPageFC = FC;
