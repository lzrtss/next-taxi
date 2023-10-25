import { FC } from 'react';
import { SignIn } from '@clerk/nextjs';

const SignInPage: FC = () => {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary:
            'bg-neutral-600 hover:bg-neutral-800 text-sm normal-case',
        },
      }}
    />
  );
};

export default SignInPage;
