import { MagnifyingGlass, SmileySad } from "@phosphor-icons/react";
import { Collapsible } from "components/Collapsable";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { Loading } from "components/Loading";
import { useState } from "react";
import { Lead } from "services/User/types";
import { useTheme } from "styled-components";
import { formatShortDate } from "utils/dateFormat";
import { filteredLeadsList } from "utils/leadSort";

export interface LeadsHomeProps {
  leads: Lead[];
}

export const LeadsHome: React.FC<LeadsHomeProps> = ({ leads }) => {
  const [query, setQuery] = useState<string>("");

  const theme = useTheme();

  return (
    <>
      <FlexBox full justifyContent="space-between">
        <h2>Meus contatos</h2>
        <FlexBox gap={0.5} alignItems="center">
          <MagnifyingGlass />
          <Input.Text
            placeholder="Buscar projeto"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </FlexBox>
      </FlexBox>

      {!leads ? (
        <Loading />
      ) : (
        <FlexBox gap={1} mt={2} full direction="column">
          {leads.length == 0 ? (
            <FlexBox full my={4} centralized direction="column" gap={1}>
              <FlexBox alignItems="center" gap={1}>
                <SmileySad
                  weight="bold"
                  size={32}
                  color={theme.color.brand.orange}
                />
                <h2 style={{ color: theme.color.brand.orange }}>
                  Ainda não há contatos registrados
                </h2>
              </FlexBox>
            </FlexBox>
          ) : (
            <FlexBox gap={1} full direction="column">
              <>
                <p>Você tem {leads?.length} contatos.</p>
                {filteredLeadsList(leads, query).map((item) => (
                  <Collapsible
                    title={`${item.name} - ${formatShortDate(item.createdAt)}`}
                    variant="neutral"
                  >
                    <FlexBox direction="column">
                      <p>{item.description}</p>
                    </FlexBox>
                  </Collapsible>
                ))}
              </>
            </FlexBox>
          )}
        </FlexBox>
      )}
    </>
  );
};
