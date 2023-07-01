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

export type FormData = Zod.infer<typeof accountSchema>;

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
    const path = `/register/${data.type}`;
    data.type != null
      ? navigate(path)
      : window.alert("Selecione uma opção antes de continuar");
  };

  const accountOptions = [
    { label: "Me tornar um Profissional da Casa", value: "professional" },
    { label: "Utilizar os serviços da Cada Casa", value: "customer" },
  ];

  return (
    <Form
      onSubmit={handleSubmit((e) => {
        return onSubmit(e);
      })}
    >
      <strong>Crie sua conta Cada Casa!</strong>
      <p>
        Tenha acesso a diversas soluções
        <br />
        para reformas.
      </p>
      <FlexBox direction="column" gap={1} full mt={2} mb={1}>
        <FlexBox gap={1} alignItems="flex-end">
          <Input.Radio
            direction="column"
            groupLegend="Quero criar uma conta para"
            options={accountOptions}
            groupName="account-option"
            bold
            {...register("type", { required: true })}
            error={errors.type}
          />
          <FlexBox gap={1.4} direction="column" mb={0.2}>
            <Tooltip
              maxWidth={200}
              content={
                <StyledTooltip full direction="column" gap={1}>
                  <strong>Profissional da Casa</strong>
                  <ul className="tooltip-list">
                    <li>
                      <FlexBox full gap={0.5}>
                        <div className="icon-div">
                          <Check size={"1rem"} weight="bold" />
                        </div>
                        <p>
                          Encontrar arquitetos ou engenheiros pelo Profissionais
                          da Casa
                        </p>
                      </FlexBox>
                    </li>
                    <li>
                      <FlexBox full gap={0.5}>
                        <div className="icon-div">
                          <Check size={"1rem"} weight="bold" />
                        </div>
                        <p>
                          Expor o seu trabalho como um arquiteto ou engenheiro
                        </p>
                      </FlexBox>
                    </li>
                  </ul>
                </StyledTooltip>
              }
              trigger={<Question size={"1.25rem"} weight="bold" />}
            />
            <Tooltip
              maxWidth={200}
              content={
                <StyledTooltip full direction="column" gap={1}>
                  <strong>Conta de usuário</strong>
                  <ul className="tooltip-list">
                    <li>
                      <FlexBox full gap={0.5}>
                        <div className="icon-div">
                          <Check size={"1rem"} weight="bold" />
                        </div>
                        <p>
                          Encontrar arquitetos ou engenheiros pelo Profissionais
                          da Casa
                        </p>
                      </FlexBox>
                    </li>
                  </ul>
                </StyledTooltip>
              }
              trigger={<Question size={"1.25rem"} weight="bold" />}
            />
          </FlexBox>
        </FlexBox>
        <Button type="submit">Continuar</Button>
      </FlexBox>
    </Form>
  );
};
