import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';
import { StudentDetails } from './types';

const StudentCardContainer = styled.div`
  position: relative;
  border: 1px solid var(--color-primary);
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  width: 400px;
  height: 300px;
  overflow: hidden;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const StudentImage = styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
  cursor: pointer;
  ${StudentCardContainer}:hover & {
    opacity: 1;
  }
`;

const StudentCard = ({ student }: { student: StudentDetails }) => {
  return (
    <StudentCardContainer>
      <StudentImage
        src={student.picture}
        alt={student.name}
        width={150}
        height={150}
      />
      <h2>{student.name}</h2>
      <p>
        <strong>University:</strong> {student.university}
      </p>
      <p>
        <strong>Studying:</strong> {student.study}
      </p>
      <Overlay>
        <span>Learn more about {student.name}</span>
      </Overlay>
    </StudentCardContainer>
  );
};

export default StudentCard;
