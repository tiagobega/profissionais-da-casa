import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useUser } from "contexts/User";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { Form } from "./style";
import { changePasswordSchema } from "./validation";

export type FormData = Zod.infer<typeof changePasswordSchema>;
interface FormChangePasswordProps {}

export const FormChangePassword: FC<FormChangePasswordProps> = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(changePasswordSchema),
    mode: "onSubmit",
  });
  const { color } = useTheme();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <Form
      onSubmit={handleSubmit((e) => {
        console.log(e);
        return onSubmit(e);
      })}
    >
      <h3>Troca de senha</h3>
      <FlexBox direction="column" gap={1} full my={1}>
        <Input.Text
          type="password"
          label="Senha atual"
          placeholder="Digite a senha atual"
          aria-label="senha"
          error={errors.currentPassword}
          {...register("currentPassword")}
        />
        <Input.Text
          type="password"
          label="Nova senha"
          placeholder="Digite a nova senha"
          aria-label="senha"
          error={errors.newPassword}
          {...register("newPassword")}
        />
        <Input.Text
          type="password"
          label="Confirme a nova senha"
          placeholder="Digite novamente a nova senha"
          aria-label="confirme a nova senha"
          error={errors.confirm}
          {...register("confirm")}
        />

        <Button type="submit">Confirmar</Button>
      </FlexBox>
    </Form>
  );
};
