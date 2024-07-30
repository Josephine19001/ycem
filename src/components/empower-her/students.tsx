import React, { useState } from 'react';
import styled from 'styled-components';
import StudentCard from './students-card';
import IntroSection from '../shared/intro-section';
import StudentModal from './student-modal';
import studentPic from '../../../public/student-pic.jpg';
import { StudentDetails } from './types';

export const students: StudentDetails[] = [
  {
    id: 1,
    name: 'Yaa Badu',
    university: 'University of Ghana',
    study: 'Mechanical Engineering',
    situation: 'Needs financial support for tuition',
    grade: 'A',
    wassce: '8 A’s',
    picture: studentPic,
    raised: 2000,
    goal: 7500
  },
  {
    id: 2,
    name: 'Ama Kwakyewaa',
    university: 'Kwame Nkrumah University of Science and Technology',
    study: 'Electrical Engineering',
    situation: 'Outstanding academic performance',
    grade: 'A',
    wassce: '7 A’s, 1 B',
    picture: studentPic,
    raised: 5000,
    goal: 7500
  },
  {
    id: 3,
    name: 'Abigail Ansah',
    university: 'University of Energy and Natural Resources',
    study: 'Computer Engineering',
    situation: 'Needs financial support for accommodation',
    grade: 'B+',
    wassce: '6 A’s, 2 B’s',
    picture: studentPic,
    raised: 3000,
    goal: 7500
  },
  {
    id: 4,
    name: 'Emily Twene',
    university: 'University of Cape Coast',
    study: 'Civil Engineering',
    situation: 'Top of her class',
    grade: 'A+',
    wassce: '8 A’s',
    picture: studentPic,
    raised: 7500,
    goal: 7500
  }
];

const StudentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const StudentsPage: React.FC = () => {
  const [hoveredStudent, setHoveredStudent] = useState<StudentDetails | null>(
    null
  );

  return (
    <div>
      <IntroSection
        title="Meet the Students"
        subTitle="Do you want to support the next Female Engineer by donating to help their education?"
        breadcrumbPaths={[
          { label: 'Donations', href: '/support-us' },
          { label: 'Empower Her', href: '/support-us/empower-her' }
        ]}
      />
      <StudentsContainer>
        {students.map((student: StudentDetails) => (
          <div key={student.id} onClick={() => setHoveredStudent(student)}>
            <StudentCard student={student} />
            {hoveredStudent && hoveredStudent.id === student.id && (
              <StudentModal
                student={student}
                onClose={() => setHoveredStudent(null)}
              />
            )}
          </div>
        ))}
      </StudentsContainer>
    </div>
  );
};

export default StudentsPage;
