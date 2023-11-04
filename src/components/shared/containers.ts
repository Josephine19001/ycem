import styled from "styled-components";

export const FlexContainerColumnCenter = styled.div<{ $gap?: string }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: ${({ $gap }) => ($gap ? $gap : `10px`)};
`;
export const FlexContainerColumn = styled.div<{ $gap?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ $gap }) => ($gap ? $gap : `10px`)};
`;

export const FlexContainerColumnGapped = styled.div<{
  $alignitems?: string;
}>`
  display: flex;
  align-items: ${({ $alignitems }) => ($alignitems ? $alignitems : "center")};
  flex-direction: column;
  gap: 10px;
`;
export const FlexContainerColumnSpaceBetween = styled.div<{
  $gap?: string;
  $alignitems?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({ $alignitems }) => ($alignitems ? $alignitems : `center`)};
  gap: ${({ $gap }) => ($gap ? $gap : `10px`)};
`;

export const FlexContainerRowCenter = styled.div<{ $gap?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $gap }) => ($gap ? $gap : `10px`)};
`;
export const FlexContainerRowSpaceBetween = styled.div<{
  $gap?: string;
  $alignitems?: string;
}>`
  display: flex;
  align-items: ${({ $alignitems }) => ($alignitems ? $alignitems : `center`)};
  justify-content: space-between;

  gap: ${({ $gap }) => ($gap ? $gap : `10px`)};
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const ContainerMedium = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px;
  padding-left: 24px;
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

export const Section = styled.div<{ bgColor?: string }>`
  background-color: var(${({ bgColor }) => (bgColor ? bgColor : `--white`)});
`;

export const SectionWithBg = styled.div`
  background-color: var(--bg-color-light);
  margin: 100px -195px;
  padding: 0 390px;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    margin: 10px -32px;
    padding: 0 64px;
  }
`;

export const LeftAlignFlexContainerColumnGapped = styled(
  FlexContainerColumnGapped
)`
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const HeaderContainer = styled(FlexContainerColumnCenter)`
  padding-bottom: 80px;
  text-align: center;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const Input = styled.input`
  font-weight: 400;
  color: var(--second-text-color);
  background-color: #f2f6fa;
  height: 44px;
  width: 250px;
  @media (max-width: 768px) {
    width: 100%;
  }
  &:focus {
    border: 0.5px solid var(--color-secondary);
    transition: 0.2s all ease-in-out;
  }
`;

export const MainDivider = styled.div`
  width: 100%;
  height: 0.2px;
  background-color: var(--text-muted-color);
  margin: 0 -195px;
  @media (max-width: 768px) {
    margin: 0px -24px;
  }
`;
