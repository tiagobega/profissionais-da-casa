import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { loginSchema } from "./validation";
import { Form } from "./style";
import { useApi, useUser } from "contexts/User";
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

  const { user, professional } = useApi();

  const { login } = user;
  const { getSingle, setMyProfessional } = professional;

  const onSubmit = async (data: FormData) => {
    const loginResponse = await login(data);

    if (!loginResponse) return;

    switch (loginResponse.me.roleRel.name) {
      case "admin":
        navigate("/admin/");
        break;
      case "user":
        navigate("/catalog/");
        break;
      case "professional":
        const professionalResponse = await getSingle({
          userId: loginResponse.me.id,
        });

        if (!professionalResponse) {
          return navigate("/catalog/");
        }

        setMyProfessional(professionalResponse);
        navigate(`/professional/${professionalResponse.userId}`);

        break;
    }
  };

  return (
    <Form
      onSubmit={handleSubmit((e) => {
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
