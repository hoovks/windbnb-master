import styled from "styled-components";

export const StyledSearchBox = styled.div`
  display: flex;
  min-height: 55px;
  border-radius: 16px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.palette.background.main};
`;
