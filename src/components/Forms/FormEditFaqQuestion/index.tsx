import { zodResolver } from "@hookform/resolvers/zod";
import { Category, Question } from "Models/faq";
import { NameValueType } from "Models/models";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { faqQuestionSchema } from "./validation";
import { useEffect } from "react";

export type FormEditFaqQuestion = Zod.infer<typeof faqQuestionSchema>;

interface FormEditFaqQuestionProps {
  question: Question;
  categoriesList: Category[];
}

export const FormEditFaqQuestion: React.FC<FormEditFaqQuestionProps> = ({
  question,
  categoriesList,
}) => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormEditFaqQuestion>({
    resolver: zodResolver(faqQuestionSchema),
    mode: "onSubmit",
  });

  useEffect(() => {
    setValue("category", question.category);
    setValue("title", question.title);
    setValue("description", question.description);
  }, []);

  const categoryOptions: NameValueType[] = categoriesList.map((cat) => {
    return { name: cat.title, value: cat.id };
  });

  const onSubmit = (data: FormEditFaqQuestion) => {
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
