import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { StudentDetails } from './types';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const StudentImage = styled(Image)`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  object-fit: cover;
  margin-bottom: 16px;
  align-self: center;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 5px;
  margin: 20px 0;
`;

const ProgressBar = styled.div<{ percentage: number }>`
  width: ${({ percentage }) => percentage}%;
  height: 20px;
  background-color: var(--color-primary);
  border-radius: 5px;
  text-align: center;
  color: white;
`;

const StudentModal = ({
  student,
  onClose
}: {
  student: StudentDetails;
  onClose: () => void;
}) => {
  const progressPercentage = Math.floor((student.raised / student.goal) * 100);

  const handleOutsideClick = (e: MouseEvent) => {
    if ((e.target as Element).id === 'modal-background') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <ModalBackground id="modal-background">
      <ModalContent>
        {/* <CloseButton onClick={onClose}>&times;</CloseButton> */}
        <StudentImage
          src={student.picture}
          alt={student.name}
          width={100}
          height={100}
        />
        <h1>{student.name}</h1>
        <p>
          <strong>University:</strong> {student.university}
        </p>
        <p>
          <strong>Studying:</strong> {student.study}
        </p>
        <p>
          <strong>Current Situation:</strong> {student.situation}
        </p>
        <p>
          <strong>Grade:</strong> {student.grade}
        </p>
        <p>
          <strong>WASSCE Performance:</strong> {student.wassce}
        </p>
        <p>
          <strong>Amount Raised:</strong> GHS {student.raised}
        </p>
        <p>
          <strong>Goal:</strong> GHS {student.goal}
        </p>
        <ProgressBarContainer>
          <ProgressBar percentage={progressPercentage}>
            {progressPercentage}%
          </ProgressBar>
        </ProgressBarContainer>
      </ModalContent>
    </ModalBackground>
  );
};

export default StudentModal;
