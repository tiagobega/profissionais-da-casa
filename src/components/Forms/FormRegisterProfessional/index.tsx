import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { registerProfessionalSchema } from "./validation";
import { Form, FullWidthFormContainer } from "./style";
import { FC, useState } from "react";
import { areaType } from "../FormEditProfile";
import { useNavigate } from "react-router-dom";

export type FormData = Zod.infer<typeof registerProfessionalSchema>;

interface FormRegisterProfessionalProps {
  toConfirm: () => void;
  showTerms: () => void;
}

const cityOptions = [
  {
    name: "São Paulo",
    value: "São Paulo",
  },
  {
    name: "Rio de Janeiro",
    value: "Rio de Janeiro",
  },
  {
    name: "Belo Horizonte",
    value: "Belo Horizonte",
  },
  {
    name: "Curitiba",
    value: "Curitiba",
  },
];

export const FormRegisterProfessional: FC<FormRegisterProfessionalProps> = ({
  showTerms,
}) => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerProfessionalSchema),
    mode: "onChange",
  });
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { color } = useTheme();

  const onSubmit = (data: FormData) => {
    window.alert(JSON.stringify(data));
    navigate("/register/professional/confirm");
  };
  const terms = watch("terms");

  return (
    <Form
      onSubmit={handleSubmit((e) => {
        console.log(e);
        return onSubmit(e);
      })}
    >
      <FlexBox direction="column" gap={1} full my={1}>
        <fieldset className="fieldsetDivider">
          <legend>Preencha para se tornar um Profissional da Casa</legend>
          <FlexBox gap={2.5} justifyContent="space-between">
            <FlexBox direction="column" gap={1}>
              <Input.Text
                type="text"
                placeholder="Nome"
                aria-label="Nome"
                error={errors.name}
                {...register("name")}
              />
              <Input.Text
                type="email"
                placeholder="Email"
                aria-label="Email"
                error={errors.email}
                {...register("email")}
              />
              <Input.Text
                type="text"
                placeholder="CPF"
                aria-label="CPF"
                error={errors.cpf}
                {...register("cpf")}
              />
              <Input.Text
                placeholder="Data de Nascimento"
                aria-label="Data de Nascimento"
                error={errors.birthDate}
                {...register("birthDate")}
              />
              <Input.Text
                type="text"
                placeholder="Telefone"
                aria-label="telefone"
                error={errors.phone}
                {...register("phone")}
              />
              <Input.Text
                type="text"
                placeholder="CEP"
                aria-label="CEP"
                error={errors.cep}
                {...register("cep")}
              />
            </FlexBox>
            <FlexBox direction="column" gap={1}>
              <Input.Text
                type="password"
                placeholder="Senha"
                aria-label="senha"
                error={errors.password}
                {...register("password")}
              />
              <Input.Text
                type="password"
                placeholder="Confirmar senha"
                aria-label="confirmar senha"
                error={errors.passwordConfirm}
                {...register("passwordConfirm")}
              />
              <p>Inofmações Pessoa Jurídica</p>
              <Input.Text
                type="text"
                placeholder="Registro do Responsável Técnico"
                aria-label="Registro do Responsável Técnico"
                error={errors.registerTech}
                {...register("registerTech")}
              />
              <Input.Text
                type="text"
                placeholder="Nome Fantasia"
                aria-label="Nome Fantasia"
                error={errors.companyName}
                {...register("companyName")}
              />
              <Input.Text
                type="text"
                placeholder="CNPJ"
                aria-label="CNPJ"
                error={errors.cnpj}
                {...register("cnpj")}
              />
            </FlexBox>
          </FlexBox>
        </fieldset>
        <fieldset className="fieldsetDivider">
          <legend>Registro profissional / Acadêmico</legend>
          <FlexBox gap={2.5} justifyContent="space-between">
            <FlexBox direction="column" gap={1}>
              <Input.Radio
                options={[
                  { label: "Arquiteto(a)", value: "architect" },
                  { label: "Outras", value: "others" },
                ]}
                groupLegend="Assinale sua formação"
                groupName="Formação"
                aria-label="formação"
                error={errors.formation}
                {...register("formation")}
              />
              <Input.Text
                type="text"
                placeholder="Instituto de Formação"
                aria-label="Instituto de Formação"
                error={errors.institution}
                {...register("institution")}
              />
              <Input.Text
                type="text"
                placeholder="CAU/CREA (se tiver)"
                aria-label="CAU/CREA"
                error={errors.creaCau}
                {...register("creaCau")}
              />
              <Input.Text
                placeholder="Nivel de Formação"
                aria-label="Nivel de Formação"
                error={errors.formationLevel}
                {...register("formationLevel")}
              />
              <Input.Text
                type="text"
                placeholder="Ano de Conclusão"
                aria-label="Ano de Conclusão"
                error={errors.formationYear}
                {...register("formationYear")}
              />
              <Input.Text
                type="text"
                placeholder="Detalhamento de formação"
                aria-label="Detalhamento de formação"
                error={errors.formationDetail}
                {...register("formationDetail")}
              />
            </FlexBox>
            <FlexBox direction="column" gap={1}>
              <Input.File
                accept="image/*"
                label="Foto de Perfil"
                aria-label="Foto de Perfil"
                error={errors.profilePicture}
                {...register("profilePicture")}
              />
            </FlexBox>
          </FlexBox>
        </fieldset>
        <fieldset className="fieldsetDivider">
          <legend>Área de Atuação</legend>

          <FullWidthFormContainer full gap={2.5}>
            <FlexBox direction="column" gap={1}>
              <p>Adicione uma área de atuação</p>
              <Input.Select
                options={[
                  { name: "São Paulo", value: "SP" },
                  { name: "Paraná", value: "PR" },
                ]}
                placeholder="Estado"
                aria-label="Estado"
                error={errors.institution}
                {...register("institution")}
              />
              <Input.Select
                options={cityOptions}
                placeholder="Cidade"
                aria-label="Cidade"
                error={errors.institution}
                {...register("institution")}
              />
              <Input.Text
                type="text"
                placeholder="Alguma região específica?"
                aria-label="Região específica"
                error={errors.creaCau}
                {...register("creaCau")}
              />
              <Button
                full
                type="button"
                onClick={() => console.log("add area")}
              >
                Adicionar área de atuação
              </Button>
            </FlexBox>
            <FlexBox>
              <p>Áreas de atuação:</p>
            </FlexBox>
          </FullWidthFormContainer>
        </fieldset>
        <fieldset className="fieldsetDivider">
          <legend>Insira suas redes sociais profissionais</legend>
          <FullWidthFormContainer gap={2.5} justifyContent="space-between">
            <FlexBox direction="column" gap={1}>
              <Input.Text
                type="text"
                placeholder="LinkedIn"
                aria-label="LinkedIn"
                error={errors.linkedin}
                {...register("linkedin")}
              />
              <Input.Text
                placeholder="Facebook"
                aria-label="Facebook"
                error={errors.facebook}
                {...register("facebook")}
              />
              <Input.Text
                type="text"
                placeholder="Instagram"
                aria-label="Instagram"
                error={errors.instagram}
                {...register("instagram")}
              />
              <Input.Text
                type="text"
                placeholder="Pinterest"
                aria-label="Pinterest"
                error={errors.pinterest}
                {...register("pinterest")}
              />
              <Input.Text
                type="text"
                placeholder="Outra rede profissional"
                aria-label="Outra rede profissional"
                error={errors.otherSocials}
                {...register("otherSocials")}
              />
            </FlexBox>
            <FlexBox>
              <Input.File
                accept="image/*,.pdf"
                label="Anexar portfólio (imagem ou PDF)"
                aria-label="portfolio"
                error={errors.portfolio}
                {...register("portfolio")}
              />
            </FlexBox>
          </FullWidthFormContainer>
          <FlexBox>
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
          </FlexBox>
          <Button
            type="submit"
            color="white"
            background={color.secondary.blue}
            disabled={!terms}
          >
            Concluir
          </Button>
        </fieldset>
      </FlexBox>
    </Form>
  );
};
