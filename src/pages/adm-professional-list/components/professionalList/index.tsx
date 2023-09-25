import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useState } from "react";
import { ProfessionalListLine } from "../ListLine";
import { filterProfessionalFunction } from "utils/filterList";
import { ScreenList } from "pages/adm-professional-list";
import { List, ListContent, ListHeader, ListLegend } from "./styles";
import { Me, Professional } from "services/User/types";

export interface ProfessionalListProps {
  screen: ScreenList;
  professionals: Professional[];
  users: Me[];
}

export const ProfessionalList: React.FC<ProfessionalListProps> = ({
  screen,
  professionals,
  users,
}) => {
  const [query, setQuery] = useState<string>("");
  const approved = screen == "professionals" ? true : false;

  const finalList = professionals.map((professional) => {
    const founded = users.find((user) => professional.userId === user.id);

    return {
      professional,
      user: founded!,
    };
  });

  const approvedList = finalList.filter((item) => item?.user.active);
  const waitingList = finalList.filter((item) => !item?.user.active);

  const displayList = approved
    ? filterProfessionalFunction(approvedList, query)
    : filterProfessionalFunction(waitingList, query);

  return (
    <List>
      <ListHeader alignItems="center" justifyContent="space-between" p={1}>
        <h3>
          {approved ? "Cadastrados" : "Em análise"} ({displayList.length})
        </h3>
        <Input.Text
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquisar profissional"
          aria-label="Pesquisar profissional"
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
          <ProfessionalListLine professional={el.professional} user={el.user} />
        ))}
      </ListContent>
    </List>
  );
};
