import { FC } from 'react';
import { SignUp } from '@clerk/nextjs';

const SignUpPage: FC = () => {
  return (
    <SignUp
      appearance={{
        elements: {
          formButtonPrimary:
            'bg-neutral-600 hover:bg-neutral-800 text-sm normal-case',
        },
      }}
    />
  );
};

export default SignUpPage;
