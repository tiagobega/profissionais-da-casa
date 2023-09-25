import { zodResolver } from "@hookform/resolvers/zod";
import { Category, Question } from "Models/faq";
import { NameValueType } from "Models/models";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { faqQuestionSchema } from "./validation";
import { useEffect } from "react";
import { FaqBlock, FaqQuestion } from "services/User/types";
import { useApi } from "contexts/User";

export type FormEditFaqQuestion = Zod.infer<typeof faqQuestionSchema>;

interface FormEditFaqQuestionProps {
  close: () => void;
  question: FaqQuestion;
  blocks: FaqBlock[];
  fetch: () => void;
}

export const FormEditFaqQuestion: React.FC<FormEditFaqQuestionProps> = ({
  close,
  question,
  blocks,
  fetch,
}) => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormEditFaqQuestion>({
    resolver: zodResolver(faqQuestionSchema),
    mode: "onSubmit",
  });
  const { faq } = useApi();
  const { editQuestion } = faq;

  useEffect(() => {
    setValue("category", question.blockId);
    setValue("title", question.name);
    setValue("description", question.description);
  }, []);

  const categoryOptions: NameValueType[] = blocks.map((cat) => {
    return { name: cat.name, value: cat.id };
  });

  const onSubmit = async (data: FormEditFaqQuestion) => {
    await editQuestion({
      id: question.id,
      newBlockId: data.category,
      currentBlockId: question.blockId,
      description: data.description,
      newName: data.title,
      currentName: question.name,
    });
    reset();
    fetch();
    close();
  };

  return (
    <form
      onSubmit={handleSubmit((e) => {
        console.log(e);
        return onSubmit(e);
      })}
      style={{ width: "100%" }}
    >
      <FlexBox direction="column" gap={1.5} full>
        <h2>Editar pergunta</h2>
        <Input.Text
          type="text"
          label="Pergunta"
          error={errors.title}
          {...register("title")}
        />
        <Input.Select
          label="Categoria"
          error={errors.title}
          options={categoryOptions}
          {...register("category")}
        />
        <Input.Area
          label="Resposta"
          error={errors.description}
          {...register("description")}
          rows={5}
        />

        <Button type="submit" full width={5}>
          Atualizar pergunta
        </Button>
      </FlexBox>
    </form>
  );
};
