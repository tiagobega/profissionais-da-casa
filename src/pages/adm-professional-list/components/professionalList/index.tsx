import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useState } from "react";
import { ProfessionalListLine } from "../ListLine";
import { filterProfessionalFunction } from "utils/filterList";
import { ScreenList } from "pages/adm-professional-list";
import { List, ListContent, ListHeader, ListLegend } from "./styles";
import { Me, Professional } from "services/User/types";
import { Button } from "components/Button";
import { SortAscending } from "@phosphor-icons/react";
import { sortFilterProfessional } from "utils/sortProfessional";

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
  const [sort, setSort] = useState<"name" | "date">("name");
  const approved = screen == "professionals" ? true : false;

  const finalList = professionals.map((professional) => {
    const founded = users.find((user) => professional.userId === user.id);

    return {
      professional,
      user: founded!,
    };
  });

  const approvedList = finalList.filter((item) => item?.professional.active);
  const waitingList = finalList.filter((item) => !item?.professional.active);

  const displayList = approved
    ? sortFilterProfessional(approvedList, sort, query)
    : sortFilterProfessional(waitingList, sort, query);

  return (
    <List>
      <ListHeader alignItems="center" justifyContent="space-between" p={1}>
        <h3>
          {approved ? "Cadastrados" : "Em análise"} ({displayList.length})
        </h3>
        <FlexBox gap={0.5} alignItems="center">
          <SortAscending size={20} />
          Organizar por:
          <Button variant="outline" onClick={() => setSort("name")} small>
            Nome
          </Button>
          <Button variant="outline" onClick={() => setSort("date")} small>
            Data
          </Button>
        </FlexBox>
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
          <div className="birth-date">Usuário desde</div>
          <div className="email">Email</div>
          <div className="phone">Telefone</div>
          {approved && <div className="rating">Avaliação</div>}
        </FlexBox>
      </ListLegend>
      <ListContent>
        {displayList.map((el) => (
          <ProfessionalListLine
            professional={el.professional}
            user={el.user}
            key={el.user.id}
          />
        ))}
      </ListContent>
    </List>
  );
};
