import { CaretLeft, Pen, Plus, Trash } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { Collapsible } from "components/Collapsable";
import { FlexBox } from "components/FlexBox";
import { FormAddBlock } from "components/Forms/FormAddFaqBlock";
import { FormAddFaqQuestion } from "components/Forms/FormAddFaqQuestion";
import { FormEditFaqBlock } from "components/Forms/FormEditFaqBlock";
import { FormEditFaqQuestion } from "components/Forms/FormEditFaqQuestion";
import { Geometry } from "components/Geometry";
import { Loading } from "components/Loading";
import { Modal } from "components/Modal";
import { useApi } from "contexts/User";
import { useEffect, useState } from "react";
import { FaqBlock, FaqQuestion } from "services/User/types";
import { useTheme } from "styled-components";
import {
  CollapsibleInformation,
  FAQContainer,
  InformationContainer,
} from "./styles";
import { ButtonDelete } from "components/ButtonDelete";
import { useNavigate } from "react-router-dom";

type FormList =
  | "addBlock"
  | "addQuestion"
  | "editQuestion"
  | "editBlock"
  | "deleteQuestion"
  | "deleteBlock"
  | null;

export interface FAQPageProps {}
export const FAQPage: React.FC<FAQPageProps> = () => {
  const { color } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<FormList>(null);
  const [isAdm, setIsAdm] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<FaqQuestion | null>(
    null
  );
  const [currentBlock, setCurrentBlock] = useState<FaqBlock | null>(null);

  const { faq, user } = useApi();
  const { me } = user;
  const { getAllBlock, getAllQuestion, deleteBlock, deleteQuestion } = faq;
  const [blocks, setBlocks] = useState<FaqBlock[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [getAllBlock]);

  const getData = async () => {
    const blockList = await getAllBlock();
    console.log(blockList);
    blockList && setBlocks(blockList.faqBlocks);
  };
  useEffect(() => {
    me && setIsAdm(me.profileTypeRel.name == "admin" ? true : false);
  }, [me]);
  useEffect(() => {
    setIsOpen(form != null ? true : false);
  }, [form]);
  useEffect(() => {
    currentQuestion && setForm("editQuestion");
  }, [currentQuestion]);
  useEffect(() => {
    currentBlock && setForm("editBlock");
  }, [currentBlock]);

  const handleClose = () => {
    setIsOpen(false);
    setForm(null);
  };

  const handleDeleteQuestion = async (id: string) => {
    await deleteQuestion({ id });
    getData();
  };
  const handleDeleteBlock = async (id: string) => {
    await deleteBlock({ id });
    getData();
  };

  if (!blocks) return <Loading />;

  const displayForm = () => {
    switch (form) {
      case "addBlock":
        return <FormAddBlock close={handleClose} fetch={getData} />;
        break;
      case "addQuestion":
        return (
          <FormAddFaqQuestion
            blockList={blocks}
            close={handleClose}
            fetch={getData}
          />
        );
        break;
      case "editBlock":
        return (
          currentBlock && (
            <FormEditFaqBlock
              block={currentBlock}
              close={handleClose}
              fetch={getData}
            />
          )
        );
        break;
      case "editQuestion":
        return (
          currentQuestion && (
            <FormEditFaqQuestion
              close={handleClose}
              question={currentQuestion}
              blocks={blocks}
              fetch={getData}
            />
          )
        );
        break;

      default:
        break;
    }
  };

  const selectQuestion = (question: FaqQuestion) => {
    setCurrentQuestion(question);
  };
  const selectBlock = (id: string) => {
    const block = blocks.filter((el) => el.id == id)[0];
    setCurrentBlock(block);
  };

  return (
    <FAQContainer>
      <FlexBox direction="column">
        <Geometry color={color.brand.orange} width={170} triangle angle={270} />
        <Geometry color={color.secondary.green} width={170} angle={0} />
        <Geometry
          color={color.brand.yellowLight}
          width={170}
          triangle
          angle={0}
        />
        <Geometry color={color.brand.orange} width={170} triangle angle={270} />
      </FlexBox>
      <InformationContainer direction="column" gap={2} alignItems="flex-start">
        <FlexBox>
          <Button variant="text" onClick={() => navigate(-1)}>
            <CaretLeft weight="fill" /> Voltar
          </Button>
        </FlexBox>
        <h2>FAQ</h2>

        <div className="questions">
          {blocks.map((item) => (
            <Collapsible
              title={item.name}
              variant="faq"
              key={item.id}
              actionButton={
                <>
                  {isAdm && (
                    <FlexBox gap={2}>
                      <Button
                        variant="text"
                        small
                        color="white"
                        onClick={() => selectBlock(item.id)}
                      >
                        <Pen />
                      </Button>
                      <ButtonDelete
                        deleteFn={() => handleDeleteBlock(item.id)}
                        name={item.name}
                        variant="text"
                      >
                        <Trash />
                      </ButtonDelete>
                    </FlexBox>
                  )}
                </>
              }
            >
              <CollapsibleInformation>
                {item.faqQuestions.map((el, index) => (
                  <div className="question-item" key={el.id}>
                    <FlexBox gap={2}>
                      <FlexBox
                        full
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <h4>{el.name}</h4>
                      </FlexBox>

                      {isAdm && (
                        <>
                          <Button
                            variant="text"
                            onClick={() => selectQuestion(el)}
                          >
                            <Pen />
                          </Button>
                          <ButtonDelete
                            deleteFn={() => handleDeleteQuestion(el.id)}
                            name={item.name}
                            variant="text"
                          >
                            <Trash />
                          </ButtonDelete>
                        </>
                      )}
                    </FlexBox>
                    <p>{el.description}</p>
                    {index <= item.faqQuestions.length - 2 && <hr />}
                  </div>
                ))}
              </CollapsibleInformation>
            </Collapsible>
          ))}
        </div>
        <FlexBox full gap={2} direction="column">
          {!isAdm ? (
            <div>
              <strong>Ficou com alguma dúvida?</strong>
              <p>Mande um email para contato@vivacadacasa.com.br</p>
            </div>
          ) : (
            <FlexBox full centralized gap={2}>
              <Button onClick={() => setForm("addBlock")}>
                <Plus /> Adicionar Categoria
              </Button>
              <Button onClick={() => setForm("addQuestion")}>
                <Plus />
                Adicionar Pergunta
              </Button>
            </FlexBox>
          )}
        </FlexBox>
      </InformationContainer>
      <FlexBox direction="column">
        <Geometry color={color.brand.yellowLight} width={170} angle={0} />
        <Geometry
          color={color.secondary.green}
          width={170}
          triangle
          angle={0}
        />
        <Geometry color={color.brand.orange} width={170} triangle angle={270} />
        <Geometry
          color={color.brand.yellowLight}
          width={170}
          triangle
          angle={180}
        />
      </FlexBox>
      <Modal isOpened={isOpen} onClose={() => setForm(null)}>
        {displayForm()}
      </Modal>
    </FAQContainer>
  );
};
