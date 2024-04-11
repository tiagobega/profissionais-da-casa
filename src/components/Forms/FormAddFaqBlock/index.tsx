import { zodResolver } from "@hookform/resolvers/zod";
import { Category } from "Models/faq";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { faqBlockSchema } from "./validation";
import { useApi } from "contexts/User";

export type FormAddBlock = Zod.infer<typeof faqBlockSchema>;
interface FormAddBlockProps {
  close: () => void;
  fetch: () => void;
}

export const FormAddBlock: React.FC<FormAddBlockProps> = ({ close, fetch }) => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormAddBlock>({
    resolver: zodResolver(faqBlockSchema),
    mode: "onSubmit",
  });
  const { faq } = useApi();
  const { createBlock } = faq;

  const onSubmit = async (data: FormAddBlock) => {
    await createBlock({ name: data.title });
    reset();
    fetch();
    close();
  };

  return (
    <form
      onSubmit={handleSubmit((e) => {
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
