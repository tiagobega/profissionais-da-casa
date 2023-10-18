import logo from "assets/images/logoYellowBigger.png";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { FormResendEmail } from "components/Forms/FormResendEmail";
import { useUser } from "contexts/User";
import { useNavigate } from "react-router-dom";

export interface LoginPageProps {}

export const RegisterUserConfirm: React.FC<LoginPageProps> = () => {
  const { getMe } = useUser();
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    await getMe();
    navigate("/catalog");
  };

  return (
    <FlexBox
      mt={16}
      mb={16}
      alignItems="center"
      gap={10}
      justifyContent="center"
    >
      <div className="logo">
        <img
          src={logo}
          alt="coração feito de formas geométricas - logo da cada casa"
          loading="lazy"
        />
        <FlexBox gap={1} mt={1} direction="column">
          <h2>Confirmação de registro</h2>
          <div>
            <p className="title">Enviamos um email para você!</p>
            <p>
              Cheque sua caixa de entrada (e o seu lixo eletrônico)
              <br />e clique no link de confirmação do e-mail.
            </p>
          </div>
        </FlexBox>
        <FlexBox gap={1} mt={2} direction="column">
          <h2>Já confirmou seu e-mail?</h2>
          <p>
            Caso já tenha confirmado seu e-mail e<br />
            ainda está aqui, clique no botão abaixo.
          </p>
          <Button onClick={handleButtonClick}>Ir para o catalogo</Button>
        </FlexBox>
      </div>

      <FormResendEmail />
    </FlexBox>
  );
};
