import { CaretLeft, Download, DownloadSimple } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { useNavigate, useParams } from "react-router-dom";
import { MarginContainer } from "styles/commonComponents";
import { Photo } from "./styles";
import { useTheme } from "styled-components";
import { useEffect, useState } from "react";
import { Me, Professional } from "services/User/types";
import { useApi } from "contexts/User";
import { states } from "constants/states";
import { LeadList } from "pages/userProfile/components/LeadList";
import { Modal } from "components/Modal";
import { socialMediaIcon } from "utils/socialMediaLogo";

export interface ProfessionalDetailsProps {}

export const AdmProfessionalDetails: React.FC<
  ProfessionalDetailsProps
> = () => {
  const [currentProfessional, setCurrentProfessional] =
    useState<Professional>();

  const [currentUser, setCurrentUser] = useState<Me>();
  const [leads, setList] = useState(false);

  const {
    professional: { update, getSingle },
    email: { sendEmail },
    user: { getSingleUser, updateUser },
  } = useApi();

  const { id } = useParams();

  const navigate = useNavigate();
  const { color } = useTheme();

  async function getInfo(userId: string) {
    const professionalResponse = await getSingle({
      userId,
    });

    if (!professionalResponse) return;

    setCurrentProfessional(professionalResponse);

    const userResponse = await getSingleUser({ id: userId });

    if (!userResponse) return;

    setCurrentUser(userResponse);
  }

  async function handleProfessionalAccept() {
    if (!currentUser) return;

    await update({
      currentUserId: currentUser.id,
      active: true,
    });

    await updateUser({
      id: currentUser.id,
      active: true,
      verified: currentUser.verified,
    });

    sendEmail(
      {
        subject: "Verificação profissional: Perfil aprovado",
        email: currentUser.email,
        template: "ACCEPT_PROFESSIONAL",
        text: "text",
        params: {
          USER_NAME: currentUser.name,
          PROFILE_LINK: `https://profissionais.cadacasa.com.br/professional/${currentUser.id}`,
        },
      },
      true
    );

    getInfo(currentUser.id);
  }

  async function handleProfessionalReject() {
    if (!currentUser) return;

    await update({
      currentUserId: currentUser.id,
      active: false,
    });

    await updateUser({
      id: currentUser.id,
      active: false,
      verified: currentUser.verified,
    });

    sendEmail(
      {
        subject: "Verificação profissional: Perfil rejeitado",
        email: currentUser.email,
        template: "REJECT_PROFESSIONAL",
        text: "text",
        params: {
          USER_NAME: currentUser.name,
          PROFILE_LINK: `https://profissionais.cadacasa.com.br/professional/${currentUser.id}`,
        },
      },
      true
    );

    getInfo(currentUser.id);
  }

  async function handleProfessionalInactive() {
    if (!currentUser) return;

    await update({
      currentUserId: currentUser.id,
      active: false,
    });

    await updateUser({
      id: currentUser.id,
      active: false,
      verified: currentUser.verified,
    });

    sendEmail(
      {
        subject: "Perfil inativado",
        email: currentUser.email,
        template: "INACTIVE_PROFESSIONAL",
        text: "text",
      },
      true
    );

    getInfo(currentUser.id);
  }

  useEffect(() => {
    if (!id) return;
    getInfo(id);
  }, [id]);

  const stateName = (code: string) => {
    return states.filter((el) => el.id === code)[0].name;
  };

  return (
    <MarginContainer>
      {currentProfessional && (
        <>
          <FlexBox my={2}>
            <Button variant="text" onClick={() => navigate(-1)}>
              <CaretLeft weight="fill" /> Voltar
            </Button>
          </FlexBox>
          <FlexBox direction="column" gap={2} mb={5}>
            <FlexBox gap={5} alignItems="center">
              <Photo className="photo">
                <img
                  src={currentProfessional.profilePicture}
                  alt=""
                  loading="lazy"
                />
              </Photo>

              <FlexBox gap={5}>
                <FlexBox direction="column" gap={1}>
                  <FlexBox gap={5}>
                    <FlexBox direction="column" gap={1}>
                      <Button
                        variant="outline"
                        width={15}
                        onClick={() =>
                          navigate(
                            `/professional/${currentProfessional.userId}`
                          )
                        }
                      >
                        Página do Profissonal
                      </Button>
                      <Button
                        variant="outline"
                        width={15}
                        onClick={() => setList(!leads)}
                      >
                        {leads ? <>Informações</> : <>Leads do Profissonal</>}
                      </Button>
                    </FlexBox>
                  </FlexBox>
                </FlexBox>
              </FlexBox>

              {!currentProfessional?.active ? (
                <FlexBox direction="column" gap={1}>
                  <Button
                    variant="primary"
                    color="white"
                    background={color.secondary.blue}
                    width={15}
                    onClick={handleProfessionalAccept}
                  >
                    Ativar
                  </Button>
                  <Button
                    variant="outline"
                    width={15}
                    onClick={handleProfessionalReject}
                  >
                    Rejeitar
                  </Button>
                </FlexBox>
              ) : (
                <FlexBox direction="column" gap={1}>
                  <Button
                    variant="primary"
                    color="white"
                    background={color.secondary.blue}
                    width={15}
                    onClick={handleProfessionalInactive}
                  >
                    Desativar
                  </Button>
                </FlexBox>
              )}
            </FlexBox>
            <h2>Informações:</h2>
            {!leads ? (
              <FlexBox gap={10}>
                <FlexBox direction="column" gap={3}>
                  <FlexBox direction="column" gap={0.75}>
                    <h3>Informações pessoais</h3>
                    <p>
                      Nome: <strong>{currentProfessional.name}</strong>
                    </p>
                    {/* <p>
                CPF: <strong>{currentProfessional.}</strong>
              </p>
              <p>
                CEP: <strong>{currentProfessional.}</strong>
              </p> */}
                    <p>
                      Telefone: <strong>{currentProfessional.phone}</strong>
                    </p>
                    {/* <p>
                Email: <strong>{currentProfessional.email}</strong>
              </p> */}
                  </FlexBox>
                  <FlexBox direction="column" gap={0.75}>
                    <h3>Informações de PJ</h3>

                    <p>
                      Nome Fantasia:{" "}
                      <strong>{currentProfessional.companyName}</strong>
                    </p>
                    <p>
                      CNPJ: <strong>{currentProfessional.cnpj}</strong>
                    </p>
                  </FlexBox>
                  <FlexBox direction="column" gap={0.75}>
                    <h3>Área de atuação</h3>
                    {currentProfessional.locations.map((a, index) => (
                      <p key={a.id}>{stateName(a.state)}</p>
                    ))}
                    {currentProfessional.onlineAppointment && (
                      <p>Atende online</p>
                    )}
                  </FlexBox>
                </FlexBox>
                <FlexBox direction="column" gap={3}>
                  <FlexBox direction="column" gap={0.75}>
                    <h3>Formação Profissional</h3>
                    <p>
                      Instituição de formação:{" "}
                      <strong>{currentProfessional.formationInstitute}</strong>
                    </p>
                    <p>
                      CREA / CAU: <strong>{currentProfessional.caucrea}</strong>
                    </p>
                    <p>
                      Nível de formação:{" "}
                      <strong>{currentProfessional.professionalLevel}</strong>
                    </p>
                    <p>
                      Ano de conclusão:{" "}
                      <strong>{currentProfessional.yearConclusion}</strong>
                    </p>
                    <p>
                      Detalhamento da formação:{" "}
                      <strong>{currentProfessional.formationDetails}</strong>
                    </p>
                  </FlexBox>
                  <FlexBox direction="column" gap={0.75}>
                    <h3>Redes Sociais</h3>
                    <FlexBox>
                      {currentProfessional.socialMedias.map((media) => (
                        <a key={media.id} href={media.link} target="_blank">
                          {socialMediaIcon(media.name)}
                        </a>
                      ))}
                    </FlexBox>
                  </FlexBox>
                  <FlexBox direction="column" gap={0.75}>
                    <h3>Anexos</h3>
                    <a href={currentProfessional.portfolioFile} target="_blank">
                      <Button variant="text">
                        <DownloadSimple />
                        Visualizar arquivo de portifolio
                      </Button>
                    </a>
                    {/* {currentProfessional.?.map((f, index) => (
                <FlexBox key={index} gap={1.5}>
                  <em>{f.name}</em>

                  <Button variant="text">
                    <Download weight="light" size={20} />
                  </Button>
                </FlexBox>
              ))} */}
                  </FlexBox>
                </FlexBox>
              </FlexBox>
            ) : (
              <LeadList
                leads={currentProfessional.leads.filter(
                  (el) => el.professionalId === currentProfessional.id
                )}
                professional
              />
            )}
          </FlexBox>
        </>
      )}
    </MarginContainer>
  );
};
