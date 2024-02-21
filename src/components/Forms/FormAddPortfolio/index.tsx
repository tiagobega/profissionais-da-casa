import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { set, useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { addPortfolioSchema } from "./validation";
import { FC, useEffect, useState } from "react";
import { ImgPreview } from "./styles";
import { Trash } from "@phosphor-icons/react";
import { useApi, useUser } from "contexts/User";
import { previewUrl } from "utils/ImageBase64Convert";
import { Professional } from "services/User/types";

export type FormEditProfileData = Zod.infer<typeof addPortfolioSchema>;
interface FormAddImageProps {
  id: string;
  onComplete: () => void;
}

export const FormAddPortfolio: FC<FormAddImageProps> = ({ id, onComplete }) => {
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormEditProfileData>({
    resolver: zodResolver(addPortfolioSchema),
    mode: "onChange",
  });
  const { color } = useTheme();
  const [img, setImg] = useState<string | null>(null);
  const { professional, file } = useApi();
  const { update } = professional;
  const { sendFile } = file;

  const toNull = () => {
    reset();
    setImg(null);
  };

  const onSubmit = async (data: FormEditProfileData) => {
    if (!img || !data.portfolio[0]) return;
    const fileResponse = await sendFile({
      filename: "portfolio file",
      content: img,
      contentType: data.portfolio[0].type,
    });
    if (fileResponse == false) return;

    await update({ id, portfolioFile: fileResponse });

    onComplete();

    toNull();
  };

  const imgFile = watch("portfolio");

  useEffect(() => {
    if (!imgFile?.length) return;

    (async () => {
      const url = await previewUrl(imgFile);
      setImg(url.base64);
    })();
  }, [imgFile]);

  return (
    <form
      className="form-full"
      onSubmit={handleSubmit((e) => {
        return onSubmit(e);
      })}
    >
      <FlexBox alignItems="flex-end" gap={1.5} full>
        <Input.File
          accept="image/*,.pdf"
          label="Anexar portfólio (imagem ou PDF)"
          aria-label="portfolio"
          error={errors.portfolio}
          {...register("portfolio")}
        />

        <Button type="submit" background={color.secondary.blue} disabled={!img}>
          Adicionar
        </Button>
      </FlexBox>
    </form>
  );
};
