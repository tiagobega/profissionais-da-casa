import { FlexBox } from "components/FlexBox";
import NotFound from "assets/images/NotFound.png";
import { Button } from "components/Button";
import { Container, TextContainer, ContentContainer } from "./styles";

export interface NotFoundContentProps {}
export const NotFoundContent: React.FC<NotFoundContentProps> = () => {
  return (
    <Container full gap={4} centralized py={9}>
      <img src={NotFound} alt="piled shapes" loading="lazy" />
      <TextContainer direction="column" gap={2}>
        <h2>Página não encontrada</h2>
        <ContentContainer full justifyContent="space-between">
          <div>
            <p>A página que você buscou</p>
            <p>não foi encontrada!</p>
            <p>Por favor, tente mais tarde.</p>
          </div>
          <Button>Voltar à página inicial</Button>
        </ContentContainer>
      </TextContainer>
    </Container>
  );
};
