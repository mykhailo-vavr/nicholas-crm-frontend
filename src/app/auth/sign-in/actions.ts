'use server';

import { AuthService } from '@/api';
import { parseFormData } from '@/utils';
import { signInSchema } from './schemas';
import { tokenService } from '@/services';
import { SignInAction } from './types';

export const signInAction: SignInAction = async (_, formData) => {
  const parsed = await parseFormData(signInSchema, formData);

  if (!parsed.data) {
    return parsed;
  }

  try {
    const result = await AuthService.authControllerSignIn({
      requestBody: {
        ...parsed.data,
      },
    });

    tokenService.set.access(result.accessToken);
    return parsed;
  } catch {
    return {
      data: null,
      errors: {
        email: 'Неправильний імейл або пароль',
        password: 'Неправильний імейл або пароль',
      },
    };
  }
};
