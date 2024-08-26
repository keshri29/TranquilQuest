import React from 'react';
import styled from 'styled-components';

// Styled components
const AboutWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: #f5e6d3; /* Background color */
`;

const AboutTitle = styled.h2`
  text-align: center;
  color: #333; /* Text color */
  margin-bottom: 1.5rem;
  font-size: 2rem;
`;

const AboutContent = styled.p`
  color: #333; /* Text color */
  max-width: 800px;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.6;
`;

// About component
function About() {
  return (
    <AboutWrapper>
      <div className='fa-solid fa-address-card flex-col text-4xl mb-15 ml-1'></div>
      <AboutTitle>About Us</AboutTitle>
      <AboutTitle>Welcome to HabitHarbor – Your Sanctuary for Personal Growth and Transformation</AboutTitle>

      <AboutContent>
      At HabitHarbor, we believe in the power of change and the strength within each individual to overcome challenges and achieve their full potential. Our mission is to empower you with the tools, strategies, and support you need to break free from unproductive habits and embrace a healthier, more fulfilling lifestyle. We are dedicated to helping individuals overcome their
        habits and achieve personal growth. Our courses and resources are designed to
        provide support and guidance as you embark on your journey to a healthier, more
        fulfilling life. Our team is passionate about making a positive impact and
        providing the tools you need to succeed.
      </AboutContent>
      <br />
      <AboutTitle>What We DO?</AboutTitle>
      <AboutContent>
      HabitHarbor is dedicated to helping people like you transform their lives by overcoming habits that hold them back. We offer a range of resources designed to support you through your journey of personal growth:
      
      <div style={{ backgroundColor: '#f5e6d3', color: '#333', padding: '2rem' }}>
      <section>
        <ul>
          <li>
            <h3>
              <span style={{ fontWeight: 'bold' }}>Comprehensive Courses:</span> Our meticulously designed courses provide step-by-step guidance on how to address and overcome specific habits. Whether you’re struggling with procrastination, unhealthy eating, or other challenging behaviors, our courses offer practical strategies and actionable steps to help you make meaningful changes.
            </h3>
          </li>
          <li>
            <h3>
              <span style={{ fontWeight: 'bold' }}>Expert Insights:</span> Our team of experts shares valuable insights and research-backed techniques to help you understand the psychology behind habits and how to effectively change them. Through articles, videos, and webinars, we offer you the knowledge you need to make informed decisions about your personal development.
            </h3>
          </li>
          <li>
            <h3>
              <span style={{ fontWeight: 'bold' }}>Supportive Community:</span> At HabitHarbor, you’re never alone. Join a vibrant community of individuals who share similar goals and challenges. Engage in discussions, share your experiences, and gain motivation from others who are on their own journey of transformation.
            </h3>
          </li>
          <li>
            <h3>
              <span style={{ fontWeight: 'bold' }}>Personalized Coaching:</span> For those seeking a more tailored approach, we offer one-on-one coaching sessions. Our experienced coaches work with you to develop a personalized plan that addresses your unique needs and goals, providing ongoing support and accountability.
            </h3>
          </li>
        </ul>
      </section>
    </div>
    <AboutTitle>Our Philosophy</AboutTitle>
    <AboutContent>At HabitHarbor, we understand that change is a journey, not a destination. We are committed to providing a supportive environment where you can explore new habits, develop positive routines, and achieve lasting transformation. Our approach is grounded in empathy, respect, and a deep understanding of the challenges that come with personal growth.</AboutContent>
    <AboutTitle>Our Vision</AboutTitle>
    <AboutContent>HabitHarbor aims to be a leading resource for individuals seeking to transform their lives by overcoming habits that hinder their personal and professional growth. We envision a world where everyone has access to the tools and support they need to achieve their full potential and live a life of purpose and fulfillment.</AboutContent>
    <AboutTitle>Get Involved</AboutTitle>
    <AboutContent>Join us at HabitHarbor and take the first step toward a better you. Explore our courses, engage with our community, and start your journey of transformation today. Together, we can make positive changes and create a brighter future.
    </AboutContent>
    </AboutContent>
    </AboutWrapper>
  );
}

export default About;
