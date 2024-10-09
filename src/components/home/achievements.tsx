import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faUsers,
  faUsersCog,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';

const StyledContainer = styled(Container)`
  margin: 40px 0;
`;

const CounterBox = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 37px;
  text-align: center;
  background-color: ${({ color }) => (color ? color : '#f6f6f6')};
`;

const Icon = styled.div`
  font-size: 50px;
  margin: 0 0 15px;
  color: #fff;
`;

const CounterValue = styled.span`
  display: block;
  font-size: 42px;
  font-weight: 700;
  line-height: 1;
  color: #f2f2f2;
`;

const CounterText = styled.p`
  margin: 5px 0 0;
  padding: 0;
  font-size: 18px;
  font-weight: 500;
  color: var(--color-dark);
`;

const Counter: React.FC<{
  counter: number;
  text: string;
}> = ({ counter, text }) => {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const target = counter;
    const increment = Math.ceil(target / 200); // Adjust the duration accordingly
    let currentValue = 0;

    const updateCounter = () => {
      if (counterRef.current) {
        if (currentValue < target) {
          currentValue += increment;
          counterRef.current.innerHTML = Math.ceil(currentValue).toString();
          setTimeout(updateCounter, 20); // Adjust the interval accordingly
        } else {
          counterRef.current.innerHTML = target.toString();
        }
      }
    };

    updateCounter();
  }, [counter]);

  let icon;
  let boxColor;
  switch (text) {
    case 'Hosted Events':
      icon = <FontAwesomeIcon icon={faCalendar} />;
      boxColor = '#5DB18E';
      break;
    case 'Members & Volunteers':
      icon = <FontAwesomeIcon icon={faUsersCog} />;
      boxColor = 'var(--color-primary)';
      break;
    case 'Event Participants':
      icon = <FontAwesomeIcon icon={faUsers} />;
      boxColor = '#FDC364';
      break;
    case 'Social Reach':
      icon = <FontAwesomeIcon icon={faGlobe} />;
      boxColor = '#CE493F';
      break;
  }

  return (
    <CounterBox color={boxColor}>
      <Icon>{icon}</Icon>
      <CounterValue ref={counterRef} data-target={counter}></CounterValue>
      <CounterText>{text}</CounterText>
    </CounterBox>
  );
};

const Dashboard: React.FC = () => {
  return (
    <StyledContainer>
      <section id="currentReach">
        <Row xs={1} sm={2} md={2} lg={4}>
          <Col>
            <Counter counter={12} text="Hosted Events" />
          </Col>
          <Col>
            <Counter counter={23} text="Members & Volunteers" />
          </Col>
          <Col>
            <Counter counter={350} text="Event Participants" />
          </Col>
          <Col>
            <Counter counter={730} text="Social Reach" />
          </Col>
        </Row>
      </section>
    </StyledContainer>
  );
};

export default Dashboard;
