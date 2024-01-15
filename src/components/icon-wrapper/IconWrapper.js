import styled from "styled-components";

const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = ({ children }) => {
  return <StyledIconWrapper>{children}</StyledIconWrapper>;
};
