import { zodResolver } from "@hookform/resolvers/zod";
import { Category } from "Models/faq";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { faqBlockSchema } from "./validation";

export type FormAddBlock = Zod.infer<typeof faqBlockSchema>;

export const FormAddBlock: React.FC = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormAddBlock>({
    resolver: zodResolver(faqBlockSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: FormAddBlock) => {
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
        <h2>Adicionar um novo bloco</h2>
        <Input.Text
          type="text"
          label="Título do bloco"
          error={errors.title}
          {...register("title")}
        />
        <Button type="submit" full width={5}>
          Adicionar bloco
        </Button>
      </FlexBox>
    </form>
  );
};
