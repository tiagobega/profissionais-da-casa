import { zodResolver } from "@hookform/resolvers/zod";
import { Category } from "Models/faq";
import { NameValueType } from "Models/models";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { faqQuestionSchema } from "./validation";
import { useApi } from "contexts/User";
import { Loading } from "components/Loading";
import { useEffect, useState } from "react";
import { AllFaqBlockResponse, FaqBlock } from "services/User/types";

export type FormAddFaqQuestion = Zod.infer<typeof faqQuestionSchema>;

interface FormAddFaqQuestionProps {
  close: () => void;
  blockList: FaqBlock[];
  fetch: () => void;
}

export const FormAddFaqQuestion: React.FC<FormAddFaqQuestionProps> = ({
  close,
  blockList,
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
  } = useForm<FormAddFaqQuestion>({
    resolver: zodResolver(faqQuestionSchema),
    mode: "onSubmit",
  });
  const { faq } = useApi();
  const { createQuestion } = faq;
  const [blocks, setBlocks] = useState<FaqBlock[]>(blockList);

  const onSubmit = async (data: FormAddFaqQuestion) => {
    await createQuestion({
      name: data.title,
      description: data.description,
      blockId: data.category,
    });
    reset();
    close();
    fetch();
  };

  const categoryOptions: NameValueType[] = blocks?.map((cat) => {
    return { name: cat.name, value: cat.id };
  });

  return (
    <form
      onSubmit={handleSubmit((e) => {
        return onSubmit(e);
      })}
      style={{ width: "100%" }}
    >
      <FlexBox direction="column" gap={1.5} full>
        <h2>Adicionar uma nova questão</h2>
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
          Adicionar questão
        </Button>
      </FlexBox>
    </form>
  );
};
