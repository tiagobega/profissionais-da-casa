import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { useUser } from "contexts/User";
import { useNavigate } from "react-router-dom";

export const PermissionInactivePage = () => {
  const { me } = useUser();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!me) return;

    switch (me.roleRel.name) {
      case "user":
        navigate(`/user/${me.id}`);
        break;
      case "professional":
        navigate(`/professional/${me.id}`);
        break;
    }
  };

  return (
    <FlexBox mt={25} mb={25} mx={10} alignItems="center" direction="column">
      <h2>
        Infelizmente a sua conta ainda está inativa, e seu acesso limitado ao
        seu perfil
      </h2>
      <FlexBox mt={2.5}>
        <h3>Solicite uma avaliação do seu perfil para reativa-lo</h3>
      </FlexBox>
      <FlexBox mt={2.5}>
        <Button onClick={handleClick}>Acessar o meu perfil</Button>
      </FlexBox>
    </FlexBox>
  );
};
