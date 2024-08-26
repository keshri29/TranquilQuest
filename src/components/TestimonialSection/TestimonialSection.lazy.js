import React, { lazy, Suspense } from 'react';

const LazyTestimonialSection = lazy(() => import('./TestimonialSection'));

const TestimonialSection = props => (
  <Suspense fallback={null}>
    <LazyTestimonialSection {...props} />
  </Suspense>
);

export default TestimonialSection;
