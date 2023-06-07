import { CaretLeft, Pencil, Plus } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { Collapsible } from "components/Collapsable";
import { FlexBox } from "components/FlexBox";
import React, { useState } from "react";
import { useTheme } from "styled-components";
import { MarginContainer } from "styles/commonComponents";
import { AddButton, StepCollapsableContent } from "./styles";

export interface ProjectPageProps {}

export type DeliveryType = {
  id: string;
  date: Date;
};
export type StepType = {
  name: string;
  id: string;
  deliveries: DeliveryType[];
};

export type ProjectManagementType = {
  projectId: string;
  steps: StepType[];
};

const initialProject: ProjectManagementType = {
  projectId: "163-4774-233",
  steps: [
    {
      id: "1234",
      name: "Vistoria técnica inicial",
      deliveries: [{ id: "1234555", date: new Date() }],
    },
    { id: "1235", name: "Projeto básico", deliveries: [] },
    { id: "1236", name: "Anteprojeto", deliveries: [] },
    { id: "1237", name: "Projeto pré-executivo", deliveries: [] },
    {
      id: "1238",
      name: "Orçamento básico para contratação de serviços",
      deliveries: [],
    },
    { id: "1239", name: "Lista de materiais e componentes", deliveries: [] },
    { id: "1230", name: "Visitas técnicas", deliveries: [] },
    { id: "1232", name: "Vistoria Final", deliveries: [] },
  ],
};

export const ProjectPage: React.FC<ProjectPageProps> = () => {
  const [project, setProject] = useState<ProjectManagementType>(initialProject);
  const { color } = useTheme();

  const addDeliveryToStep = (index: number) => {
    const updatedProject: ProjectManagementType = project;
    updatedProject.steps[index].deliveries.push({
      id: Math.random().toString(),
      date: new Date(),
    });
    console.log(updatedProject);
    setProject(updatedProject);
  };

  const addStepToProject = () => {
    const updatedProject: ProjectManagementType = project;
    updatedProject.steps.push({
      id: Math.random().toString(),
      name: "Nova etapa do projeto",
      deliveries: [],
    });
    console.log(updatedProject);
    setProject(updatedProject);
  };

  return (
    <MarginContainer>
      <header>
        <FlexBox justifyContent="space-between" py={2} alignItems="center">
          <Button variant="text">
            <CaretLeft />
            Voltar
          </Button>
          <h2>Novo Projeto</h2>
          <Button variant="outline">Criar Projeto</Button>
        </FlexBox>
      </header>
      <FlexBox full gap={4} pb={3}>
        <FlexBox direction="column" gap={0.25}>
          <h3>Angela Maia da Silva</h3>
          <p>(11)98765-4321</p>
          <p>angelamsilva@bol.com.br</p>
        </FlexBox>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero earum
          voluptas reprehenderit in ipsa, assumenda cum et adipisci
          necessitatibus sed accusamus officia dolores vero incidunt! Natus hic
          ad ullam voluptates? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Asperiores facilis similique ad consequuntur eveniet
          non debitis iste! Quae excepturi pariatur, maxime, animi error quod
          maiores culpa deserunt ratione autem vero. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Autem, tempore. Recusandae nesciunt nisi
          minima odio maiores distinctio quod consectetur numquam veniam
          suscipit dolorem illo, sunt, ea architecto assumenda, quidem aut.
        </p>
      </FlexBox>
      <FlexBox direction="column" gap={1} pb={3}>
        {project.steps.map((step, index) => (
          <Collapsible title={step.name} key={step.id}>
            <StepCollapsableContent direction="column" px={2} py={1.5}>
              <ul>
                {step.deliveries.map((delivery, index) => (
                  <li key={Math.random()}>
                    Entrega #{index + 1}: {delivery.date.getUTCDate()}{" "}
                    <Button variant="text" small>
                      <Pencil weight="fill" />
                    </Button>
                  </li>
                ))}
              </ul>
              <Button
                variant="text"
                onClick={() => {
                  addDeliveryToStep(index);
                }}
              >
                Adicionar entrega +
              </Button>
            </StepCollapsableContent>
          </Collapsible>
        ))}
        <AddButton onClick={() => addStepToProject()}>
          <Plus size={24} />
          Adicionar etapa
        </AddButton>
        <FlexBox centralized full gap={4} mt={2}>
          <Button variant="primary">Iniciar Projeto</Button>
        </FlexBox>
      </FlexBox>
    </MarginContainer>
  );
};
