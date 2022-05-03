import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerLandingPage } from "./style";

const LandingPage = () => {
  const navigation = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      return navigation("/login");
    }, 2000);
  }, []);

  return <ContainerLandingPage />;
};

export default LandingPage;
