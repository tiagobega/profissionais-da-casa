import { zodResolver } from "@hookform/resolvers/zod";
import { Category, Question } from "Models/faq";
import { NameValueType } from "Models/models";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { faqBlockSchema } from "./validation";
import { useEffect } from "react";

export type FormEditFaqBlock = Zod.infer<typeof faqBlockSchema>;

interface FormEditFaqBlockProps {
  category: Category;
}

export const FormEditFaqBlock: React.FC<FormEditFaqBlockProps> = ({
  category,
}) => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormEditFaqBlock>({
    resolver: zodResolver(faqBlockSchema),
    mode: "onSubmit",
  });

  useEffect(() => {
    setValue("title", category.title);
  }, []);

  const onSubmit = (data: FormEditFaqBlock) => {
    console.log(data);

    window.alert(JSON.stringify(data));
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
