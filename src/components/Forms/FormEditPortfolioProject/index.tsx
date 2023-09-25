import Input from "components/Input";
import { useForm } from "react-hook-form";
import { usePortfolioProjectSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { useEffect, useState } from "react";
import { Plus } from "@phosphor-icons/react";
import { FlexBox } from "components/FlexBox";
import { useApi, useUser } from "contexts/User";
import { Loading } from "components/Loading";
import {
  CreatePortfolioProjectData,
  PortfolioProject,
} from "services/User/types";
import { previewUrl } from "utils/ImageBase64Convert";
import { PhotoPreview } from "../FormAddPortfolioProject/photoPreview";

export interface FormAddPortfolioProjectProps {
  close: () => void;
  project: PortfolioProject;
}

export type FormData = Zod.infer<typeof usePortfolioProjectSchema>;

export const FormAddPortfolioProject: React.FC<
  FormAddPortfolioProjectProps
> = ({ close, project }) => {
  const {
    handleSubmit,
    register,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(usePortfolioProjectSchema),
    mode: "onChange",
  });
  const [imageList, setImageList] = useState<string[]>([]);
  const [coverIndex, setCoverIndex] = useState<number>(0);
  const { professional, portfolioProject } = useApi();
  const { myProfessional } = professional;
  const { create } = portfolioProject;

  useEffect(() => {
    setValue("description", project ? project.description : "");
    setValue("title", project ? project.name : "");
    project && setImageList(project.images);
  }, []);

  const imgFile = watch("image");

  const addPhoto = async (fileList: FileList) => {
    const imgUrl = await previewUrl(fileList);
    const newArray = imageList;
    newArray.unshift(imgUrl);
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

  const handleClose = () => {
    setCoverIndex(0);
    setImageList([]);
    reset();
    close();
  };

  const onSubmit = async (data: FormData) => {
    if (!myProfessional) return;
    const imageString = [imageList[coverIndex]];
    imageList.forEach((image, index) => index != 0 && imageString.push(image));
    imageString.join(",");
    console.log(imageString);

    const payload: CreatePortfolioProjectData = {
      name: data.title,
      description: data.description,
      professionalId: myProfessional?.id,
      images: imageString,
    };
    await create(payload);
    handleClose();
  };

  return (
    <>
      {myProfessional ? (
        <form onSubmit={() => handleSubmit(onSubmit)}>
          <FlexBox justifyContent="space-between">
            <h2>Adicionar Projeto</h2>
            <Button type="button" variant="outline" onClick={handleClose}>
              Voltar para lista
            </Button>
          </FlexBox>
          <Input.Text placeholder="Nome do projeto" {...register("title")} />
          <Input.Area
            placeholder="Descrição do projeto"
            {...register("description")}
          />
          <Input.File
            placeholder="Selecione uma foto"
            label="Adicione uma foto"
          />
          <Button
            type="button"
            onClick={() => addPhoto(imgFile)}
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
      ) : (
        <Loading />
      )}
    </>
  );
};
