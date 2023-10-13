import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { tags } from "constants/tags";
import { useApi } from "contexts/User";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Professional, ProfessionalUpdateData } from "services/User/types";
import { editProfileSchema } from "./validation";

export type FormEditProfileData = Zod.infer<typeof editProfileSchema>;
interface FormEditProfileProps {
  professional: Professional;
  close: () => void;
}
export type areaType = {
  state: string;
  city: string;
  location: string;
};

export const FormEditProfile: FC<FormEditProfileProps> = ({
  professional,
  close,
}) => {
  const {
    handleSubmit,
    register,
    watch,
    control,
    setValue,
    getValues,
    reset,
    formState: { errors, isDirty },
  } = useForm<FormEditProfileData>({
    resolver: zodResolver(editProfileSchema),
    mode: "onSubmit",
  });

  const { file, professional: professionalApi } = useApi();
  const { update } = professionalApi;

  useEffect(() => {
    setValue("name", professional.name);
    setValue("onlineAppointment", professional.onlineAppointment);
    setValue("description", professional.description);
    setValue("tags", professional.tags.split(","));
  }, [professional]);

  const onSubmit = async (data: FormEditProfileData) => {
    if (!isDirty) {
      close();
      return;
    }
    let payload: ProfessionalUpdateData = {
      name: data.name,
      description: data.description,
      onlineAppointment: data.onlineAppointment,
      tags: data.tags.join(","),
    };
    await update({ id: professional.id, ...payload });
    close();
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
          label={`Sobre (${
            watch("description") ? watch("description").length : 0
          }/300 caracteres)`}
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
