import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { editProfileSchema } from "./validation";
import { Select } from "components/Input/HTMLSelect";

export type FormEditUserProfileData = Zod.infer<typeof editProfileSchema>;

export const FormEditUserProfile = () => {
  const {
    handleSubmit,
    register,
    watch,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormEditUserProfileData>({
    resolver: zodResolver(editProfileSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: FormEditUserProfileData) => {
    console.log(data);

    window.alert(JSON.stringify(data));
  };

  return (
    <form
      onSubmit={handleSubmit((e) => {
        console.log(e);
        return onSubmit(e);
      })}
    >
      <FlexBox direction="column" gap={1.5} full>
        <Input.Text
          type="text"
          placeholder="Nome/Razão Social"
          aria-label="Nome"
          error={errors.name}
          {...register("name")}
        />

        <Input.Text
          aria-label="E-mail"
          placeholder="Email"
          error={errors.email}
          {...register("email")}
        />
        <Input.Text
          type="text"
          placeholder="CEP"
          aria-label="CEP"
          error={errors.cep}
          {...register("cep")}
        />

        <Input.Text
          aria-label="Telefone"
          placeholder="Telefone"
          error={errors.phone}
          {...register("phone")}
        />

        <hr />
        <legend>Mudar senha</legend>
        <Input.Text
          aria-label="senha"
          placeholder="Senha Atual"
          error={errors.passwordOld}
          {...register("passwordOld")}
        />
        <Input.Text
          aria-label="nova senha"
          placeholder="Nova senha"
          error={errors.password}
          {...register("password")}
        />
        <Input.Text
          aria-label="Sobre"
          placeholder="Escreva um pouco sobre você"
          error={errors.passwordConfirm}
          {...register("passwordConfirm")}
        />

        <hr />
        <legend>Trocar Foto</legend>
        <Input.File
          label="Sobre"
          placeholder="Escolha uma foto para o perfil"
          error={errors.photo}
          accept="image/png, image/gif, image/jpeg"
          {...register("photo")}
        />

        <Button type="submit" full>
          Salvar
        </Button>
      </FlexBox>
    </form>
  );
};
