'use client'
import React, { ComponentType } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from './auth';
import { isBrowser } from './util';

const withAuth = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const WithAuth = (props: P) => {
    const router = useRouter();
    if (!isAuthenticated()) {
      if (isBrowser()) router.replace('/userinfo');
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  WithAuth.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'
    })`;

  return WithAuth;
};

export default withAuth;