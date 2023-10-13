import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { editProfileSchema } from "./validation";
import { Select } from "components/Input/HTMLSelect";
import { states } from "constants/states";
import { ImgPreview } from "../FormAddImage/styles";
import { Trash } from "@phosphor-icons/react";
import { previewUrl } from "utils/ImageBase64Convert";
import { Professional, ProfessionalUpdateData } from "services/User/types";
import { useApi } from "contexts/User";
import { tags } from "constants/tags";

export type FormEditProfileData = Zod.infer<typeof editProfileSchema>;
interface FormEditProfileProps {
  professional: Professional;
}
export type areaType = {
  state: string;
  city: string;
  location: string;
};

export const FormEditProfile: FC<FormEditProfileProps> = ({ professional }) => {
  const {
    handleSubmit,
    register,
    watch,
    control,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormEditProfileData>({
    resolver: zodResolver(editProfileSchema),
    mode: "onSubmit",
  });

  const [areaList, setAreaList] = useState<areaType[]>([]);

  const { file, professional: professionalApi } = useApi();
  const { update } = professionalApi;

  const professionalStates = () => {
    const states: string[] = [];
    professional.locations.forEach((state) => {
      states.push(state.state);
    });
    return states;
  };
  useEffect(() => {
    setValue("name", professional.name);
    setValue("onlineAppointment", professional.onlineAppointment);
    setValue("description", professional.description);
    setValue("tags", professional.tags.split(","));
    // setValue('description',professional.description)
  }, [professional]);

  const onSubmit = async (data: FormEditProfileData) => {
    let payload: ProfessionalUpdateData = {
      name: data.name,
      description: data.description,
      onlineAppointment: data.onlineAppointment,
      tags: data.tags.join(","),
    };
    console.log(payload);
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

        <Input.Checkbox
          subject={"onlineAppointment"}
          label={"Presto serviço a distancia."}
          {...register("onlineAppointment")}
        />
        <FlexBox direction="column" gap={2} mt={2}>
          {" "}
          <h3>Categorias:</h3>
          <FlexBox gap={2} full wrap={"wrap"}>
            {tags.map((tag) => (
              <Input.Checkbox
                key={tag}
                subject={tag}
                label={tag}
                value={tag}
                {...register(`tags`)}
              />
            ))}
          </FlexBox>
        </FlexBox>

        <Button type="submit" full>
          Salvar
        </Button>
      </FlexBox>
    </form>
  );
};
