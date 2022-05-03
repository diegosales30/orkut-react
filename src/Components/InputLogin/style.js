import styled from "styled-components";

export const ContainerForm = styled.div`
  width: 80vw;
  max-width: 420px;
  height: 270px;
  margin: auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  form {
    width: 90%;
    height: 250px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    button {
      display: flex;
      margin-top: 30px;
      justify-content: center;
      align-items: center;
      padding: 12px 8px;
      border: none;
      width: 262px;
      height: 44px;

      background: var(--primary);
      border-radius: 8px;
      /* font btn */
      font-family: "roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      color: var(--white);
    }
    a {
      margin-top: 10px;
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 15px;
      color: #385774;
    }
  }

  section {
    display: flex;
    width: 262px;
    height: 41px;
    border: 1.5px solid var(--grey05);
    box-sizing: border-box;
    border-radius: 8px;
    padding: 12px;
    margin-top: 20px;

    input {
      width: 200px;

      background: transparent;
      border: none;
      &::placeholder {
        font-family: "roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        font-size: 14px;
        line-height: 17px;
        color: var(--grey10);
        flex: none;
      }
    }
    svg {
      width: 18px;
      height: 17px;
      color: var(--grey10);
      margin-right: 5px;
    }
  }
`;
