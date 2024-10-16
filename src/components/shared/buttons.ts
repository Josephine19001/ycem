import styled from 'styled-components';

export const LinkButton = styled.a`
  background-color: var(--color-secondary-lighter);

  padding: 10px 14px;
  border-radius: 5px;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  color: var(--light-text-color);

  &:hover {
    transition: all 0.5s ease-out;
    border-color: var(--light-text-color);
    color: var(--color-secondary);
    transition: border-color 0.5s ease, color 0.5s ease;
  }
`;

export const ButtonPrimary = styled.button`
  background: var(--color-primary);
  color: var(--color-light);
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const FooterButton = styled(ButtonPrimary)`
  padding: 3px 24px;
`;

export const ButtonSecondary = styled.button`
  border: 1px solid var(--color-primary);
  color: var(--color-primary);

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
