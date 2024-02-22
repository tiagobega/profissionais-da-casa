import Input from "components/Input";
import { useState } from "react";
import { Lead } from "services/User/types";
import { LeadListLine } from "../ListLine";
import { List, ListContent, ListHeader } from "./styles";
import { filteredLeadsList } from "utils/leadSort";

export interface ProfessionalListProps {
  leads: Lead[];
  admin?: boolean;
  professional: boolean;
}

export const LeadList: React.FC<ProfessionalListProps> = ({
  leads,
  admin,
  professional,
}) => {
  const [query, setQuery] = useState<string>("");

  return (
    <List>
      <ListHeader p={1}>
        <h3>
          {leads.length > 0
            ? admin
              ? `Quantidade de contatos: ${leads.length}`
              : `${
                  professional ? "Contatos do profissional" : "Meus Contatos"
                }: ${leads.length}`
            : "Não há contatos"}
        </h3>
        <Input.Text
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquisar por cliente"
          aria-label="Pesquisar cliente"
          width={5}
        />
      </ListHeader>

      {leads.length > 0 && (
        <ListContent>
          {filteredLeadsList(leads, query).map((el) => (
            <LeadListLine lead={el} professional={professional} key={el.id} />
          ))}
        </ListContent>
      )}
    </List>
  );
};
