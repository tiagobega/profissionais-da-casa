import { MagnifyingGlass, Smiley, SmileySad } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { ButtonDelete } from "components/ButtonDelete";
import { FlexBox } from "components/FlexBox";
import { FormPortfolioProject } from "components/Forms/FormPortfolioProject";
import Input from "components/Input";
import { useApi } from "contexts/User";
import { useEffect, useState } from "react";
import { PortfolioProject, Professional } from "services/User/types";
import { useTheme } from "styled-components";
import { PortfolioFileContainer } from "./styles";

export interface PortfolioHomeProps {
  professional: Professional;
}

export const PortfolioHome: React.FC<PortfolioHomeProps> = ({
  professional,
}) => {
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState<PortfolioProject | null>(null);
  const [add, setAdd] = useState(false);
  const { portfolioProject } = useApi();
  const { deletePortfolioProject } = portfolioProject;
  const theme = useTheme();

  const portfolio = professional.portfolioProjects;
  const file = professional.portfolioFile;

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
        <FormPortfolioProject id={professional.id} close={handleCloseForm} />
      ) : !selected ? (
        <>
          <FlexBox full justifyContent="space-between" alignItems="center">
            <h2>Meu portifolio</h2>
            <FlexBox gap={0.5} alignItems="center">
              <MagnifyingGlass size={45} />
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
            {portfolio.length == 0 && (
              <FlexBox full my={4} centralized direction="column" gap={1}>
                <FlexBox alignItems="center" gap={1}>
                  <SmileySad
                    weight="bold"
                    size={32}
                    color={theme.color.brand.orange}
                  />
                  <h2 style={{ color: theme.color.brand.orange }}>
                    Não há projetos aqui ...
                  </h2>
                </FlexBox>
                <p>Clique em "Adicionar" para criar um projeto </p>
              </FlexBox>
            )}
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
          <PortfolioFileContainer direction="column" gap={2} mt={3} pt={2} full>
            <h3>Arquivo de portfólio</h3>

            {file ? (
              <FlexBox>
                <Button>Visualizar</Button>
                <ButtonDelete deleteFn={() => {}} name="Portifólio">
                  Deletar
                </ButtonDelete>
              </FlexBox>
            ) : (
              <p>Form</p>
            )}
          </PortfolioFileContainer>
        </>
      ) : (
        <FormPortfolioProject id={professional.id} close={handleCloseForm} />
      )}
    </>
  );
};
