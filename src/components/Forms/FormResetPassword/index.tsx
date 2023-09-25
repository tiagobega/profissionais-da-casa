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
import { CaretLeft } from "@phosphor-icons/react";

export type FormData = Zod.infer<typeof resetPasswordSchema>;
interface FormResetPasswordProps {
  email: string;
  back: () => void;
  backToLogin: () => void;
}

export const FormResetPassword: FC<FormResetPasswordProps> = ({
  email,
  back,
  backToLogin,
}) => {
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

  const { resetPassword, forgotPassword } = useUser();

  const resendEmail = async () => {
    await forgotPassword({ email });
  };

  const onSubmit = async (data: FormData) => {
    const payload = { ...data, email };
    await resetPassword(payload);
    backToLogin();
  };

  return (
    <Form
      onSubmit={handleSubmit((e) => {
        console.log(e);
        return onSubmit(e);
      })}
    >
      <h3>Defina sua nova senha</h3>
      <FlexBox direction="column" gap={1} full my={1}>
        <Input.Text
          type="text"
          label="Código"
          placeholder="Digite o código recebido via e-mail"
          aria-label="Código"
          error={errors.code}
          {...register("code")}
        />
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
          error={errors.passwordConfirmation}
          {...register("passwordConfirmation")}
        />
        <Button type="submit">Resetar a senha</Button>

        <Button type="button" onClick={resendEmail} variant="text">
          <CaretLeft weight="fill" />
          Clique aqui para reenviar o e-mail.
        </Button>
      </FlexBox>
    </Form>
  );
};
