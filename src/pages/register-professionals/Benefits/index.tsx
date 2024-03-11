import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "@phosphor-icons/react";
import { FlexBox } from "components/FlexBox";
import { useForm } from "react-hook-form";
import { benefitTermsSchema } from "./validation";
import Input from "components/Input";
import { Button } from "components/Button";
import { Benefit, Card } from "./styles";
import { useTheme } from "styled-components";

export interface BenefitsProps {
  showTerms: () => void;
  showForm: () => void;
}
export type FormData = Zod.infer<typeof benefitTermsSchema>;

export const Benefits: React.FC<BenefitsProps> = ({ showForm, showTerms }) => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(benefitTermsSchema),
    mode: "onChange",
  });

  const { color } = useTheme();
  const termsValue = watch("terms");

  return (
    <FlexBox direction="column" gap={2} full>
      <FlexBox direction="column" centralized full gap={2} mt={1}>
        <h2>Benefícios de ser um profissional da casa</h2>
        <Card direction="column" gap={0}>
          <header>
            <h3>Assinatura Starter | R$149,99/mês</h3>
            <h4>(30 primeiros dias grátis)</h4>
          </header>
          <Benefit gap={2}>
            <div className="icon-container">
              <Check
                size={24}
                weight="bold"
                color={color.secondary.lightTeal}
              />
            </div>{" "}
            <p>Conectar clientes e profissionais</p>
          </Benefit>
          <Benefit gap={2}>
            <div className="icon-container">
              <Check
                size={24}
                weight="bold"
                color={color.secondary.lightTeal}
              />
            </div>{" "}
            <p>Página profissional</p>
          </Benefit>
          <Benefit gap={2}>
            <div className="icon-container">
              <Check
                size={24}
                weight="bold"
                color={color.secondary.lightTeal}
              />
            </div>{" "}
            <p>Selos de Qualidade Cada Casa</p>
          </Benefit>
          <Benefit gap={2}>
            <div className="icon-container">
              <Check
                size={24}
                weight="bold"
                color={color.secondary.lightTeal}
              />
            </div>{" "}
            <div>
              <p className="title">Divulgar o profissional</p>
              <p>Divulgação vinculada ao tráfego da plataforma</p>
            </div>
          </Benefit>
          {/* <Benefit gap={2}>
            <div className="icon-container">
              <Check
                size={24}
                weight="bold"
                color={color.secondary.lightTeal}
              />
            </div>{" "}
            <p>Ferramentas Digitais da Plataforma</p>
          </Benefit>
          <Benefit gap={2}>
            <div className="icon-container">
              <Check
                size={24}
                weight="bold"
                color={color.secondary.lightTeal}
              />
            </div>{" "}
            <div>
              <p className="title">Trilha do Conhecimento</p>
              <p>Conteúdo Cada Casa (blog, artigos e pesquisas)</p>
              <p>
                Lives e Webinários (tempo real) Acesso aos cursos abertos em
                tempo real
              </p>
            </div>
          </Benefit> */}
        </Card>
      </FlexBox>

      <p>
        Enfatizamos que o aceite das condições dos termos de uso não excluem a
        etapa de análise para aprovação do perfil do profissional para a
        comunidade dos Profissionais da Casa.
      </p>

      <FlexBox
        direction="column"
        justifyContent="space-between"
        gap={2}
        full
        alignItems="flex-start"
        media={{
          lg: {
            direction: "row",
            alignItems: "center",
          },
        }}
      >
        <Input.Checkbox
          {...register("terms")}
          error={errors.terms}
          id="terms"
          label={
            <FlexBox gap={0.25}>
              Li e aceito os{" "}
              <Button variant="text" onClick={() => showTerms()}>
                Termos e Condições
              </Button>
            </FlexBox>
          }
        />
        <Button onClick={() => showForm()} disabled={!termsValue}>
          Iniciar cadastro
        </Button>
      </FlexBox>
    </FlexBox>
  );
};
