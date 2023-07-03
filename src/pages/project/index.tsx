import { CaretLeft, Pencil, Plus } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { Collapsible } from "components/Collapsable";
import { FlexBox } from "components/FlexBox";
import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { MarginContainer } from "styles/commonComponents";
import { AddButton, StageCollapsableContent } from "./styles";
import { Modal } from "components/Modal";
import { FormAddDelivery } from "components/Forms/FormAddDelivery";
import { FormAddStage } from "components/Forms/FormAddStage";
import Input from "components/Input";
import { useNavigate } from "react-router-dom";

export interface ProjectPageProps {
  status: "not-started" | "ongoing" | "complete";
}

export type DeliveryType = {
  id: string;
  date: Date;
  delivered: boolean;
};
export type StageType = {
  name: string;
  id: string;
  deliveries: DeliveryType[];
};

export type ProjectManagementType = {
  projectId: string;
  stages: StageType[];
};

const initialProject: ProjectManagementType = {
  projectId: "163-4774-233",
  stages: [
    {
      id: "1234",
      name: "Vistoria técnica inicial",
      deliveries: [{ id: "1234555", date: new Date(), delivered: false }],
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

export const ProjectPage: React.FC<ProjectPageProps> = ({
  status = "ongoing",
}) => {
  const [project, setProject] = useState<ProjectManagementType>(initialProject);
  const [modalEntrega, setModalEntrega] = useState(false);
  const [modalStage, setModalStage] = useState(false);
  const [currentStage, setCurrentStage] = useState<StageType | null>(null);
  const navigate = useNavigate();

  const addDeliveryToStage = (index: number) => {
    const updatedProject: ProjectManagementType = project;
    updatedProject.stages[index].deliveries.push({
      id: Math.random().toString(),
      date: new Date(),
      delivered: true,
    });
    console.log(updatedProject);
    setProject(updatedProject);
  };

  const addStageToProject = () => {
    const updatedProject: ProjectManagementType = project;
    updatedProject.stages.push({
      id: Math.random().toString(),
      name: "Nova etapa do projeto",
      deliveries: [],
    });
    console.log(updatedProject);
    setProject(updatedProject);
  };

  useEffect(() => {
    setModalEntrega(currentStage == null ? false : true);
  }, [currentStage]);

  const handleCloseModal = () => {
    setCurrentStage(null);
  };

  const title = () => {
    switch (status) {
      case "not-started":
        return "Novo Projeto";
        break;
      case "complete":
        return "Visão geral";
        break;
      case "ongoing":
        return "Acompanhar Projeto";
        break;

      default:
        return "Visão geral";
        break;
    }
  };

  return (
    <>
      <MarginContainer>
        <header>
          <FlexBox justifyContent="space-between" py={2} alignItems="center">
            <Button variant="text">
              <CaretLeft />
              Voltar
            </Button>
            <h2>{title()}</h2>
            <Button variant="outline" onClick={() => navigate("/my-projects")}>
              Criar Projeto
            </Button>
          </FlexBox>
        </header>
        <FlexBox full gap={4} pb={3}>
          <FlexBox direction="column" gap={0.25}>
            <h3>Angela Maia da Silva</h3>
            <p>(11)98765-4321</p>
            <p>angelamsilva@bol.com.br</p>
          </FlexBox>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            earum voluptas reprehenderit in ipsa, assumenda cum et adipisci
            necessitatibus sed accusamus officia dolores vero incidunt! Natus
            hic ad ullam voluptates? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores facilis similique ad consequuntur
            eveniet non debitis iste! Quae excepturi pariatur, maxime, animi
            error quod maiores culpa deserunt ratione autem vero. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Autem, tempore.
            Recusandae nesciunt nisi minima odio maiores distinctio quod
            consectetur numquam veniam suscipit dolorem illo, sunt, ea
            architecto assumenda, quidem aut.
          </p>
        </FlexBox>
        <FlexBox direction="column" gap={1} pb={3}>
          {project.stages.map((stage, index) => (
            <Collapsible title={stage.name} key={stage.id}>
              <StageCollapsableContent direction="column" px={2} py={1.5}>
                <ul>
                  {stage.deliveries.map((delivery, index) => (
                    <li key={Math.random()}>
                      <FlexBox alignItems="flex-end" gap={1}>
                        {status == "ongoing" ? (
                          <Input.Checkbox
                            label={`Entrega #${
                              index + 1
                            }: ${delivery.date.getUTCDate()}`}
                            checked={delivery.delivered}
                            disabled={delivery.delivered}
                          />
                        ) : (
                          <p>
                            Entrega #{index + 1}:{delivery.date.getUTCDate()}
                          </p>
                        )}
                      </FlexBox>
                    </li>
                  ))}
                </ul>
                {status != "complete" && (
                  <Button
                    variant="text"
                    onClick={() => {
                      setCurrentStage(stage);
                    }}
                  >
                    Adicionar entrega +
                  </Button>
                )}
              </StageCollapsableContent>
            </Collapsible>
          ))}
          {status == "not-started" && (
            <AddButton onClick={() => setModalStage(true)}>
              <Plus size={24} />
              Adicionar etapa
            </AddButton>
          )}
          {status == "not-started" && (
            <FlexBox centralized full gap={4} mt={2}>
              <Button variant="primary">Iniciar Projeto</Button>
            </FlexBox>
          )}
          {status == "ongoing" && (
            <FlexBox centralized full gap={2} mt={2}>
              <Button variant="primary">Salvar Entregas</Button>

              <Button variant="primary" background="white">
                Finalizar Projeto
              </Button>
            </FlexBox>
          )}
        </FlexBox>
      </MarginContainer>
      {(status == "not-started" || status == "ongoing") && (
        <Modal isOpened={modalEntrega} onClose={handleCloseModal} small>
          <h2>Adicionar Entrega*</h2>
          <FlexBox
            direction="column"
            alignItems="flex-start"
            full
            mt={2}
            mb={1}
          >
            <p>Etapa:</p>
            <h3>{currentStage?.name}</h3>
          </FlexBox>
          <FormAddDelivery />
        </Modal>
      )}
      {status == "not-started" && (
        <Modal isOpened={modalStage} onClose={() => setModalStage(false)} small>
          <h2>Adicionar Etapa</h2>

          <FormAddStage />
        </Modal>
      )}
      {status == "ongoing" && (
        <Modal isOpened={modalStage} onClose={() => setModalStage(false)} small>
          <h2>Finalizar projeto</h2>
          <FlexBox>
            <FlexBox centralized>
              <p>
                <strong>Neusa dos Santos Neto</strong>
              </p>
              <p>Data: {Date.now()}</p>
            </FlexBox>
            <FlexBox centralized my={2}>
              <p style={{ textAlign: "center" }}>
                Tem certeza que deseja finalizar o projeto?
              </p>
              <p style={{ textAlign: "center" }}>
                Não será mais possível adicionar etapas ou entregas.
              </p>
              <p style={{ textAlign: "center" }}>
                Os projetos finalizados não são editáveis
              </p>
            </FlexBox>
            <Button background="white">Finalizar</Button>
          </FlexBox>
        </Modal>
      )}
    </>
  );
};
