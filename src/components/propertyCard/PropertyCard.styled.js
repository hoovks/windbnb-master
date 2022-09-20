import styled from "styled-components";
import background from "../../images/interior.jpeg";

export const StyledPropertyCard = styled.div`
  font-family: "Montserrat";
  .image {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 24px;
    width: 100%;
    aspect-ratio: 16/9;
  }

  .row {
    display: flex;
    align-items: center;
    height: 27px;
    margin-top: 13px;
    margin-bottom: 13px;
  }

  .superHost {
    white-space: nowrap;
    border: 1px solid #4f4f4f;
    border-radius: 12px;
    display: inline-block;
    margin-right: 10px;
    padding: 6px 10px;

    font-family: "Montserrat";
    font-weight: 700;
    font-size: 10px;
    text-transform: uppercase;
    color: #4f4f4f;
  }

  .type,
  .rate {
    font-size: 12px;
    font-weight: 500;
  }

  .type {
    color: #828282;
  }

  .rate {
    color: #4f4f4f;
    display: flex;
    margin-left: auto;
  }

  .starIcon {
    margin-right: 5px;
    max-height: 15px;
  }

  .name {
    color: #333333;
    font-size: 14px;
    font-weight: 600;
  }
`;
