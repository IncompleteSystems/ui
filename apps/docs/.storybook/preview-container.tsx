import React, { FC, PropsWithChildren, useEffect } from 'react';

import { DocsContainer, DocsContainerProps } from '@storybook/blocks';

import { useAuthState, useSignInWithGithub } from 'react-firebase-hooks/auth';

import { firebaseAuth } from '../lib/firebase';

export const AuthContainer: FC<PropsWithChildren<DocsContainerProps>> = ({ children, ...props }) => {
  const [user, userLoading, userError] = useAuthState(firebaseAuth);

  const [signInWithGithub] = useSignInWithGithub(firebaseAuth);

  useEffect(() => {
    if (user) {
      return;
    }

    signInWithGithub();
  }, [user, signInWithGithub]);

  return <DocsContainer {...props}>{children}</DocsContainer>;
};