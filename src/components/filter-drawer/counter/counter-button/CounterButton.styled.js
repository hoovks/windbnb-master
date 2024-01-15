import styled from "styled-components";

export const StyledCounterButton = styled.span`
  display: flex;
  justify-content: center;
  width: 23px;
  height: 23px;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 4px;
  cursor: pointer;
`;
