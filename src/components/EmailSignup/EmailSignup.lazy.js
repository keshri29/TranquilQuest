import React, { lazy, Suspense } from 'react';

const LazyEmailSignup = lazy(() => import('./EmailSignup'));

const EmailSignup = props => (
  <Suspense fallback={null}>
    <LazyEmailSignup {...props} />
  </Suspense>
);

export default EmailSignup;
