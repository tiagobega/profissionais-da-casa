import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { editProfileSchema } from "./validation";
import { Select } from "components/Input/HTMLSelect";

export type FormEditProfileData = Zod.infer<typeof editProfileSchema>;
export type areaType = {
  state: string;
  city: string;
  location: string;
};

const radioOptions = [
  { label: "Arquiteto(a)", value: "arquiteto" },
  { label: "Outros", value: "outros" },
];

const stateOptions = [
  {
    name: "São Paulo",
    value: "SP",
  },
  {
    name: "Rio de Janeiro",
    value: "RJ",
  },
  {
    name: "Minas Gerais",
    value: "MB",
  },
  {
    name: "Paraná",
    value: "PR",
  },
];
const cityOptions = [
  {
    name: "São Paulo",
    value: "São Paulo",
  },
  {
    name: "Rio de Janeiro",
    value: "Rio de Janeiro",
  },
  {
    name: "Belo Horizonte",
    value: "Belo Horizonte",
  },
  {
    name: "Curitiba",
    value: "Curitiba",
  },
];

export const FormEditProfile = () => {
  const {
    handleSubmit,
    register,
    watch,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormEditProfileData>({
    resolver: zodResolver(editProfileSchema),
    mode: "onSubmit",
  });

  const [areaList, setAreaList] = useState<areaType[]>([]);
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const onSubmit = (data: FormEditProfileData) => {
    console.log(data);

    window.alert(JSON.stringify(data));
  };

  const addArea = () => {
    const newAreaState = getValues("state");
    const newAreaCity = getValues("city");
    const newAreaLocation = getValues("location");
    newAreaCity != "" &&
      newAreaState != "" &&
      newAreaLocation != "" &&
      setAreaList([
        ...areaList,
        { state: newAreaState, city: newAreaCity, location: newAreaLocation },
      ]);
    setValue("city", "");
    setValue("state", "");
    setValue("location", "");
  };

  const removeArea = (index: number) => {
    const filteredList = areaList.splice(index, 1);
    setAreaList(filteredList);
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
          placeholder="Insira seu nome"
          label="Nome"
          error={errors.name}
          {...register("name")}
        />

        <Input.Area
          label="Sobre"
          placeholder="Escreva um pouco sobre você"
          error={errors.description}
          {...register("description")}
        />

        <Input.Select
          options={stateOptions}
          placeholder="Estado"
          error={errors.state}
          {...register("state")}
        />

        <Input.Select
          error={errors.city}
          options={cityOptions}
          placeholder="Cidade"
          {...register("city")}
        />

        <Button type="submit" full>
          Salvar
        </Button>
      </FlexBox>
    </form>
  );
};
