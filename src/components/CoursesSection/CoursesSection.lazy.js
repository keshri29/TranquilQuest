import React, { lazy, Suspense } from 'react';

const LazyCoursesSection = lazy(() => import('./CoursesSection'));

const CoursesSection = props => (
  <Suspense fallback={null}>
    <LazyCoursesSection {...props} />
  </Suspense>
);

export default CoursesSection;
