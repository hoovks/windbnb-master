import styled from "styled-components";

export const StyledLocationList = styled.div`
  display: ${(props) => (props.show ? "none" : "flex")};
  flex-direction: column;
  padding-inline: 30px;
  padding-block: 42px;
  gap: 34px;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  :hover {
    transform: scale(1.05);
    transform-origin: left;
    cursor: pointer;
  }
`;
