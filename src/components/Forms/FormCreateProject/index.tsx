import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { createProjectSchema } from "./validation";
import { Select } from "components/Input/HTMLSelect";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

export type FormData = Zod.infer<typeof createProjectSchema>;

export const FormCreateProject = () => {
  const {
    handleSubmit,
    register,
    watch,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(createProjectSchema),
    mode: "onSubmit",
  });
  const { color } = useTheme();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log(data);

    window.alert(JSON.stringify(data));

    navigate("/project-details/1");
  };

  return (
    <form
      onSubmit={handleSubmit((e) => {
        console.log(e);
        return onSubmit(e);
      })}
    >
      <FlexBox direction="column" gap={1.5} full>
        <h2>Criar Projeto</h2>
        <Input.Text
          type="text"
          placeholder="Cliente"
          aria-label="Cliente"
          error={errors.customer}
          {...register("customer")}
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
          aria-label="Telefone"
          error={errors.phone}
          {...register("phone")}
        />

        <Input.Area
          aria-label="Descrição"
          placeholder="Breve descrição do projeto"
          error={errors.description}
          {...register("description")}
          rows={5}
        />

        <p>*Apenas clientes registrados na Cada Casa podem ser adicionados</p>

        <Button
          type="submit"
          full
          background={color.secondary.blue}
          color="white"
        >
          Salvar
        </Button>
      </FlexBox>
    </form>
  );
};
