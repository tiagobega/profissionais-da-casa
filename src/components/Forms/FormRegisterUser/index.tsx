import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { registerUserSchema } from "./validation";
import { Form, StyledTooltip } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "components/Tooltip";
import { Question } from "@phosphor-icons/react";
import { FC } from "react";
import { useUser } from "contexts/User";

export type FormData = Zod.infer<typeof registerUserSchema>;

interface FormRegisterUserProps {
  toConfirm: () => void;
  showTerms: () => void;
}

export const FormRegisterUser: FC<FormRegisterUserProps> = ({
  toConfirm,
  showTerms,
}) => {
  const { register: userRegister } = useUser();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerUserSchema),
    mode: "onChange",
  });

  const terms = watch("terms");
  const name = watch("name");

  const onSubmit = async (data: FormData) => {
    userRegister(
      {
        zipCode: data.cep,
        email: data.email,
        name: data.name,
        password: data.password,
        phone: data.phone,
        CPF: "",
        RG: "",
      },
      toConfirm
    );
  };

  return (
    <Form
      onSubmit={handleSubmit((e) => {
        console.log(e);
        return onSubmit(e);
      })}
    >
      <FlexBox direction="column" gap={1} full my={1}>
        <div>
          <p className="title">Crie sua conta Cada Casa</p>
          <p>Preencha com suas informações</p>
        </div>
        <Input.Text
          type="text"
          placeholder="Nome"
          aria-label="Nome"
          error={errors.name}
          {...register("name")}
        />
        <Input.Text
          type="email"
          placeholder="Email"
          aria-label="Email"
          error={errors.email}
          {...register("email")}
        />
        <Input.Text
          type="text"
          placeholder="Telefone"
          aria-label="telefone"
          error={errors.phone}
          {...register("phone")}
        />
        <FlexBox gap={1} alignItems="center">
          <Input.Text
            type="text"
            placeholder="CEP"
            aria-label="CEP"
            error={errors.cep}
            {...register("cep")}
          />
          <Tooltip
            maxWidth={170}
            content={
              <StyledTooltip full direction="column" gap={1}>
                <strong>Por que pedimos CEP</strong>
                <p>
                  Caso utilize o Casa Fast, esta informação será empregada para
                  calcular o valor do frete de seus materiais, garantindo um
                  orçamento muito mais preciso
                </p>
              </StyledTooltip>
            }
            trigger={<Question size={"1.5rem"} weight="bold" />}
          />
        </FlexBox>
        <Input.Text
          type="password"
          placeholder="Senha"
          aria-label="senha"
          error={errors.password}
          {...register("password")}
        />
        <Input.Text
          type="password"
          placeholder="Confirmar senha"
          aria-label="confirmar senha"
          error={errors.passwordConfirm}
          {...register("passwordConfirm")}
        />
        <Input.Checkbox
          {...register("terms")}
          error={errors.terms}
          id="terms"
          label={
            <FlexBox gap={0.25}>
              Li e aceito os{" "}
              <Button variant="text" onClick={() => showTerms()}>
                Termos e Condições
              </Button>
            </FlexBox>
          }
        />

        <Button type="submit" disabled={!terms}>
          Continuar
        </Button>
      </FlexBox>
    </Form>
  );
};
