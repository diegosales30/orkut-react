import { ContentBox, ContentButton } from "./style";
import { FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./style.css";
const ContainerRegister = () => {
  return (
    <>
      <ContentBox>
        <h1>_________ ou _________</h1>
        <ContentButton>
          <button className="btn-google">
            <FaGoogle />
          </button>
          <button className="btn-facebook">
            <FaFacebookF />
          </button>
          <button className="btn-in">
            <FaLinkedinIn />
          </button>
        </ContentButton>
      </ContentBox>
    </>
  );
};
export default ContainerRegister;
