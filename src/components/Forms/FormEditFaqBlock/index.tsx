import { zodResolver } from "@hookform/resolvers/zod";
import { Category, Question } from "Models/faq";
import { NameValueType } from "Models/models";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { faqBlockSchema } from "./validation";
import { useEffect } from "react";
import { FaqBlock } from "services/User/types";
import { useApi } from "contexts/User";

export type FormEditFaqBlock = Zod.infer<typeof faqBlockSchema>;

interface FormEditFaqBlockProps {
  block: FaqBlock;
  close: () => void;
  fetch: () => void;
}

export const FormEditFaqBlock: React.FC<FormEditFaqBlockProps> = ({
  block,
  close,
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
  } = useForm<FormEditFaqBlock>({
    resolver: zodResolver(faqBlockSchema),
    mode: "onSubmit",
  });
  const { faq } = useApi();
  const { editBlock } = faq;

  useEffect(() => {
    setValue("title", block.name);
  }, []);

  const onSubmit = async (data: FormEditFaqBlock) => {
    await editBlock({
      id: block.id,
      currentName: block.name,
      newName: data.title,
    });
    reset();
    close();
    fetch();
  };

  return (
    <form
      onSubmit={handleSubmit((e) => {
        return onSubmit(e);
      })}
      style={{ width: "100%" }}
    >
      <FlexBox direction="column" gap={1.5} full>
        <h2>Editar uma categoria de perguntas</h2>
        <Input.Text
          type="text"
          label="Nome do bloco"
          error={errors.title}
          {...register("title")}
        />

        <Button type="submit" full width={5}>
          Atualizar bloco
        </Button>
      </FlexBox>
    </form>
  );
};
