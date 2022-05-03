import InputLogin from "../../Components/InputLogin";
import { AnimationContainer } from "../LandingPage/style";
import { ContainerLoginPage, LogoLogin } from "./style";
import logo from "../../assets/image/orkut.png";
import ContainerRegister from "../../Components/ContainerRegister";
import { FaRegCopyright } from "react-icons/fa";

const LoginPage = () => {
  return (
    <ContainerLoginPage>
      <AnimationContainer>
        <LogoLogin>
          <img src={logo} alt="logo" />
        </LogoLogin>
        <h2>Acesse o Orkut com sua conta</h2>
        <InputLogin />

        <ContainerRegister />
      </AnimationContainer>
      <footer>
        <span>
          <FaRegCopyright />
          2022 Orkut
        </span>
      </footer>
    </ContainerLoginPage>
  );
};

export default LoginPage;
