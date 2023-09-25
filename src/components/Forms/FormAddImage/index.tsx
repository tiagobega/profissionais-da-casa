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
import { useUser } from "contexts/User";

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
  const { sendFile, putMe } = useUser();

  const toNull = () => {
    reset();
    setImg(null);
  };

  const onSubmit = async (data: FormEditProfileData) => {
    if (!img || !data.picture[0]) return;
    console.log(data);
    const fileResponse = await sendFile({
      filename: "profile picture",
      content: img,
      contentType: data.picture[0].type,
    });
    if (fileResponse == false) return;
    await putMe({ profilePicture: fileResponse });
    close();
    toNull();
  };

  const imgFile = watch("picture");

  useEffect(() => {
    if (imgFile?.length == 0) return;

    (async () => {
      const url = await previewUrl(imgFile);
      setImg(url);
    })();
  }, [imgFile]);

  const previewUrl = async (fileList: FileList) => {
    const base64 = await convertBase64(fileList[0]);
    return base64;
  };

  const convertBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result as string);
      };

      fileReader.onerror = () => {
        reject("error");
      };
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
        <h3>Trocar foto de perfil</h3>
        <Input.File
          label="Foto de perfil"
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
