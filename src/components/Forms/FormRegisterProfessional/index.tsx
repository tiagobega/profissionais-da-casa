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
import { useApi, useUser } from "contexts/User";
import MaskedInput from "react-text-mask";
import { mask, parseCEP, parseCNPJ, parseCPF, parsePhone } from "utils/masks";
import { states } from "constants/states";
import { formationLevels } from "constants/formationLevels";
import { FileReaderQueue, QueueFile } from "utils/FileReaderQueue";
import { recreateApiAuthInterceptors } from "config/axios";
import { UserUtils } from "utils/user";

export type FormData = Zod.infer<typeof registerProfessionalSchema>;

type FileName = "background" | "profile" | "portfolio";
type FilePromise = Promise<{ name: FileName; url: string | false }>;
type CreateImageFileParams = {
  [key in FileName]?: {
    file: File;
    userName: string;
  };
};
interface FormRegisterProfessionalProps {
  showTerms: () => void;
}

export const FormRegisterProfessional: FC<FormRegisterProfessionalProps> = ({
  showTerms,
}) => {
  const [loading, setLoading] = useState(false);
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
      ...(() => {
        if (import.meta.env.MODE !== "development") return {};

        return {
          cep: "04144-020",
          cpf: "410.482.908-08",
          email: "tiago@fillet.com.br",
          birthdate: "04/05/1999",
          cnpj: "11.111.111/0001-01",
          companyName: "company name",
          creaCau: "123456789",
          name: "teste",
          phone: "(11) 96444-0491",
          formationLevel: "Superior Completo",
          formationYear: "2005",
          formationDetail: "Detallhe importante",
          institution: "instituiição",
          password: "P@ss475866",
          passwordConfirm: "P@ss475866",
          onlineAppointment: true,
          formation: "Arquiteto",
          otherSocials: "https://outra.com.br",
          facebook: "https://facebook.com.br",
          linkedin: "https://linkedIn.com.br",
          instagram: "https://instagram.com.br",
          pinterest: "https://pinterest.com.br",
          states: ["SP"],
          terms: true,
          registerTech: "123456789",
        };
      })(),
    },
  });

  const { color } = useTheme();

  const navigate = useNavigate();

  const {
    integrated,
    file: { sendFile },
    user: { setMe, setLogged, registerToken, updateMe },
    professional: { setMyProfessional, update },
    email: { sendEmail },
  } = useApi();

  const createImageFile = async (params: CreateImageFileParams = {}) => {
    const fileReaderQueue = new FileReaderQueue();

    Object.keys(params).forEach((key) => {
      const param = params[key as FileName];
      if (!param) return;
      fileReaderQueue.addFileToQueue(param.file, key as FileName);
    });

    const promises: FilePromise[] = [];

    await new Promise<{
      [key in FileName]?: QueueFile;
    }>((resolve) => {
      fileReaderQueue.readQueue();

      fileReaderQueue.onLoadEnd = (files) => {
        Object.keys(files).forEach((filename) => {
          const { fileBase64, file } = files[filename];

          if (!fileBase64) return;

          const filePromise: FilePromise = new Promise(async (fileResolve) => {
            const fileResponse = await sendFile({
              filename: `${filename}`,
              content: fileBase64,
              contentType: file.type,
            });

            fileResolve({ url: fileResponse, name: filename as FileName });
          });

          promises.push(filePromise);
        });

        resolve(files);
      };
    });

    const promiseResult = await Promise.all(promises);

    const fileLinks: { [key in FileName]?: string } = {};

    promiseResult.forEach((result) => {
      if (!result.url) return;
      fileLinks[result.name] = result.url;
    });

    return fileLinks;
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    const cpf = parseCPF(data.cpf);
    const phone = parsePhone(data.phone);
    const zipCode = parseCEP(data.cep);
    const cnpj = parseCNPJ(data.cnpj);

    /**
     * CREATE FILES
     */

    const images: CreateImageFileParams = {};

    if (data.profilePicture[0]) {
      data.profilePicture[0].text().then();
      images.profile = {
        file: data.profilePicture[0],
        userName: data.name,
      };
    }

    if (data.backgroundPicture[0]) {
      images.background = {
        file: data.backgroundPicture[0],
        userName: data.name,
      };
    }

    if (data.portfolio[0]) {
      images.portfolio = {
        file: data.portfolio[0],
        userName: data.name,
      };
    }

    const filteredSocialMedias = [
      {
        name: "Instagram",
        link: data.instagram,
      },
      {
        name: "Facebook",
        link: data.facebook,
      },
      {
        name: "Pinterest",
        link: data.pinterest,
      },
      {
        name: "LinkedIn",
        link: data.linkedin,
      },
      {
        name: "Outra",
        link: data.otherSocials,
      },
    ].filter((social) => social.link);

    const integratedRegister = await integrated.signUp({
      userParams: {
        cpf,
        phone,
        zipCode,
        active: false,
        email: data.email,
        role: "professional",
        profileType: "user",
        profilePicture: "",
        password: data.password,
        name: data.name,
        verified: false,
      },
      locationParams: {
        states: data.states.join(","),
      },
      proProfileParams: {
        cnpj,
        phone,
        active: false,
        description: "Escreva sobre o seu perfil",
        caucrea: data.creaCau,
        name: data.name,
        companyName: data.companyName,
        formationDetails: data.formationDetail,
        formationInstitute: data.institution,
        professionalRegister: data.registerTech,
        yearConclusion: data.formationYear,
        birthDate: data.birthdate,
        subscriptionPlanId: "31d76d9e-f3d8-42b7-b398-74bd67ef3674",
        formation: data.formation,
        onlineAppointment: data.onlineAppointment,
        professionalLevel: data.formationLevel,
        tags: "",

        profilePicture: "",
        backgroundPicture: "",
        portfolioFile: "",
      },
      socialMediaParams: {
        names: filteredSocialMedias.map(({ name }) => name).join(","),
        links: filteredSocialMedias.map(({ link }) => link).join(","),
      },
    });

    if (!integratedRegister) {
      setLoading(false);
      return;
    }

    const imagesResponse = await createImageFile(images);

    await updateMe({
      profilePicture: imagesResponse.profile,
    });

    await update({
      userId: integratedRegister.proProfile.userId,
      currentUserId: integratedRegister.proProfile.userId,

      profilePicture: imagesResponse.profile,
      backgroundPicture: imagesResponse.background,
      portfolioFile: imagesResponse.portfolio,
    });

    registerToken(integratedRegister.session.accessToken);
    setMe(integratedRegister.user);
    setMyProfessional(integratedRegister.proProfile);

    setLogged(true);

    sendEmail({
      template: "NEW_PROFESSIONAL",
      email: "tiago@fillet.com.br",
      subject: "Novo Profissional Registrado",
      text: "texto",
      params: {
        PROFILE_LINK: `https://profissionais.cadacasa.com.br/profile/${integratedRegister.user.id}`,
        USER_NAME: `${integratedRegister.user.name}`,
      },
    });

    sendEmail({
      template: "WELCOME_PROFESSIONAL",
      text: "texto",
      email: integratedRegister.user.email,
      subject: "Seja bem vindo a equipe dos Profissionais da Casa",
    });

    navigate("/account/confirm");
  };

  const terms = watch("terms");

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
                name={"birthdate"}
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
                        error={errors.birthdate}
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
                  { name: "Pintor", value: "Pintor" },
                ]}
                placeholder="Formação"
                aria-label="Formação"
                label={"Selecione a sua profissão"}
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
              <Input.Select
                options={formationLevels}
                placeholder="Nivel de Formação"
                aria-label="Nivel de Formação"
                label={"Nivel de Formação"}
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
                placeholder="Outra formação"
                aria-label="Outra formação"
                label="Outra formação"
                error={errors.formationDetail}
                {...register("formationDetail")}
              />
            </FlexBox>
          </FlexBox>
        </fieldset>

        <fieldset className="fieldsetDivider">
          <legend>4) Área de Atuação</legend>
          <FlexBox gap={2} direction="column" full>
            {errors.states && (
              <p className="fieldError">{errors.states.message}</p>
            )}

            <Input.Checkbox
              subject={"onlineAppointment"}
              label={"Presto serviço a distancia."}
              {...register("onlineAppointment")}
            />

            <h4>
              Selecione abaixo os estados que você presta serviço
              presencialmente:
            </h4>
            <FlexBox gap={2} full wrap={"wrap"}>
              {states.map((state) => (
                <Input.Checkbox
                  key={state.id}
                  subject={state.id}
                  label={state.name}
                  value={state.id}
                  {...register(`states`)}
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

            <h4>Coloque abaixo o link de suas redes sociais (opcional)</h4>
            <FlexBox gap={1} full>
              <FlexBox direction="column" gap={1} full>
                <Input.Text
                  type="text"
                  placeholder="LinkedIn"
                  aria-label="LinkedIn"
                  {...register("linkedin")}
                  error={errors.linkedin}
                />
                <Input.Text
                  placeholder="Facebook"
                  aria-label="Facebook"
                  {...register("facebook")}
                  error={errors.facebook}
                />
                <Input.Text
                  type="text"
                  placeholder="Instagram"
                  aria-label="Instagram"
                  {...register("instagram")}
                  error={errors.instagram}
                />
              </FlexBox>
              <FlexBox direction="column" gap={1} full>
                <Input.Text
                  type="text"
                  placeholder="Pinterest"
                  aria-label="Pinterest"
                  {...register("pinterest")}
                  error={errors.pinterest}
                />
                <Input.Text
                  type="text"
                  placeholder="Outra rede profissional"
                  aria-label="Outra rede profissional"
                  {...register("otherSocials")}
                  error={errors.otherSocials}
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
              disabled={!terms || loading}
            >
              {!loading ? "Concluir" : "Enviando"}
            </Button>
          </FlexBox>
        </fieldset>
      </FlexBox>
    </Form>
  );
};
