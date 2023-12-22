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
      tags: data.tags.join(","),
    };

    const filteredSocialMedias = [
      {
        name: "Instagram",
        link: data.instagram,
      },
      {
        name: "Facebook",
        link: data.facebook,
      },
      {
        name: "Pinterest",
        link: data.pinterest,
      },
      {
        name: "LinkedIn",
        link: data.linkedin,
      },
      {
        name: "Outra",
        link: data.otherSocials,
      },
    ].filter((social) => social.link);

    const socialNameMap = {
      Pinterest: "pinterest",
      LinkedIn: "linkedin",
      Instagram: "instagram",
      Facebook: "facebook",
      Outra: "otherSocials",
    };

    const socialIsEdited = () => {
      let isDirty = false;
      filteredSocialMedias.forEach((social) => {
        const professionalSocialMedia = professional.socialMedias.find(
          ({ name }) => name == social.name
        );

        if (!professionalSocialMedia) return;

        if (
          professionalSocialMedia.link !=
          (data as any)[(socialNameMap as any)[social.name]]
        ) {
          isDirty = true;
        }
      });

      return isDirty;
    };

    if (socialIsEdited()) {
      await updateSocialMedia(filteredSocialMedias);
    }

    await update({ id: professional.id, ...payload });
    close();
  };

  const updateSocialMedia = async (
    filteredSocialMedias: { name: string; link: string }[]
  ) => {
    await deleteSocialMedia({ professionalId: professional.id });
    await createMany({
      professionalId: professional.id,
      names: filteredSocialMedias.map(({ name }) => name).join(","),
      links: filteredSocialMedias.map(({ link }) => link).join(","),
    });
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
