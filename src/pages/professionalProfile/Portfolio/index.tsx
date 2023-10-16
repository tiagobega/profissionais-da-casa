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
import { PortfolioCard, PortfolioFileContainer } from "./styles";
import { FormAddPortfolio } from "components/Forms/FormAddPortfolio";
import { FormEditPortfolioProject } from "components/Forms/FormEditPortfolioProject";

export interface PortfolioHomeProps {
  professional: Professional;
  refetch: () => void;
}

export const PortfolioHome: React.FC<PortfolioHomeProps> = ({
  professional,
  refetch,
}) => {
  const [query, setQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);
  const [add, setAdd] = useState(false);
  const { portfolioProject, professional: professionalApi } = useApi();
  const { deletePortfolioProject } = portfolioProject;
  const { update } = professionalApi;
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

  const deletePortfolioFile = async () => {
    await update({ id: professional.id, portfolioFile: "" });
  };

  const handleDelete = async (id: string) => {
    await deletePortfolioProject({ id });
    setSelectedProject(null);
  };

  const handleCloseForm = () => {
    setSelectedProject(null);
    setAdd(false);
    refetch();
  };

  return (
    <>
      {add ? (
        <FormPortfolioProject id={professional.id} close={handleCloseForm} />
      ) : !selectedProject ? (
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

          <FlexBox gap={1} full mt={2}>
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
            <FlexBox direction="column">
              {filteredPortfolio().map((item) => (
                <PortfolioCard
                  full
                  alignItems="center"
                  justifyContent="space-between"
                  gap={6}
                >
                  <FlexBox gap={1} alignItems="center">
                    <img src={item.images.split(",")[0]} />
                    <h4>{item.name}</h4>
                  </FlexBox>
                  <FlexBox gap={1}>
                    <Button
                      type="button"
                      small
                      onClick={() => setSelectedProject(item)}
                    >
                      Editar
                    </Button>
                    <ButtonDelete
                      small
                      deleteFn={() => handleDelete(item.id)}
                      name={item.name}
                    />
                  </FlexBox>
                </PortfolioCard>
              ))}
            </FlexBox>
          </FlexBox>
          <PortfolioFileContainer direction="column" gap={2} mt={3} pt={2} full>
            <h3>Arquivo de portfólio</h3>

            {file ? (
              <FlexBox full justifyContent="space-between">
                <Button
                  disabled={!professional.portfolioFile}
                  href={professional.portfolioFile}
                >
                  Visualizar portifólio
                </Button>
                <ButtonDelete
                  deleteFn={() => deletePortfolioFile()}
                  name="Portifólio"
                >
                  Deletar portifólio
                </ButtonDelete>
              </FlexBox>
            ) : (
              <FormAddPortfolio id={professional.id} />
            )}
          </PortfolioFileContainer>
        </>
      ) : (
        <FormEditPortfolioProject
          id={professional.id}
          close={handleCloseForm}
          project={selectedProject}
        />
      )}
    </>
  );
};
