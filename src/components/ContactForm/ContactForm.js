// src/components/ContactForm.js
import React from 'react';
import styled from 'styled-components';

const ContactFormWrapper = styled.section`
  background-color: #f5e6d3;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
`;

const FormContainer = styled.div`
  background-color: #f0d9b5;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #d3b17d;
  border-radius: 4px;
  background-color: #faf3e5;
  flex: 1;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #d3b17d;
  border-radius: 4px;
  background-color: #faf3e5;
  margin-bottom: 1rem;
  resize: vertical;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  background-color: #d3b17d;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: #c19b6c;
  }
`;

function ContactForm() {
  return (
    <ContactFormWrapper>
      <FormContainer>
        <Title>Contact Us</Title>
        <Subtitle>Fill out the form below and we'll get back to you as soon as possible.</Subtitle>
        <Form>
          <InputGroup>
            <Input type="text" placeholder="Enter your first name" />
            <Input type="text" placeholder="Enter your last name" />
          </InputGroup>
          <Input type="email" placeholder="Enter your email" />
          <TextArea placeholder="Enter your message" />
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormContainer>
    </ContactFormWrapper>
  );
}

export default ContactForm;