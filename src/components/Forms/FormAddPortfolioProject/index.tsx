import Input from "components/Input";
import { useForm } from "react-hook-form";
import { usePortfolioProjectSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";

export interface FormAddPortfolioProjectProps {}

export type FormData = Zod.infer<typeof usePortfolioProjectSchema>;

export const FormAddPortfolioProject: React.FC<
  FormAddPortfolioProjectProps
> = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(usePortfolioProjectSchema),
    mode: "onChange",
  });
  return (
    <form>
      <h2>Adicionar Projeto ao portifólio</h2>
      <Input.Text placeholder="Nome do projeto" {...register("name")} />
      <Input.Area
        placeholder="Descrição do projeto"
        {...register("description")}
      />
      <Button>Enviar</Button>
    </form>
  );
};
