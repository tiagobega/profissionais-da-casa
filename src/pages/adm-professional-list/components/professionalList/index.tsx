import { FlexBox } from "components/FlexBox";
import { areaType } from "components/Forms/FormEditProfile";
import Input from "components/Input";
import { useState } from "react";
import { ProfessionalListLine } from "../ListLine";
import { filterProfessionalFunction } from "utils/filterList";
import { ScreenList } from "pages/adm-professional-list";
import { List, ListContent, ListHeader, ListLegend } from "./styles";

export interface ProfessionalListProps {
  screen: ScreenList;
}

export type ProfessionalType = {
  id: string;
  personalInfo: ProfessionalPersonalInfo;
  businessInfo: {
    responsible: string;
    companyName: string;
    cnpj: string;
  };
  area: areaType[];
  formation: {
    institution: string;
    creaCau: string;
    formationLevel: string;
    formationDetails: string;
    yearOfConclusion: string;
  };
  social: {
    linkedin?: string;
    instagram?: string;
    pinterest?: string;
    facebook?: string;
    other?: string;
  };
  photo?: string;
  files?: { name: string; url: string }[];
};

export type ProfessionalPersonalInfo = {
  name: string;
  cpf: string;
  cep: string;
  phone: string;
  email: string;
  birthDate: string;
  status: "approved" | "waiting" | "blocked";
  rating: number;
};

const professionalListPersonal: ProfessionalPersonalInfo[] = [
  {
    name: "Jose Antonio Cavalcante",
    birthDate: "30/12/1982",
    cep: "12345-678",
    phone: "(11)98765-4321",
    email: "joseacavalcante@bol.com",
    cpf: "12345678910",
    status: "approved",
    rating: 4.75,
  },
  {
    name: "Maria Pereira Nunes",
    birthDate: "30/12/1971",
    cep: "12345-678",
    phone: "(11)98765-4321",
    email: "mpnunes@bol.com",
    cpf: "12345678910",
    status: "approved",
    rating: 3.5,
  },
  {
    name: "Giane Albuquerque",
    birthDate: "30/12/1971",
    cep: "12345-678",
    phone: "(11)98765-4321",
    email: "gianealbuquerque@bol.com",
    cpf: "12345678910",
    status: "approved",
    rating: 4.5,
  },
  {
    name: "Paula Santos Laurentino",
    birthDate: "30/12/1971",
    cep: "12345-678",
    phone: "(11)98765-4321",
    email: "pslaurentino@bol.com",
    cpf: "12345678910",
    status: "approved",
    rating: 4.4,
  },
  {
    name: "Augusto dos Santos Saad",
    birthDate: "30/12/1971",
    cep: "12345-678",
    phone: "(11)98765-4321",
    email: "augsaad@bol.com",
    cpf: "12345678910",
    status: "approved",
    rating: 4.2,
  },
  {
    name: "Bernadete Salinski",
    birthDate: "30/12/1971",
    cep: "12345-678",
    phone: "(11)98765-4321",
    email: "bernadetesalinski@bol.com",
    cpf: "12345678910",
    status: "waiting",
    rating: 0,
  },
  {
    name: "Rita Mieko Orugaishii",
    birthDate: "30/12/1971",
    cep: "12345-678",
    phone: "(11)98765-4321",
    email: "rita_m_rugaishii@bol.com",
    cpf: "12345678910",
    status: "waiting",
    rating: 0,
  },
  {
    name: "Roberto Lauro Schneiderhoffner",
    birthDate: "30/12/1971",
    cep: "12345-678",
    phone: "(11)98765-4321",
    email: "roberto_schneiderhoffner@bol.com",
    cpf: "12345678910",
    status: "waiting",
    rating: 0,
  },
];

export const ProfessionalList: React.FC<ProfessionalListProps> = ({
  screen,
}) => {
  const [query, setQuery] = useState<string>("");
  const approved = screen == "professionals" ? true : false;

  const approvedList = professionalListPersonal.filter(
    (el) => el.status == "approved"
  );
  const waitingList = professionalListPersonal.filter(
    (el) => el.status == "waiting"
  );

  const displayList = approved
    ? filterProfessionalFunction(approvedList, query)
    : filterProfessionalFunction(waitingList, query);

  console.log(waitingList, approvedList);

  return (
    <List>
      <ListHeader alignItems="center" justifyContent="space-between" p={1}>
        <h3>
          {approved ? "Cadastrados" : "Em análise"} ({displayList.length})
        </h3>
        <Input.Text
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquisar usuário"
          aria-label="Pesquisar usuário"
          width={5}
        />
      </ListHeader>
      <ListLegend full>
        <FlexBox gap={1}>
          <div className="name">Nome</div>
          <div className="birth-date">Data de Cadastro</div>
          <div className="email">Email</div>
          <div className="phone">Telefone</div>
          {approved && <div className="rating">Avaliação</div>}
        </FlexBox>
      </ListLegend>
      <ListContent>
        {displayList.map((el) => (
          <ProfessionalListLine professional={el} />
        ))}
      </ListContent>
    </List>
  );
};
