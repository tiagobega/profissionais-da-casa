import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { resetPasswordSchema } from "./validation";
import { Form } from "./style";
import { useUser } from "contexts/User";
import { useNavigate } from "react-router-dom";
import { FC } from "react";

export type FormData = Zod.infer<typeof resetPasswordSchema>;
interface FormResetPasswordProps {
  token: string;
}

export const FormResetPassword: FC<FormResetPasswordProps> = ({ token }) => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onSubmit",
  });
  const { color } = useTheme();
  const navigate = useNavigate();

  const { login } = useUser();

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
      <p>
        Faça o login para acessar os
        <br />
        serviços da Cada Casa
      </p>
      <FlexBox direction="column" gap={1} full my={1}>
        <Input.Text
          type="password"
          label="Nova senha"
          placeholder="Digite a nova senha"
          aria-label="senha"
          error={errors.password}
          {...register("password")}
        />
        <Input.Text
          type="password"
          label="Confirme a nova senha"
          placeholder="Digite novamente a nova senha"
          aria-label="confirme a nova senha"
          error={errors.confirm}
          {...register("confirm")}
        />

        <Button type="submit">Resetar a senha</Button>
      </FlexBox>
    </Form>
  );
};
