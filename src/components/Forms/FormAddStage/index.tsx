import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { editProfileSchema } from "./validation";
import { Select } from "components/Input/HTMLSelect";
import { useTheme } from "styled-components";

export type FormEditProfileData = Zod.infer<typeof editProfileSchema>;

export const FormAddStage = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormEditProfileData>({
    resolver: zodResolver(editProfileSchema),
    mode: "onSubmit",
  });
  const { color } = useTheme();

  const onSubmit = (data: FormEditProfileData) => {

    window.alert(JSON.stringify(data));
  };

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={handleSubmit((e) => {
        return onSubmit(e);
      })}
    >
      <FlexBox direction="column" gap={3} full mt={2}>
        <Input.Text
          type="text"
          label="Nome da etapa"
          placeholder="Digite um nome para a etapa"
          error={errors.name}
          {...register("name")}
        />

        <Button type="submit" full background={color.secondary.blue} width={5}>
          Adicionar
        </Button>
      </FlexBox>
    </form>
  );
};
