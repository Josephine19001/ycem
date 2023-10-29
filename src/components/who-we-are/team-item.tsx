import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;

  background: #f4f5f6;
  padding: 24px 32px;
  border-radius: 8px 8px;
  -webkit-transition: background 0.25s ease-in-out;
  -moz-transition: background 0.25s ease-in-out;
  -o-transition: background 0.25s ease-in-out;
  transition: background 0.25s ease-in-out;

  h3 {
    color: var(--color-primary-darker);
    font-weight: 600;
  }
  h5 {
    margin-bottom: 10px;
  }

  p {
    color: var(--color-primary-darker);
    font-size: var(--font-size-sm);
  }

  &:hover {
    background: var(--color-primary);
    color: var(--color-light);
    -webkit-transition: background 0.25s ease-in-out;
    -moz-transition: background 0.25s ease-in-out;
    -o-transition: background 0.25s ease-in-out;
    transition: background 0.25s ease-in-out;

    h3 {
      color: var(--color-light);
    }
    h5 {
      color: var(--color-light);
    }

    p {
      color: var(--color-light);
    }

    .icon {
      color: var(--color-light);
    }
  }

  img {
    max-width: 200px;
    padding: 8px;
    background-color: #dedede;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -o-border-radius: 50%;
  }
`; //team-item
const TeamInfoContainer = styled.div`
  display: block;
  margin-bottom: 0;
`; //team-info
const TeamIconsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
`; //team-icoin
const CustomizedIcon = styled(FontAwesomeIcon)`
  color: var(--color-primary);
  &:hover {
    color: var(--color-light);
    transition: color 0.3s ease-in-out;
    transform: scale(1.1);
  }
`;

interface Props {
  name: string;
  jobTitle: string;
  bioSummary: string;
  socialLinks: any;
  imgSrc: string;
  imgAlt: string;
}

const TeamItem = ({
  name,
  jobTitle,
  bioSummary,
  socialLinks,
  imgAlt,
  imgSrc,
}: Props) => {
  return (
    <ItemContainer key={name}>
      <div>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <h3>{name}</h3>
      <TeamInfoContainer>
        <h5>{jobTitle}</h5>
        <p>{bioSummary}</p>

        <TeamIconsContainer>
          {socialLinks.map((s: any) => (
            <a href={s.link}>
              <CustomizedIcon className="icon" icon={s.icon} size="2x" />
            </a>
          ))}{" "}
        </TeamIconsContainer>
      </TeamInfoContainer>
    </ItemContainer>
  );
};

export default TeamItem;
