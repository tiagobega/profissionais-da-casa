import Input from "components/Input";
import { Loading } from "components/Loading";
import { useUser } from "contexts/User";
import { useState } from "react";
import { Lead } from "services/User/types";
import { LeadListLine } from "../ListLine";
import { List, ListContent, ListHeader } from "./styles";

export interface ProfessionalListProps {
  professionalId: string;
}

const leadsList: Lead[] = [
  {
    name: "Jose Antonio Cavalcante",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, possimus error. Fugit placeat ex eius quia modi odio suscipit dolores repellendus harum obcaecati enim sit exercitationem perspiciatis quo animi facere id, nulla omnis quisquam alias? Quas dignissimos iure sint ut.",
    id: "123456",
    professionalId: "990049039",
    userId: "29849493",
  },
  {
    name: "Alessandra Freitas de lima",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, possimus error. Fugit placeat ex eius quia modi odio suscipit dolores repellendus harum obcaecati enim sit exercitationem perspiciatis quo animi facere id, nulla omnis quisquam alias? Quas dignissimos iure sint ut.",
    id: "4433322",
    professionalId: "990049022324239",
    userId: "2342249849493",
  },
];

export const LeadList: React.FC<ProfessionalListProps> = ({
  professionalId,
}) => {
  const [query, setQuery] = useState<string>("");
  const { getProfessional } = useUser();

  const leads = leadsList; //tem que trazer o profissional

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

      <ListContent>
        {leads ? (
          filteredList().map((el) => <LeadListLine lead={el} />)
        ) : (
          <Loading />
        )}
      </ListContent>
    </List>
  );
};
