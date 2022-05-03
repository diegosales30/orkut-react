import styled from "styled-components";
import { keyframes } from "styled-components";
import logo from "../../assets/image/logoOrkut.png";

export const ContainerLandingPage = styled.div`
  width: 100vw;
  max-width: 420px;
  min-width: 320px;
  height: 100vh;
  min-height: 700px;
  background: url(${logo}) no-repeat center, var(--primary);
  background-size: 320px;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
`;

const animationForm = keyframes`
from {
  opacity: 0;
  transform: translateX(3px);
}
to {
  opacity: 1;
  transform: translateX(0px);
}

`;
export const AnimationContainer = styled.div`
  animation: ${animationForm} 1.2s;
`;
