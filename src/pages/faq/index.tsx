import { FlexBox } from "components/FlexBox";
import {
  CollapsibleInformation,
  FAQContainer,
  InformationContainer,
} from "./styles";
import { Geometry } from "components/Geometry";
import { Button } from "components/Button";
import { useTheme } from "styled-components";
import { Collapsible } from "components/Collapsable";
import { useEffect, useState } from "react";
import { Modal } from "components/Modal";
import { Pen, Plus } from "@phosphor-icons/react";
import { Loading } from "components/Loading";
import { FormAddFaqQuestion } from "components/Forms/FormAddFaqQuestion";
import { Category, Question } from "Models/faq";
import { FormAddBlock } from "components/Forms/FormAddFaqBlock";
import { FormEditFaqBlock } from "components/Forms/FormEditFaqBlock";
import { FormEditFaqQuestion } from "components/Forms/FormEditFaqQuestion";

const questions: Question[] = [
  {
    id: "1",
    category: "Categoria A",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aspernatur tempora debitis corrupti dignissimos! Odio autem illo sunt tempore quasi deserunt voluptas libero molestiae sequi possimus corrupti culpa, quam blanditiis! Ut numquam corrupti possimus, porro distinctio doloribus expedita quasi sed cupiditate nisi id, obcaecati labore quia fugiat at ullam earum, inventore perspiciatis! Doloremque repellendus esse et aperiam suscipit magnam! Numquam!",
  },
  {
    id: "2",
    category: "Categoria A",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aspernatur tempora debitis corrupti dignissimos! Odio autem illo sunt tempore quasi deserunt voluptas libero molestiae sequi possimus corrupti culpa, quam blanditiis! Ut numquam corrupti possimus, porro distinctio doloribus expedita quasi sed cupiditate nisi id, obcaecati labore quia fugiat at ullam earum, inventore perspiciatis! Doloremque repellendus esse et aperiam suscipit magnam! Numquam!",
  },
  {
    id: "3",
    category: "Categoria A",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aspernatur tempora debitis corrupti dignissimos! Odio autem illo sunt tempore quasi deserunt voluptas libero molestiae sequi possimus corrupti culpa, quam blanditiis! Ut numquam corrupti possimus, porro distinctio doloribus expedita quasi sed cupiditate nisi id, obcaecati labore quia fugiat at ullam earum, inventore perspiciatis! Doloremque repellendus esse et aperiam suscipit magnam! Numquam!",
  },
  {
    id: "4",
    category: "Categoria B",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aspernatur tempora debitis corrupti dignissimos! Odio autem illo sunt tempore quasi deserunt voluptas libero molestiae sequi possimus corrupti culpa, quam blanditiis! Ut numquam corrupti possimus, porro distinctio doloribus expedita quasi sed cupiditate nisi id, obcaecati labore quia fugiat at ullam earum, inventore perspiciatis! Doloremque repellendus esse et aperiam suscipit magnam! Numquam!",
  },
  {
    id: "5",
    category: "Categoria B",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aspernatur tempora debitis corrupti dignissimos! Odio autem illo sunt tempore quasi deserunt voluptas libero molestiae sequi possimus corrupti culpa, quam blanditiis! Ut numquam corrupti possimus, porro distinctio doloribus expedita quasi sed cupiditate nisi id, obcaecati labore quia fugiat at ullam earum, inventore perspiciatis! Doloremque repellendus esse et aperiam suscipit magnam! Numquam!",
  },
  {
    id: "6",
    category: "Categoria B",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aspernatur tempora debitis corrupti dignissimos! Odio autem illo sunt tempore quasi deserunt voluptas libero molestiae sequi possimus corrupti culpa, quam blanditiis! Ut numquam corrupti possimus, porro distinctio doloribus expedita quasi sed cupiditate nisi id, obcaecati labore quia fugiat at ullam earum, inventore perspiciatis! Doloremque repellendus esse et aperiam suscipit magnam! Numquam!",
  },
  {
    id: "7",
    category: "Categoria C",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aspernatur tempora debitis corrupti dignissimos! Odio autem illo sunt tempore quasi deserunt voluptas libero molestiae sequi possimus corrupti culpa, quam blanditiis! Ut numquam corrupti possimus, porro distinctio doloribus expedita quasi sed cupiditate nisi id, obcaecati labore quia fugiat at ullam earum, inventore perspiciatis! Doloremque repellendus esse et aperiam suscipit magnam! Numquam!",
  },
];

const categoryListMock: Category[] = [
  {
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    id: "uwghueh",
    title: "Categoria A",
  },
  {
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    id: "uwghueh",
    title: "Categoria B",
  },
  {
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    id: "uwghueh",
    title: "Categoria C",
  },
];

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
  const [isAdm, setIsAdm] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);

  useEffect(() => {
    setIsOpen(form != null ? true : false);
  }, [form]);
  useEffect(() => {
    currentQuestion && setForm("editQuestion");
  }, [currentQuestion]);
  useEffect(() => {
    currentCategory && setForm("editBlock");
  }, [currentCategory]);

  const categoryList = () => {
    const list: string[] = new Array();
    questions.forEach((item) => {
      if (!list.includes(item.category)) {
        list.push(item.category);
      } else {
        return;
      }
    });
    return list;
  };

  const filterByCategory = (category: string) => {
    return questions.filter((el) => el.category === category);
  };

  const displayForm = () => {
    switch (form) {
      case "addBlock":
        return <FormAddBlock />;
        break;
      case "addQuestion":
        return <FormAddFaqQuestion categoriesList={categoryListMock} />;
        break;
      case "editBlock":
        return (
          currentCategory && <FormEditFaqBlock category={currentCategory} />
        );
        break;
      case "editQuestion":
        return (
          currentQuestion && (
            <FormEditFaqQuestion
              question={currentQuestion}
              categoriesList={categoryListMock}
            />
          )
        );
        break;

      default:
        break;
    }
  };

  const selectQuestion = (id: string) => {
    const question = questions.filter((el) => el.id == id)[0];
    setCurrentQuestion(question);
  };
  const selectCategory = (id: string) => {
    const category = categoryListMock.filter((el) => el.id == id)[0];
    setCurrentCategory(category);
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
        <h2>FAQ</h2>

        <div className="questions">
          {categoryListMock.map((item) => (
            <Collapsible
              title={item.title}
              variant="faq"
              key={item.id}
              actionButton={
                <FlexBox gap={2}>
                  <Button
                    variant="text"
                    small
                    color="white"
                    onClick={() => selectCategory(item.id)}
                  >
                    <Pen />
                  </Button>
                </FlexBox>
              }
            >
              <CollapsibleInformation>
                {filterByCategory(item.title).map((el, index) => (
                  <div className="question-item" key={el.id}>
                    <FlexBox gap={2}>
                      <h4>{el.title}</h4>
                      <Button
                        variant="text"
                        onClick={() => selectQuestion(el.id)}
                      >
                        <Pen />
                      </Button>
                    </FlexBox>
                    <p>{el.description}</p>
                    {index <= filterByCategory(item.title).length - 2 && <hr />}
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
