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

export type FormEditProfileData = Zod.infer<typeof addImageSchema>;
interface FormAddImageProps {
  close: () => void;
}

export const FormAddImage: FC<FormAddImageProps> = ({ close }) => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormEditProfileData>({
    resolver: zodResolver(addImageSchema),
    mode: "onChange",
  });
  const { color } = useTheme();
  const [img, setImg] = useState<string | null>(null);
  const { user, file } = useApi();
  const { updateMe } = user;
  const { sendFile } = file;

  const toNull = () => {
    reset();
    setImg(null);
  };

  const onSubmit = async (data: FormEditProfileData) => {
    if (!img || !data.picture[0]) return;
    const fileResponse = await sendFile({
      filename: "profile picture",
      content: img,
      contentType: data.picture[0].type,
    });
    if (fileResponse == false) return;
    await updateMe({ profilePicture: fileResponse });
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
        return onSubmit(e);
      })}
    >
      <FlexBox direction="column" gap={1.5} full>
        <h3>Trocar foto de perfil</h3>
        <Input.File
          label="Foto de perfil"
          error={errors.picture}
          {...register("picture")}
        />
        {img && (
          <FlexBox gap={1}>
            <ImgPreview src={img} loading="lazy"></ImgPreview>
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
