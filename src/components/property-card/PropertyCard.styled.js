import styled from "styled-components";

export const StyledPropertyCard = styled.div``;

export const SuperHost = styled.div`
  display: flex;
  padding: 6px 10px;
  margin-right: 10px;
  white-space: nowrap;
  border: 1px solid ${({ theme }) => theme.palette.primary.dark};
  border-radius: 12px;
`;

export const Img = styled.div`
  background-image: ${(props) =>
    `url("${require("../../assets/images/interiors/" + props.image)}")`};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 24px;
  width: 100%;
  aspect-ratio: 16/9;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  min-height: 27px;
  margin-block: 13px;
`;
