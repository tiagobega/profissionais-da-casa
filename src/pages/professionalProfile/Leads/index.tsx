import { MagnifyingGlass } from "@phosphor-icons/react";
import { Collapsible } from "components/Collapsable";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { Loading } from "components/Loading";
import { useState } from "react";
import { Lead } from "services/User/types";

export interface LeadsHomeProps {
  leads: Lead[];
}

export const LeadsHome: React.FC<LeadsHomeProps> = ({ leads }) => {
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState<Lead | null>(null);

  const filteredList = () => {
    if (query.length > 3) return leads;
    const filteredList = leads.filter((el) =>
      el.name.toLowerCase().includes(query.toLowerCase())
    );
    return filteredList;
  };

  return (
    <>
      <FlexBox>
        <h2>Meus contatos</h2>
        <FlexBox gap={0.5}>
          <MagnifyingGlass />
          <Input.Text
            placeholder="Buscar projeto"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </FlexBox>
        {!leads ? (
          <Loading />
        ) : (
          <FlexBox gap={1} mt={2} full>
            <p>Você tem {leads?.length} contatos.</p>
            <FlexBox gap={1} full>
              {filteredList().map((item) => (
                <Collapsible title={item.name} variant="neutral">
                  <FlexBox direction="column">
                    <p>{item.description}</p>
                  </FlexBox>
                </Collapsible>
              ))}
            </FlexBox>
          </FlexBox>
        )}
      </FlexBox>
    </>
  );
};
