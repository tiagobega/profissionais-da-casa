import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Question } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { Tooltip } from "components/Tooltip";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Form, StyledTooltip } from "./style";
import { resendSchema } from "./validation";
import { FC } from "react";

export type FormData = Zod.infer<typeof resendSchema>;

interface FormRegisterUserProps {}

export const FormResendEmail: FC<FormRegisterUserProps> = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(resendSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: FormData) => {
    window.alert("email resent!");
  };

  return (
    <Form
      onSubmit={handleSubmit((e) => {
        return onSubmit(e);
      })}
    >
      <strong>Não recebeu o e-mail?</strong>
      <p>
        Insira seu e-mail cadastrado
        <br />
        que enviaremos novamente.
      </p>
      <p>* Não se esqueça de checar o lixo eletrônico</p>
      <FlexBox direction="column" gap={1} full mt={1} mb={1}>
        <FlexBox gap={1} alignItems="flex-end">
          <Input.Text
            type="email"
            aria-label="email"
            placeholder="Email"
            {...register("email", { required: true })}
            error={errors.email}
          />
        </FlexBox>
        <Button type="submit">Reenviar</Button>
      </FlexBox>
    </Form>
  );
};
