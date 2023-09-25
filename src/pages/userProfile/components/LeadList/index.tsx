import Input from "components/Input";
import { useState } from "react";
import { Lead } from "services/User/types";
import { LeadListLine } from "../ListLine";
import { List, ListContent, ListHeader } from "./styles";

export interface ProfessionalListProps {
  leads: Lead[];
  admin?: boolean;
}

export const LeadList: React.FC<ProfessionalListProps> = ({ leads, admin }) => {
  const [query, setQuery] = useState<string>("");

  const filteredList = () => {
    if (query.length < 3) return leads;
    return leads.filter((el) =>
      el.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <List>
      <ListHeader alignItems="center" justifyContent="space-between" p={1}>
        <h3>
          {leads.length > 0
            ? admin
              ? `Quantidade de contatos: ${leads.length}`
              : `Meus Contatos: ${leads.length}`
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
          {filteredList().map((el) => (
            <LeadListLine lead={el} />
          ))}
        </ListContent>
      )}
    </List>
  );
};
