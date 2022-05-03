import { ContainerForm } from "./style";
import { FiUser, FiLock } from "react-icons/fi";

const InputLogin = () => {
  return (
    <ContainerForm>
      <form>
        <section>
          <FiUser />
          <input type="text" placeholder="Email" />
        </section>
        <section>
          <FiLock />
          <input type="password" placeholder="Senha" />
        </section>
        <button type="submit">Entrar</button>
        <a href="">Ainda não é membro?</a>
      </form>
    </ContainerForm>
  );
};
export default InputLogin;
