import React from 'react';
import styled from 'styled-components';

const SignupWrapper = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const SignupTitle = styled.h2`
  margin-bottom: 1rem;
`;

const SignupForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const EmailInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

function EmailSignup() {
  return (
    <SignupWrapper>
      <SignupTitle>Start Your Journey to Freedom</SignupTitle>
      <p>Enroll in our courses and take the first step towards overcoming your compulsive habits.</p>
      <SignupForm>
        <EmailInput type="email" placeholder="Enter your email" />
        <SubmitButton type="submit">Get Started</SubmitButton>
      </SignupForm>
    </SignupWrapper>
  );
}

export default EmailSignup;