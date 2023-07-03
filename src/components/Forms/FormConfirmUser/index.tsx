import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Question } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { Tooltip } from "components/Tooltip";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Form, StyledTooltip } from "./style";
import { codeSchema } from "./validation";
import { FC } from "react";

export type FormData = Zod.infer<typeof codeSchema>;

interface FormRegisterUserProps {
  toConfirm: () => void;
}

export const FormConfirmUser: FC<FormRegisterUserProps> = ({ toConfirm }) => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(codeSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: FormData) => {
    toConfirm();
  };

  return (
    <Form
      onSubmit={handleSubmit((e) => {
        return onSubmit(e);
      })}
    >
      <strong>Validação por código</strong>
      <p>
        Insira o código enviado para
        <br />o seu telefone.
      </p>
      <FlexBox direction="column" gap={1} full mt={2} mb={1}>
        <FlexBox gap={1} alignItems="flex-end">
          <Input.Text
            aria-label="código enviado"
            placeholder="_____"
            {...register("code", { required: true })}
            error={errors.code}
          />
        </FlexBox>
        <Button type="button" variant="text">
          Reenviar código
        </Button>
        <Button type="submit">Confirmar</Button>
      </FlexBox>
    </Form>
  );
};
