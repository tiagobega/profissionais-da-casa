import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { loginSchema } from "./validation";
import { Form } from "./style";
import { useUser } from "contexts/User";
import { useNavigate } from "react-router-dom";

export type FormData = Zod.infer<typeof loginSchema>;

export const FormLogin = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });
  const { color } = useTheme();
  const navigate = useNavigate();

  const { login } = useUser();

  const onSubmit = (data: FormData) => {
    login(data, () => navigate("/catalog"));
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
          type="email"
          placeholder="Email"
          aria-label="Email"
          error={errors.email}
          {...register("email")}
        />
        <Input.Text
          type="password"
          placeholder="Senha"
          aria-label="senha"
          error={errors.password}
          {...register("password")}
        />

        <Button type="submit">Entrar</Button>
      </FlexBox>
    </Form>
  );
};
