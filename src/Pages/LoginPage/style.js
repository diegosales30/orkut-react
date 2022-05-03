import styled from "styled-components";

export const ContainerLoginPage = styled.div`
  width: 100vw;
  max-width: 420px;
  min-width: 320px;
  height: 100vh;
  min-height: 700px;

  background-size: 320px;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
  h2 {
    font-size: 15px;
    text-align: center;
    margin-bottom: 7px;

    font-style: normal;
    font-weight: 500;

    line-height: 19px;

    color: rgba(57, 57, 57, 0.6);
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;

    max-width: 420px;
    text-align: center;
    font-size: 13px;
    span {
      color: rgba(57, 57, 57, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const LogoLogin = styled.div`
  width: 80%;
  height: 200px;

  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-top: 50px;
    width: 250px;
    height: 250px;
  }
`;

export const contentBox = styled.div`
  border: 1px solid black;
`;
