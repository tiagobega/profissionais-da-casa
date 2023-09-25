import { CaretLeft, Download } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { useNavigate } from "react-router-dom";
import { MarginContainer } from "styles/commonComponents";
import { Photo } from "./styles";
import { useTheme } from "styled-components";
import { useState } from "react";
import { Professional } from "services/User/types";

export interface ProfessionalDetailsProps {}

export const AdmProfessionalDetails: React.FC<
  ProfessionalDetailsProps
> = () => {
  const [currentProfessions, setCurrentProfessional] = useState<Professional>();

  const navigate = useNavigate();
  const { color } = useTheme();

  return (
    <div>fazer isso aqui de novo</div>
    //   <MarginContainer>
    //     <FlexBox my={2}>
    //       <Button variant="text" onClick={() => navigate(-1)}>
    //         <CaretLeft weight="fill" /> Voltar
    //       </Button>
    //     </FlexBox>
    //     <FlexBox direction="column" gap={2} mb={5}>
    //       <FlexBox gap={5} alignItems="center">
    //         <Photo className="photo"></Photo>

    //         {currentProfessions ? (
    //           <FlexBox gap={5}>
    //             <FlexBox direction="column" gap={1}>
    //               <Button
    //                 variant="outline"
    //                 width={15}
    //                 onClick={() =>
    //                   navigate(`/professional/${currentProfessions.userId}`)
    //                 }
    //               >
    //                 Página do Profissonal
    //               </Button>
    //               <Button
    //                 variant="outline"
    //                 width={15}
    //                 onClick={() =>
    //                   navigate(
    //                     `/admin/professionals-management/leads/${currentProfessions.userId}`
    //                   )
    //                 }
    //               >
    //                 Leads do Profissonal
    //               </Button>
    //             </FlexBox>
    //             <FlexBox direction="column" gap={1}>
    //               <Button>Desativar Profissional</Button>
    //             </FlexBox>
    //           </FlexBox>
    //         ) : currentProfessions == "waiting" ? (
    //           <FlexBox direction="column" gap={1}>
    //             <Button
    //               variant="primary"
    //               color="white"
    //               background={color.secondary.blue}
    //               width={15}
    //             >
    //               Validar
    //             </Button>
    //             <Button variant="outline" width={15}>
    //               Rejeitar
    //             </Button>
    //           </FlexBox>
    //         ) : (
    //           <FlexBox direction="column" gap={1}>
    //             <FlexBox gap={5}>
    //               <FlexBox direction="column" gap={1}>
    //                 <Button
    //                   variant="outline"
    //                   width={15}
    //                   onClick={() => navigate(`/professional/${professional.id}`)}
    //                 >
    //                   Página do Profissonal
    //                 </Button>
    //                 <Button
    //                   variant="outline"
    //                   width={15}
    //                   onClick={() =>
    //                     navigate(
    //                       `/admin/professionals-management/leads/${professional.id}`
    //                     )
    //                   }
    //                 >
    //                   Leads do Profissonal
    //                 </Button>
    //               </FlexBox>
    //               <FlexBox direction="column" gap={1}>
    //                 <Button>Reativar Profissional</Button>
    //               </FlexBox>
    //             </FlexBox>
    //           </FlexBox>
    //         )}
    //       </FlexBox>
    //       <h2>Informações:</h2>
    //       <FlexBox gap={10}>
    //         <FlexBox direction="column" gap={3}>
    //           <FlexBox direction="column" gap={0.75}>
    //             <h3>Informações pessoais</h3>
    //             <p>
    //               Nome: <strong>{professional.personalInfo.name}</strong>
    //             </p>
    //             <p>
    //               CPF: <strong>{professional.personalInfo.cpf}</strong>
    //             </p>
    //             <p>
    //               CEP: <strong>{professional.personalInfo.cep}</strong>
    //             </p>
    //             <p>
    //               Telefone: <strong>{professional.personalInfo.phone}</strong>
    //             </p>
    //             <p>
    //               Email: <strong>{professional.personalInfo.email}</strong>
    //             </p>
    //             <p>
    //               Data de Nascimento:{" "}
    //               <strong>{professional.personalInfo.birthDate}</strong>
    //             </p>
    //           </FlexBox>
    //           <FlexBox direction="column" gap={0.75}>
    //             <h3>Informações de PJ</h3>
    //             <p>
    //               Registro do Responsável Técnico:{" "}
    //               <strong>{professional.businessInfo.responsible}</strong>
    //             </p>
    //             <p>
    //               Nome Fantasia:{" "}
    //               <strong>{professional.businessInfo.companyName}</strong>
    //             </p>
    //             <p>
    //               CNPJ: <strong>{professional.businessInfo.cnpj}</strong>
    //             </p>
    //           </FlexBox>
    //           <FlexBox direction="column" gap={0.75}>
    //             <h3>Área de atuação</h3>
    //             {professional.area.map((a, index) => (
    //               <FlexBox direction="column" key={index} gap={0.5}>
    //                 <h4>Area {index + 1}</h4>
    //                 <p>
    //                   Estado: <strong>{a.state}</strong>
    //                 </p>

    //                 <p>
    //                   Cidade: <strong>{a.city}</strong>
    //                 </p>

    //                 <p>
    //                   Região específica: <strong>{a.location}</strong>
    //                 </p>
    //               </FlexBox>
    //             ))}
    //           </FlexBox>
    //         </FlexBox>
    //         <FlexBox direction="column" gap={3}>
    //           <FlexBox direction="column" gap={0.75}>
    //             <h3>Formação Profissional</h3>
    //             <p>
    //               Instituição de formação:{" "}
    //               <strong>{professional.formation.institution}</strong>
    //             </p>
    //             <p>
    //               CREA / CAU: <strong>{professional.formation.creaCau}</strong>
    //             </p>
    //             <p>
    //               Nível de formação:{" "}
    //               <strong>{professional.formation.formationLevel}</strong>
    //             </p>
    //             <p>
    //               Ano de conclusão:{" "}
    //               <strong>{professional.formation.yearOfConclusion}</strong>
    //             </p>
    //             <p>
    //               Detalhamento da formação:{" "}
    //               <strong>{professional.formation.formationDetails}</strong>
    //             </p>
    //           </FlexBox>
    //           <FlexBox direction="column" gap={0.75}>
    //             <h3>Redes Sociais</h3>
    //             {professional.social.linkedin && (
    //               <p>
    //                 LinkedIn: <strong>{professional.social.linkedin}</strong>
    //               </p>
    //             )}
    //             {professional.social.instagram && (
    //               <p>
    //                 Instagram: <strong>{professional.social.linkedin}</strong>
    //               </p>
    //             )}
    //             {professional.social.pinterest && (
    //               <p>
    //                 Pinterest: <strong>{professional.social.pinterest}</strong>
    //               </p>
    //             )}
    //             {professional.social.facebook && (
    //               <p>
    //                 Facebook: <strong>{professional.social.facebook}</strong>
    //               </p>
    //             )}
    //             {professional.social.other && (
    //               <p>
    //                 Outra: <strong>{professional.social.other}</strong>
    //               </p>
    //             )}
    //           </FlexBox>
    //           <FlexBox direction="column" gap={0.75}>
    //             <h3>Anexos</h3>
    //             {professional.files?.map((f, index) => (
    //               <FlexBox key={index} gap={1.5}>
    //                 <em>{f.name}</em>

    //                 <Button variant="text">
    //                   <Download weight="light" size={20} />
    //                 </Button>
    //               </FlexBox>
    //             ))}
    //           </FlexBox>
    //         </FlexBox>
    //       </FlexBox>
    //     </FlexBox>
    //   </MarginContainer>
  );
};
