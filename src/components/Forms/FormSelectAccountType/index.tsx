import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Question } from "@phosphor-icons/react";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { Tooltip } from "components/Tooltip";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Form, StyledTooltip } from "./style";
import { accountSchema } from "./validation";
import ReactGA from "react-ga4";

export type FormData = Zod.infer<typeof accountSchema>;

const accountOptions = [
  { label: "Me tornar um Profissional da Casa", value: "professional" },
  { label: "Utilizar os serviços da Cada Casa", value: "customer" },
];

export const FormAccountType = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(accountSchema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    ReactGA.event(
      {
        action: "click",
        category: "register_click",
        label: `register_button_${data.type}`,
      },
      {
        type: data.type,
      }
    );

    const path = `/register/${data.type}`;
    data.type != null
      ? navigate(path)
      : window.alert("Selecione uma opção antes de continuar");
  };

  return (
    <Form
      onSubmit={handleSubmit((e) => {
        return onSubmit(e);
      })}
    >
      <p>
        <strong>Crie sua conta Cada Casa!</strong>
      </p>
      <p>
        Tenha acesso a diversas soluções
        <br />
        para reformas.
      </p>
      <FlexBox
        direction="column"
        gap={1}
        full
        mt={2}
        mb={1}
        alignItems="center"
        media={{
          lg: {
            alignItems: "flex-start",
          },
        }}
      >
        <Input.Radio
          direction="column"
          groupLegend="Quero criar uma conta para"
          options={accountOptions}
          groupName="account-option"
          bold
          {...register("type", { required: true })}
          error={errors.type}
        />
        <Button type="submit">Continuar</Button>
      </FlexBox>
    </Form>
  );
};
