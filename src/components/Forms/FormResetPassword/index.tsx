import { zodResolver } from "@hookform/resolvers/zod";
import { CaretLeft, Check, CheckCircle } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useUser } from "contexts/User";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "./style";
import { resetPasswordSchema } from "./validation";
import { Modal } from "components/Modal";

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
  const [modal, setModal] = useState(false);

  const resendEmail = async () => {
    await forgotPassword({ email });
  };

  const onSubmit = async (data: FormData) => {
    const payload = { ...data, email };
    await resetPassword(payload);
    setModal(true);
  };

  return (
    <>
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
      <Modal isOpened={modal} onClose={() => setModal(false)}>
        <FlexBox direction="column" gap={2} alignItems="center" mt={4}>
          <FlexBox gap={2} alignItems="center">
            <CheckCircle size={32} />
            <h3>Sua senha foi alterada com sucesso</h3>
          </FlexBox>
          <Button onClick={backToLogin}>Voltar para login!</Button>
        </FlexBox>
      </Modal>
    </>
  );
};
