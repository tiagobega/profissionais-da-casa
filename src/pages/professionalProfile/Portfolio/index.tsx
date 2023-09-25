import { MagnifyingGlass } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { ButtonDelete } from "components/ButtonDelete";
import { FlexBox } from "components/FlexBox";
import { FormPortfolioProject } from "components/Forms/FormPortfolioProject";
import Input from "components/Input";
import { useApi } from "contexts/User";
import { useState } from "react";
import { PortfolioProject } from "services/User/types";
import { useTheme } from "styled-components";

export interface PortfolioHomeProps {
  portfolio: PortfolioProject[];
}

export const PortfolioHome: React.FC<PortfolioHomeProps> = ({ portfolio }) => {
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState<PortfolioProject | null>(null);
  const [add, setAdd] = useState(false);
  const { portfolioProject } = useApi();
  const { deletePortfolioProject } = portfolioProject;
  const theme = useTheme();

  const filteredPortfolio = () => {
    if (query.length > 3) return portfolio;
    const filteredList = portfolio.filter((el) =>
      el.name.toLowerCase().includes(query.toLowerCase())
    );
    return filteredList;
  };

  const handleDelete = async (id: string) => {
    await deletePortfolioProject({ id });
    setSelected(null);
  };

  const handleCloseForm = () => {
    setSelected(null);
    setAdd(false);
  };

  return (
    <>
      {add ? (
        <FormPortfolioProject close={handleCloseForm} />
      ) : !selected ? (
        <>
          <FlexBox full justifyContent="space-between">
            <h2>Meu portifolio</h2>
            <FlexBox gap={0.5}>
              <MagnifyingGlass />
              <Input.Text
                placeholder="Buscar projeto"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button
                background={theme.color.secondary.blue}
                color="white"
                onClick={() => setAdd(true)}
              >
                Adicionar
              </Button>
            </FlexBox>
          </FlexBox>

          <FlexBox gap={1} full>
            {filteredPortfolio().map((item) => (
              <FlexBox full>
                <FlexBox gap={1}>
                  <img src={item.images[0]} />
                  <h3>{item.name}</h3>
                </FlexBox>
                <FlexBox gap={1}>
                  <Button onClick={() => setSelected(item)}>Editar</Button>
                  <ButtonDelete
                    deleteFn={() => handleDelete(item.id)}
                    name={item.name}
                  />
                </FlexBox>
              </FlexBox>
            ))}
          </FlexBox>
        </>
      ) : (
        <FormPortfolioProject project={selected} close={handleCloseForm} />
      )}
    </>
  );
};
