import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { forgotSchema } from "./validation";
import { Form } from "./style";
import { FC, useEffect } from "react";

export type FormData = Zod.infer<typeof forgotSchema>;

interface FormForgotPasswordProps {
  email: string | null;
  next: (email: string) => void;
}

export const FormForgotPassword: FC<FormForgotPasswordProps> = ({
  next,
  email: stateEmail,
}) => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(forgotSchema),
    mode: "onSubmit",
  });
  const { color } = useTheme();

  const onSubmit = (data: FormData) => {
    console.log(data);

    window.alert(JSON.stringify(data));
    next(data.email);
  };

  useEffect(() => {
    stateEmail && setValue("email", stateEmail);
  });

  return (
    <Form
      onSubmit={handleSubmit((e) => {
        console.log(e);
        return onSubmit(e);
      })}
    >
      <strong>Esqueceu a senha? Sem problemas!</strong>
      <p>
        Forneça um email, vamos enviar
        <br />
        instruções para redefinir a sua senha
      </p>
      <FlexBox direction="column" gap={1} full mt={1} mb={3.75}>
        <Input.Text
          type="email"
          placeholder="Email"
          aria-label="Email"
          error={errors.email}
          {...register("email")}
        />

        <Button type="submit">Enviar</Button>
      </FlexBox>
    </Form>
  );
};
