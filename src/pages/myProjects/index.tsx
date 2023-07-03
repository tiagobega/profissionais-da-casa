import { CaretLeft } from "@phosphor-icons/react";
import { ProjectType } from "Models/models";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { ProjectCard } from "components/ProjectCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { FullContainer, MarginContainer } from "styles/commonComponents";
import { Content, ListContainer } from "./styles";
import { Modal } from "components/Modal";
import { FormCreateProject } from "components/Forms/FormCreateProject";

export interface MyProjectsPageProps {}

export const projectList: ProjectType[] = [
  {
    name: "Reforma apartamento Cursino",
    customer: "Antônio Carlos dos Santos",
    phone: "(11)98765-4321",
    email: "acdossantos@bol.com.br",
    status: "not-started",
  },
  {
    name: "Reforma apartamento Cursino",
    customer: "Antônio Carlos dos Santos",
    phone: "(11)98765-4321",
    email: "acdossantos@bol.com.br",
    status: "ongoing",
  },
  {
    name: "Reforma apartamento Cursino",
    customer: "Antônio Carlos dos Santos",
    phone: "(11)98765-4321",
    email: "acdossantos@bol.com.br",
    status: "ongoing",
  },
  {
    name: "Reforma apartamento Cursino",
    customer: "Antônio Carlos dos Santos",
    phone: "(11)98765-4321",
    email: "acdossantos@bol.com.br",
    status: "not-started",
  },
  {
    name: "Reforma apartamento Cursino",
    customer: "Antônio Carlos dos Santos",
    phone: "(11)98765-4321",
    email: "acdossantos@bol.com.br",
    status: "complete",
  },
  {
    name: "Reforma apartamento Cursino",
    customer: "Antônio Carlos dos Santos",
    phone: "(11)98765-4321",
    email: "acdossantos@bol.com.br",
    status: "not-started",
  },
  {
    name: "Reforma apartamento Cursino",
    customer: "Antônio Carlos dos Santos",
    phone: "(11)98765-4321",
    email: "acdossantos@bol.com.br",
    status: "ongoing",
  },
  {
    name: "Reforma apartamento Cursino",
    customer: "Antônio Carlos dos Santos",
    phone: "(11)98765-4321",
    email: "acdossantos@bol.com.br",
    status: "not-started",
  },
  {
    name: "Reforma apartamento Cursino",
    customer: "Antônio Carlos dos Santos",
    phone: "(11)98765-4321",
    email: "acdossantos@bol.com.br",
    status: "ongoing",
  },
  {
    name: "Reforma apartamento Cursino",
    customer: "Antônio Carlos dos Santos",
    phone: "(11)98765-4321",
    email: "acdossantos@bol.com.br",
    status: "complete",
  },
];

export const MyProjectsPage: React.FC<MyProjectsPageProps> = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"not-started" | "ongoing" | "complete">(
    "not-started"
  );
  const [query, setQuery] = useState<string>("");
  const [sort, setSort] = useState<string | undefined>(undefined);
  const { color } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const byStatus = projectList.filter((el) => el.status === status);

  const filteredList = byStatus
    ? byStatus.filter(
        (el) => el.name.includes(query) || el.customer.includes(query)
      )
    : [];
  const sortedList =
    sort == "name"
      ? filteredList.sort((a, b) => (a.name > b.name ? 1 : -1))
      : sort == "customer"
      ? filteredList.sort((a, b) => (a.name > b.name ? 1 : -1))
      : filteredList;

  return (
    <>
      <FullContainer>
        <FlexBox alignItems="center" py={2} px={8}>
          <Button variant="text" onClick={() => navigate(-1)}>
            <CaretLeft weight="fill" />
            Voltar
          </Button>
          <h2 style={{ flex: "1", textAlign: "center" }}>Meus Clientes</h2>
        </FlexBox>
      </FullContainer>
      <ListContainer>
        <FlexBox gap={3} p={1}>
          <Button
            variant="text"
            onClick={() => setStatus("not-started")}
            color={status == "not-started" ? "black" : color.base[300]}
          >
            Não iniciado
          </Button>
          <Button
            variant="text"
            onClick={() => setStatus("ongoing")}
            color={status == "ongoing" ? "black" : color.base[300]}
          >
            Projeto em Andamento
          </Button>
          <Button
            variant="text"
            onClick={() => setStatus("complete")}
            color={status == "complete" ? "black" : color.base[300]}
          >
            Finalizados
          </Button>
        </FlexBox>
        <Content direction="column" gap={1} px={7} py={3} full>
          <FlexBox gap={2} full justifyContent="flex-start">
            <Input.Text
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              placeholder="Buscar"
              aria-label="Busca"
            />
            <Input.Select
              options={[
                { name: "Cliente", value: "customer" },
                { name: "Nome", value: "name" },
              ]}
              onChange={(e) => setSort(e.target.value)}
              value={sort}
              placeholder="Ordenar por"
              aria-label="Ordenação"
            />
          </FlexBox>
          <Button
            variant="primary"
            color="white"
            background={color.secondary.blue}
            onClick={() => setIsOpen(true)}
          >
            Criar Projeto
          </Button>
          <FlexBox direction="column" gap={1} full>
            {sortedList?.map((item) => (
              <ProjectCard key={Math.random()} project={item} />
            ))}
          </FlexBox>
        </Content>
      </ListContainer>
      <Modal isOpened={isOpen} onClose={() => setIsOpen(false)}>
        <FormCreateProject />
      </Modal>
    </>
  );
};
