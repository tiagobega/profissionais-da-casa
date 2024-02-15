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
    formState: { errors, isDirty, dirtyFields },
  } = useForm<FormEditProfileData>({
    resolver: zodResolver(editProfileSchema),
    mode: "onSubmit",
  });

  const { file, professional: professionalApi, socialMedia } = useApi();
  const { update } = professionalApi;
  const { createMany, deleteSocialMedia } = socialMedia;

  useEffect(() => {
    setValue("name", professional.name);
    setValue("onlineAppointment", professional.onlineAppointment);
    setValue("description", professional.description);
    setValue("formation", professional.formation);
    setValue("tags", professional.tags.split(","));
    setSocials();
  }, [professional]);

  const setSocials = () => {
    professional.socialMedias.forEach((social) => {
      switch (social.name) {
        case "Facebook":
          setValue("facebook", social.link);
          break;
        case "Instagram":
          setValue("instagram", social.link);
          break;
        case "Pinterest":
          setValue("pinterest", social.link);
          break;
        case "LinkedIn":
          setValue("linkedin", social.link);
          break;
        case "Outra":
          setValue("otherSocials", social.link);
          break;

        default:
          break;
      }
    });
  };

  const onSubmit = async (data: FormEditProfileData) => {
    if (!isDirty) {
      close();
      return;
    }

    let payload: ProfessionalUpdateData = {
      name: data.name,
      description: data.description,
      onlineAppointment: data.onlineAppointment,
      formation: data.formation,
      tags: data.tags.join(","),
    };

    const finalSocialMedias: { name: string; link: string }[] = [];

    const socialNameMap = [
      {
        name: "Pinterest",
        link: data.pinterest,
        key: "pinterest",
      },
      {
        key: "linkedin",
        name: "LinkedIn",
        link: data.linkedin,
      },
      {
        key: "instagram",
        name: "Instagram",
        link: data.instagram,
      },
      {
        key: "facebook",
        name: "Facebook",
        link: data.facebook,
      },
      {
        key: "otherSocials",
        name: "Outra",
        link: data.otherSocials,
      },
    ];

    socialNameMap.forEach((currentSocialMedia) => {
      const professionalSocialMedia = professional.socialMedias.find(
        ({ name }) => name === currentSocialMedia.name
      );

      if (!professionalSocialMedia) {
        if (currentSocialMedia.link) {
          finalSocialMedias.push({
            name: currentSocialMedia.name,
            link: currentSocialMedia.link,
          });
        }
        return;
      }

      if (
        currentSocialMedia.link !== professionalSocialMedia.link ||
        currentSocialMedia.link
      ) {
        finalSocialMedias.push({
          name: currentSocialMedia.name,
          link: currentSocialMedia.link,
        });
      }
    });

    if (finalSocialMedias.length > 0) {
      if (professional.socialMedias.length > 0) {
        await deleteSocialMedia({ professionalId: professional.id });
      }

      const filtered = finalSocialMedias.filter((sm) => sm.link);
      if (filtered.length > 0) {
        await createMany({
          professionalId: professional.id,
          names: filtered.map(({ name }) => name).join(","),
          links: filtered.map(({ link }) => link).join(","),
        });
      }
    }

    await update({ id: professional.id, ...payload });
    close();
  };

  return (
    <form
      onSubmit={handleSubmit((e) => {
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

        <Input.Select
          options={[
            { name: "Arquiteto", value: "Arquiteto" },
            { name: "Engenheiro", value: "Engenheiro" },
            {
              name: "Designer de interiores",
              value: "Designer de interiores",
            },
            { name: "Execução de obras", value: "Execução de obras" },
            { name: "Instalações", value: "Instalações" },
            { name: "Pintor", value: "Pintor" },
          ]}
          placeholder="Formação"
          aria-label="Formação"
          label={"Selecione a sua profissão"}
          error={errors.formation}
          {...register("formation")}
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

        <FlexBox gap={1} full>
          <FlexBox direction="column" gap={1} full>
            <Input.Text
              type="text"
              placeholder="LinkedIn"
              aria-label="LinkedIn"
              {...register("linkedin")}
              error={errors.linkedin}
            />
            <Input.Text
              placeholder="Facebook"
              aria-label="Facebook"
              {...register("facebook")}
              error={errors.facebook}
            />
            <Input.Text
              type="text"
              placeholder="Instagram (URL ou @)"
              aria-label="Instagram"
              {...register("instagram")}
              error={errors.instagram}
            />
          </FlexBox>
          <FlexBox direction="column" gap={1} full>
            <Input.Text
              type="text"
              placeholder="Pinterest"
              aria-label="Pinterest"
              {...register("pinterest")}
              error={errors.pinterest}
            />
            <Input.Text
              type="text"
              placeholder="Outra rede profissional"
              aria-label="Outra rede profissional"
              {...register("otherSocials")}
              error={errors.otherSocials}
            />
          </FlexBox>
        </FlexBox>

        <Button type="submit" full>
          Salvar
        </Button>
      </FlexBox>
    </form>
  );
};
