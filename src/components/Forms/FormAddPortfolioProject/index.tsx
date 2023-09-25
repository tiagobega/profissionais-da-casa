import Input from "components/Input";
import { useForm } from "react-hook-form";
import { usePortfolioProjectSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { useState } from "react";
import { Plus } from "@phosphor-icons/react";
import { PhotoPreview } from "./photoPreview";
import { FlexBox } from "components/FlexBox";
import { useUser } from "contexts/User";

export interface FormAddPortfolioProjectProps {}

export type FormData = Zod.infer<typeof usePortfolioProjectSchema>;

export const FormAddPortfolioProject: React.FC<
  FormAddPortfolioProjectProps
> = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(usePortfolioProjectSchema),
    mode: "onChange",
  });
  const [imageList, setImageList] = useState<string[]>([]);
  const [coverIndex, setCoverIndex] = useState<number>(0);

  const addPhoto = (url: string) => {
    const newArray = imageList;
    newArray.unshift(url);
    setImageList(newArray);
  };

  const removePhoto = (index: number) => {
    const newArray = imageList;
    newArray.splice(index, 1);
    if (index == coverIndex) setCoverIndex(0);
    setImageList(newArray);
  };

  const setCover = (index: number) => {
    setCoverIndex(index);
  };

  const onSubmit = async (data: FormData) => {
    const imageString = [imageList[coverIndex]];
    imageList.forEach((image, index) => index != 0 && imageString.push(image));
    imageString.join(",");
    console.log(imageString);

    const payload = {
      name: data.title,
      description: data.description,
      professionalId: "id",
    };
  };

  return (
    <form onSubmit={() => handleSubmit(onSubmit)}>
      <h2>Adicionar Projeto ao portifólio</h2>
      <Input.Text placeholder="Nome do projeto" {...register("title")} />
      <Input.Area
        placeholder="Descrição do projeto"
        {...register("description")}
      />
      <Input.File placeholder="Selecione uma foto" label="Adicione uma foto" />
      <Button
        type="button"
        onClick={() => addPhoto(watch("image"))}
        disabled={watch("image").length == 0}
      >
        <Plus />
      </Button>
      <FlexBox gap={1}>
        {imageList.map((image, index) => (
          <PhotoPreview
            isCover={index == coverIndex}
            removePicture={() => removePhoto(index)}
            toggleCover={() => setCover(index)}
            url={image}
          />
        ))}
      </FlexBox>

      <Button>Enviar</Button>
    </form>
  );
};
