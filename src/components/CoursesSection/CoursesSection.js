import React from 'react';
import styled from 'styled-components';
import CourseCard from '../CourseCard/CourseCard';

const CoursesWrapper = styled.section`
  padding: 4rem 2rem;
`;

const CoursesTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const courses = [
  {
    title: 'Overcoming Compulsive Addication of...',
    description: 'This course provides a comprehensive approach to overcoming compulsive pornography consumption and masturbation. You will learn about the psychological and emotional factors driving these behaviors, gain practical tools to manage and reduce urges, and develop healthy habits to regain control over your life. Expert guidance and support will be offered throughout the process to help you achieve lasting change.',
    price: 99,
     image: '/assets/course1.png',
  },
  {
    title: 'Overcoming Compulsive Smokeing...',
    description: 'This course is designed to help individuals break free from the addiction to smoking. It covers a range of strategies including behavioral therapy techniques, coping mechanisms for managing cravings, and lifestyle changes to support your journey to becoming smoke-free. With expert advice, personalized support, and practical exercises, you’ll learn how to overcome the psychological and physical dependencies associated with smoking.',
    price: 99,
     image: '/assets/course2.png',
  },
  {
    title: 'Overcoming Compulsive Gaming',
    description: 'Regain control of your life and break free from compulsive gaming habits.',
    price: 99,
     image: '/assets/course1.png',
  },
  {
    title: 'Overcoming Compulsive Hoarding',
    description: 'Declutter your living space and break free from the cycle of compulsive hoarding.',
    price: 99,
     image: '/assets/course1.png',
  },
];

function CoursesSection() {
  return (
    <CoursesWrapper>
      <CoursesTitle>Courses to Overcome Compulsive Habits</CoursesTitle>
      <CoursesGrid>
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </CoursesGrid>
    </CoursesWrapper>
  );
}

export default CoursesSection;