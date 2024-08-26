import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterLinks>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Courses</FooterLink>
        <FooterLink href="#">Community</FooterLink>
        <FooterLink href="#">Support</FooterLink>
        <FooterLink href="#">Privacy</FooterLink>
      </FooterLinks>
      <p>&copy; 2024 Habit Breakers. All rights reserved.</p>
    </FooterWrapper>
  );
}

export default Footer;