import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CoursesSection from './components/CoursesSection/CoursesSection';
import TestimonialSection from './components/TestimonialSection/TestimonialSection';
import EmailSignup from './components/EmailSignup/EmailSignup';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm'; 
import About from './components/About/About';

const AppWrapper = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f5e6d3;
  color: #333;
`;

function App() {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <CoursesSection />
              <TestimonialSection />
              <EmailSignup />
            </>
          } />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </AppWrapper>
    </Router>
  );
}

export default App;
