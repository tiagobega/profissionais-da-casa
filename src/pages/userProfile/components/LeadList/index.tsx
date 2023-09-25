import Input from "components/Input";
import { Loading } from "components/Loading";
import { useUser } from "contexts/User";
import { useState } from "react";
import { Lead } from "services/User/types";
import { LeadListLine } from "../ListLine";
import { List, ListContent, ListHeader } from "./styles";

export interface ProfessionalListProps {
  leads: Lead[];
}

export const LeadList: React.FC<ProfessionalListProps> = ({ leads }) => {
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
            ? `O profissional tem ${leads.length} leads registrados`
            : "O profissional não possui leads registrados"}
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
