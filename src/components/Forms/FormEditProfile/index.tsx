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
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [profile, setProfile] = useState<string | null>(null);
  const [bgImg, setBgImg] = useState<string | null>(null);

  const [profileChanged, setProfileChanged] = useState(false);
  const [backgroundChanged, setBackgroundChanged] = useState(false);
  const { file, professional: professionalApi } = useApi();
  const { sendFile } = file;
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
    setProfile(professional.profilePicture);
    setBgImg(professional.backgroundPicture);
    // setValue('description',professional.description)
  }, [professional]);

  const removeArea = (index: number) => {
    const filteredList = areaList.splice(index, 1);
    setAreaList(filteredList);
  };

  const imgFileProfile = watch("profilePicture");
  const imgFileBackground = watch("backgroundPicture");

  useEffect(() => {
    if (imgFileProfile?.length == 0) return;

    (async () => {
      const url = await previewUrl(imgFileProfile);
      setProfile(url.base64);
    })();
  }, [imgFileProfile]);

  useEffect(() => {
    if (imgFileBackground?.length == 0) return;

    (async () => {
      const url = await previewUrl(imgFileBackground);
      setBgImg(url.base64);
    })();
  }, [imgFileBackground]);

  const toNull = () => {
    reset();
    setBgImg(null);
    setProfile(null);
  };

  const sendPicture = async (
    fileList: FileList,
    filename: string,
    content: string
  ) => {
    if (!profile || !fileList[0]) {
      return;
    }
    const fileResponse = await sendFile({
      filename,
      content,
      contentType: fileList[0].type,
    });
    return fileResponse;
  };

  const onSubmit = async (data: FormEditProfileData) => {
    const profilePicture = profile
      ? sendPicture(data.profilePicture, "profile picture", profile)
      : undefined;
    const bgImgPicture = bgImg
      ? sendPicture(data.backgroundPicture, "bg picture", bgImg)
      : undefined;

    let payload: ProfessionalUpdateData = {
      name: data.name,
      onlineAppointment: data.onlineAppointment,
    };
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
        <hr />
        <Input.File
          label="Foto de perfil"
          error={errors.profilePicture}
          {...register("profilePicture")}
        />

        <Button type="submit" full>
          Salvar
        </Button>
      </FlexBox>
    </form>
  );
};
