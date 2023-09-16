import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { Controller, useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { registerProfessionalSchema } from "./validation";
import { Form } from "./style";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "contexts/User";
import MaskedInput from "react-text-mask";
import { mask, parseCEP, parseCNPJ, parseCPF, parsePhone } from "utils/masks";
import { states } from "constants/states";

export type FormData = Zod.infer<typeof registerProfessionalSchema>;

interface FormRegisterProfessionalProps {
  showTerms: () => void;
}

export const FormRegisterProfessional: FC<FormRegisterProfessionalProps> = ({
  showTerms,
}) => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(registerProfessionalSchema),
    mode: "onChange",
    defaultValues: {
      states: [],
    },
  });
  const { color } = useTheme();
  const { register: userRegister, registerProfessional, getMe } = useUser();

  const onSubmit = async (data: FormData) => {
    const cpf = parseCPF(data.cpf);
    const phone = parsePhone(data.phone);
    const zipCode = parseCEP(data.cep);
    const cnpj = parseCNPJ(data.cnpj);

    console.log(data);

    // const userResponse = await userRegister({
    //   cpf,
    //   name: data.name,
    //   password: data.password,
    //   email: data.email,
    //   phone: data.phone,
    //   zipCode: data.cep,
    //   role: "user",
    //   profilePicture: "",
    //   profileType: "user",
    // });

    // if (!userResponse) return;

    // const meResponse = await getMe();

    // if (!meResponse) return;

    // registerProfessional({
    //   caucrea: "",
    //   cnpj: data.cnpj,
    //   name: data.name,
    //   phone: data.phone,
    //   companyName: data.companyName,
    //   formationDetails: data.institution,
    //   formationInstitute: data.creaCau,
    //   professionalRegister: data.registerTech,
    //   yearConclusion: data.formationYear,
    //   userId: meResponse.id,
    //   zipCode: data.cep,
    //   subscriptionPlanId: "067e017d-7603-4c56-b9fb-50c25f5fb49d",

    //   formation: true,
    //   tags: "",
    //   profilePicture: "",
    //   backgroundPicture: "",
    // });
  };

  const terms = watch("terms");

  console.log(errors);

  return (
    <Form
      onSubmit={handleSubmit((e) => {
        return onSubmit(e);
      })}
    >
      <FlexBox direction="column" gap={1} full my={1}>
        <fieldset className="fieldsetDivider">
          <legend>1) Informações Pessoa Física </legend>

          <FlexBox gap={2} mb={2} full direction="row">
            <FlexBox
              gap={2}
              full
              justifyContent="space-between"
              direction="column"
            >
              <Input.Text
                type="text"
                placeholder="Nome"
                aria-label="Nome"
                label={"Nome Completo"}
                error={errors.name}
                {...register("name")}
              />
              <Input.Text
                type="email"
                placeholder="Email"
                aria-label="Email"
                label={"E-mail"}
                error={errors.email}
                {...register("email")}
              />

              {/* CPF */}
              <Controller
                control={control}
                name={"cpf"}
                render={({ field }) => (
                  <MaskedInput
                    {...field}
                    mask={mask.cpf}
                    render={(ref, props) => (
                      <Input.Text
                        type="text"
                        placeholder="CPF"
                        aria-label="cpf"
                        label={"CPF"}
                        error={errors.cpf}
                        ref={ref as any}
                        {...props}
                      />
                    )}
                  />
                )}
              />

              {/* BIRTH DATE */}
              <Controller
                control={control}
                name={"cep"}
                render={({ field }) => (
                  <MaskedInput
                    {...field}
                    mask={mask.zipCode}
                    render={(ref, props) => (
                      <Input.Text
                        type="text"
                        label={"CEP"}
                        placeholder="CEP"
                        aria-label="CEP"
                        error={errors.cep}
                        ref={ref as any}
                        {...props}
                      />
                    )}
                  />
                )}
              />
            </FlexBox>

            <FlexBox
              gap={2}
              full
              justifyContent="space-between"
              direction="column"
            >
              {/* PHONE */}
              <Controller
                control={control}
                name={"phone"}
                render={(blabla) => {
                  return (
                    <MaskedInput
                      {...blabla.field}
                      mask={mask.phone9}
                      render={(ref, props) => (
                        <Input.Text
                          type="text"
                          placeholder="Telefone"
                          aria-label="telefone"
                          label={"Telefone"}
                          ref={ref as any}
                          error={errors.phone}
                          {...props}
                        />
                      )}
                    />
                  );
                }}
              />

              {/* CEP */}
              <Controller
                control={control}
                name={"birthDate"}
                render={({ field }) => (
                  <MaskedInput
                    {...field}
                    mask={mask.date}
                    render={(ref, props) => (
                      <Input.Text
                        type="text"
                        label={"Data de Nascimento"}
                        placeholder="Data de Nascimento"
                        aria-label="Data de Nascimento"
                        error={errors.birthDate}
                        ref={ref as any}
                        {...props}
                      />
                    )}
                  />
                )}
              />

              <Input.Text
                type="password"
                placeholder="Senha"
                aria-label="senha"
                label="senha"
                error={errors.password}
                {...register("password")}
              />
              <Input.Text
                type="password"
                placeholder="Confirmar senha"
                aria-label="confirmar senha"
                label="Confirmar senha"
                error={errors.passwordConfirm}
                {...register("passwordConfirm")}
              />
            </FlexBox>
          </FlexBox>

          <FlexBox mt={2} direction={"column"} gap={2}>
            <Input.File
              accept="image/*"
              label="Foto de Perfil"
              aria-label="Foto de Perfil"
              error={errors.profilePicture}
              {...register("profilePicture", { required: true })}
            />

            <Input.File
              accept="image/*"
              label="Foto de Fundo do Perfil"
              aria-label="Foto de Perfil"
              error={errors.backgroundPicture}
              {...register("backgroundPicture")}
            />
          </FlexBox>
        </fieldset>

        <fieldset className="fieldsetDivider">
          <legend>2) Informações Pessoa Jurídica</legend>
          <FlexBox direction="column" gap={1} full>
            <Input.Text
              type="text"
              placeholder="Nome Fantasia"
              aria-label="Nome Fantasia"
              label="Nome Fantasia"
              error={errors.companyName}
              {...register("companyName")}
            />
            {/* CPNJ */}
            <Controller
              control={control}
              name={"cnpj"}
              render={({ field }) => (
                <MaskedInput
                  {...field}
                  mask={mask.cnpj}
                  render={(ref, props) => (
                    <Input.Text
                      type="text"
                      placeholder="CNPJ"
                      aria-label="CNPJ"
                      label={"CNPJ"}
                      error={errors.cnpj}
                      ref={ref as any}
                      {...props}
                    />
                  )}
                />
              )}
            />
            <Input.Text
              type="text"
              placeholder="Registro do Responsável Técnico"
              label="Registro do Responsável Técnico"
              aria-label="Registro do Responsável Técnico"
              error={errors.registerTech}
              {...register("registerTech")}
            />
            <p className="disclaimer">
              O Registro do Responsável Tecnico deve ser o CREA/CAU do
              profissional responsável pela empresa.{" "}
            </p>
          </FlexBox>
        </fieldset>

        <fieldset className="fieldsetDivider">
          <legend>3) Registro profissional / Acadêmico</legend>
          <FlexBox gap={2} full direction="row">
            <FlexBox direction="column" gap={2} full>
              <Input.Select
                options={[
                  { name: "Arquiteto", value: "Arquiteto" },
                  { name: "Engenheiro", value: "Engenheiro" },
                  {
                    name: "Designer de interiores",
                    value: "Designer de interiores",
                  },
                  { name: "Execução de obras", value: "Execução de obras" },
                  { name: "Instalações", value: "Instalações" },
                ]}
                placeholder="Formação"
                aria-label="Formação"
                label={"Selecione a sua formação"}
                error={errors.formation}
                {...register("formation")}
              />
              <Input.Text
                type="text"
                placeholder="Instituto de Formação"
                label="Instituto de Formação"
                aria-label="Instituto de Formação"
                error={errors.institution}
                {...register("institution")}
              />
              <Input.Text
                type="text"
                label={"CAU/CREA"}
                placeholder="CAU/CREA (se tiver)"
                aria-label="CAU/CREA"
                error={errors.creaCau}
                {...register("creaCau")}
              />
            </FlexBox>
            <FlexBox direction="column" gap={2} full>
              <Input.Text
                placeholder="Nivel de Formação"
                aria-label="Nivel de Formação"
                label="Nivel de Formação"
                error={errors.formationLevel}
                {...register("formationLevel")}
              />
              <Input.Text
                type="text"
                placeholder="Ano de Conclusão"
                aria-label="Ano de Conclusão"
                label="Ano de Conclusão"
                error={errors.formationYear}
                {...register("formationYear")}
              />
              <Input.Text
                type="text"
                placeholder="Detalhamento de formação"
                aria-label="Detalhamento de formação"
                label="Detalhamento de formação"
                error={errors.formationDetail}
                {...register("formationDetail")}
              />
            </FlexBox>
          </FlexBox>
        </fieldset>

        <fieldset className="fieldsetDivider">
          <legend>4) Área de Atuação</legend>
          <FlexBox gap={2} direction="column" full>
            <Input.Checkbox
              label={"Presto serviço a distancia."}
              {...register("onlineApointment")}
            />

            <h4>
              Selecione abaixo os estados que você presta serviço
              presencialmente:
            </h4>
            {errors.states && <p>{errors.states.message}</p>}
            <FlexBox gap={2} full wrap={"wrap"}>
              {states.map((state) => (
                <Input.Checkbox
                  key={state.id}
                  subject={state.id}
                  label={state.name}
                  value={state.id}
                  {...register(`states`, { required: false })}
                />
              ))}
            </FlexBox>
          </FlexBox>
        </fieldset>

        <fieldset className="fieldsetDivider">
          <legend>5) Insira suas redes sociais profissionais</legend>
          <FlexBox gap={2.5} direction="column">
            <FlexBox full>
              <Input.File
                accept="image/*,.pdf"
                label="Anexar portfólio (imagem ou PDF)"
                aria-label="portfolio"
                error={errors.portfolio}
                {...register("portfolio")}
              />
            </FlexBox>

            <h4>Coloque abaixo o link de suas redes sociais</h4>
            <FlexBox gap={1} full>
              <FlexBox direction="column" gap={1} full>
                <Input.Text
                  type="text"
                  placeholder="LinkedIn"
                  aria-label="LinkedIn"
                  {...register("linkedin")}
                />
                <Input.Text
                  placeholder="Facebook"
                  aria-label="Facebook"
                  {...register("facebook")}
                />
                <Input.Text
                  type="text"
                  placeholder="Instagram"
                  aria-label="Instagram"
                  {...register("instagram")}
                />
              </FlexBox>
              <FlexBox direction="column" gap={1} full>
                <Input.Text
                  type="text"
                  placeholder="Pinterest"
                  aria-label="Pinterest"
                  {...register("pinterest")}
                />
                <Input.Text
                  type="text"
                  placeholder="Outra rede profissional"
                  aria-label="Outra rede profissional"
                  {...register("otherSocials")}
                />
              </FlexBox>
            </FlexBox>

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
          </FlexBox>
        </fieldset>
      </FlexBox>
    </Form>
  );
};
