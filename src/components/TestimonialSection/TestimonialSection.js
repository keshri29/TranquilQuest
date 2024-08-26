import React from 'react';
import styled from 'styled-components';

// Styled components
const TestimonialWrapper = styled.section`
  padding: 3rem 1.5rem; /* Equivalent to py-12 sm:py-16 lg:py-20 */
  background-color: #f9fafb; /* Equivalent to bg-gray-50 */
  position: relative;
`;

const TestimonialTitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const TestimonialSubtitle = styled.p`
  font-size: 1.125rem; /* Equivalent to text-lg */
  font-weight: 500; /* Equivalent to font-medium */
  color: #4b5563; /* Equivalent to text-gray-600 */
`;

const TestimonialTitle = styled.h2`
  margin-top: 1rem;
  font-size: 2rem; /* Equivalent to text-3xl */
  font-weight: 700; /* Equivalent to font-bold */
  color: #111827; /* Equivalent to text-gray-900 */
`;

const TestimonialContent = styled.blockquote`
  font-style: italic;
  margin: 2rem auto;
  text-align: center;
  font-size: 1.125rem; /* Equivalent to text-lg */
  color: #111827; /* Equivalent to text-gray-900 */
  max-width: 800px;
`;

const TestimonialAuthor = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const AuthorName = styled.p`
  font-size: 1rem; /* Equivalent to text-base */
  font-weight: 700; /* Equivalent to font-bold */
  color: #111827; /* Equivalent to text-gray-900 */
`;

const AuthorRole = styled.p`
  margin-top: 0.125rem;
  font-size: 0.875rem; /* Equivalent to text-sm */
  color: #4b5563; /* Equivalent to text-gray-600 */
`;


// Component
function TestimonialSection() {
  return (
    <TestimonialWrapper>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 bg-grey-100">
        <div className="flex flex-col items-center">
          <TestimonialTitleWrapper>
            <TestimonialSubtitle>0150+ people have said how good Rareblocks</TestimonialSubtitle>
            <TestimonialTitle>Our happy clients say about us</TestimonialTitle>
          </TestimonialTitleWrapper>

          <a href="#" title="" className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 hover:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
            Check all 0150+ reviews
          </a>

          <div className="relative mt-10 md:mt-24">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }}></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              <div className="flex flex-col overflow-hidden shadow-xl bg-white">
                <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
                  <blockquote className="flex-1 mt-8">
                    <p>“The courses at Habit Breakers have been life-changing. Their strategies and support have helped me overcome my compulsive behaviors and regain control of my life.”</p>
                  </blockquote>
                  <div className="flex items-center mt-8 fa-solid fa-user">
                    {/* <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt="Jane Doe" /> */}
                    <div className="ml-5 text-nowrap font-sans" style={{ lineHeight: '1.2' }}>
                      <AuthorName>Neha Sharma</AuthorName>
                      <AuthorRole>Software Engineer</AuthorRole>
                    </div>
                  </div>
                </div>
              </div>

              {/* Repeat similar blocks for other testimonials */}
              <div className="flex flex-col overflow-hidden shadow-xl bg-white">
                <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
                  <blockquote className="flex-1 mt-8">
                    <p>“I was struggling with procrastination for years, but HabitHarbor’s program helped me overcome it step by step. The support community is also very encouraging and motivating.”</p>
                  </blockquote>
                  <div className="flex items-center mt-8 fa-solid fa-user text-2xl">
                    {/* <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png" alt="Leslie Alexander" /> */}
                    <div className="ml-5 text-nowrap font-sans" style={{ lineHeight: '1.2' }}>
                      <AuthorName>Aarav Mehta</AuthorName>
                      <AuthorRole>Digital Marketing Specialist</AuthorRole>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden shadow-xl bg-white">
                <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
                  <blockquote className="flex-1 mt-8">
                    <p>“HabitHarbor has completely transformed my daily routine. The courses are insightful, and the techniques are practical and easy to follow. I feel more focused and in control of my habits.”</p>
                  </blockquote>
                  <div className="flex items-center mt-8 fa-solid fa-user">
                    {/* <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png" alt="Leslie Alexander" /> */}
                    <div className="ml-5 text-nowrap font-sans" style={{ lineHeight: '1.2' }}>
                      <AuthorName>College Student</AuthorName>
                      <AuthorRole>Digital Marketing Specialist</AuthorRole>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TestimonialWrapper>
  );
}

export default TestimonialSection;
