import { FlexBox } from "components/FlexBox";
import NotFound from "assets/images/NotFound.png";
import { Button } from "components/Button";
import { TextContainer } from "./styles";

export interface NotFoundContentProps {}
export const NotFoundContent: React.FC<NotFoundContentProps> = () => {
  return (
    <FlexBox full gap={4} centralized py={9}>
      <img src={NotFound} alt="piled shapes" />
      <TextContainer direction="column" gap={2}>
        <h2>Página não encontrada</h2>
        <FlexBox full alignItems="flex-end" justifyContent="space-between">
          <div>
            <p>A página que você buscou</p>
            <p>não foi encontrada!</p>
            <p>Por favor, tente mais tarde.</p>
          </div>
          <Button>Voltar à página inicial</Button>
        </FlexBox>
      </TextContainer>
    </FlexBox>
  );
};
