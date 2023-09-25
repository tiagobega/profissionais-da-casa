import { zodResolver } from "@hookform/resolvers/zod";
import { CaretLeft } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useUser } from "contexts/User";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Form } from "./style";
import { resetPasswordSchema } from "./validation";

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

  const { resetPassword } = useUser();

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

        <Button type="button" onClick={back} variant="text">
          <CaretLeft weight="fill" />
          Não recebeu o email? Voltar.
        </Button>
      </FlexBox>
    </Form>
  );
};
