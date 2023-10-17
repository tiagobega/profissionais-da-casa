import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { set, useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { addImageSchema } from "./validation";
import { FC, useEffect, useState } from "react";
import { ImgPreview } from "./styles";
import { Trash } from "@phosphor-icons/react";
import { useApi, useUser } from "contexts/User";
import { previewUrl } from "utils/ImageBase64Convert";
import { Professional } from "services/User/types";

export type FormData = Zod.infer<typeof addImageSchema>;
interface FormAddProfessionalBgPictureProps {
  close: () => void;
  professionalProfile: Professional;
}

export const FormAddProfessionalBgPicture: FC<
  FormAddProfessionalBgPictureProps
> = ({ close, professionalProfile }) => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(addImageSchema),
    mode: "onChange",
  });
  const { color } = useTheme();
  const [img, setImg] = useState<string | null>(
    professionalProfile.backgroundPicture
  );
  const { professional, file } = useApi();
  const { update } = professional;
  const { sendFile } = file;

  const toNull = () => {
    reset();
    setImg(null);
  };

  const onSubmit = async (data: FormData) => {
    if (!img || img.length == 0 || !data.picture[0]) return;

    const fileResponse = await sendFile({
      filename: `${professionalProfile.name}_background_picture`,
      content: img,
      contentType: data.picture[0].type,
    });
    if (fileResponse == false) return;
    await update({
      id: professionalProfile.id,
      backgroundPicture: fileResponse,
    });
    close();
    toNull();
  };

  const imgFile = watch("picture");

  useEffect(() => {
    if (!imgFile?.length) return;
    (async () => {
      const url = await previewUrl(imgFile);
      setImg(url.base64);
    })();
  }, [imgFile]);

  return (
    <form
      onSubmit={handleSubmit((e) => {
        console.log(e);
        return onSubmit(e);
      })}
    >
      <FlexBox direction="column" gap={1.5} full>
        <h3>Trocar foto de fundo</h3>
        <Input.File
          label="Foto de fundo"
          error={errors.picture}
          {...register("picture")}
        />
        {img && (
          <FlexBox gap={1}>
            <ImgPreview src={img}></ImgPreview>
            <Button type="button" variant="text" onClick={() => setImg(null)}>
              <Trash size={20} />
            </Button>
          </FlexBox>
        )}

        <Button
          type="submit"
          full
          background={color.secondary.blue}
          width={5}
          disabled={!img}
        >
          Adicionar
        </Button>
      </FlexBox>
    </form>
  );
};
