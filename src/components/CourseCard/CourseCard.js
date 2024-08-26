import React, { useState } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  margin-bottom: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: ${({ expanded }) => (expanded ? 'normal' : 'nowrap')};
  max-height: ${({ expanded }) => (expanded ? 'none' : '3rem')};
`;

const CardPrice = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
`;

const EnrollButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: auto;
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0;
  margin-top: 0.5rem;
`;

function CourseCard({ title, description, price, image }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <CardWrapper>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription expanded={expanded}>
        {description}
      </CardDescription>
      {!expanded && description.length > 100 && (
        <MoreButton onClick={() => setExpanded(true)}>...more</MoreButton>
      )}
      {expanded && (
        <MoreButton onClick={() => setExpanded(false)}>Show less</MoreButton>
      )}
      <CardPrice>${price}</CardPrice>
      <EnrollButton>Enroll</EnrollButton>
    </CardWrapper>
  );
}

export default CourseCard;
