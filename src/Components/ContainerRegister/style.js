import styled from "styled-components";

export const ContentBox = styled.div`
  margin-top: 50px !important;
  max-width: 380px;

  width: 80vw;
  height: 70px;
  margin: auto;
  h1 {
    margin-top: 30px !important;
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;

    color: rgba(57, 57, 57, 0.8);
  }
`;

export const ContentButton = styled.div`
  margin-top: 20px !important;
  width: 80vw;
  max-width: 380px;

  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    width: 100px;
    height: 40px;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 7px;
  }
`;

export const boxCopy = styled.div`
  border: 1px solid black;
`;
