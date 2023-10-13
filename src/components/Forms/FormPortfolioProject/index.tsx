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
import { PhotoPreview } from "./photoPreview";

export interface FormPortfolioProjectProps {
  close: () => void;
  project?: PortfolioProject;
  id: string;
}

export type FormData = Zod.infer<typeof usePortfolioProjectSchema>;

const loadImgString = (input: string | string[]) => {
  if (typeof input == "string") {
    return input.split(",");
  } else {
    return input;
  }
};

export const FormPortfolioProject: React.FC<FormPortfolioProjectProps> = ({
  close,
  project,
  id,
}) => {
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

  const [newImagesList, setNewImageList] = useState<
    {
      base64: string;
      fileList: FileList;
    }[]
  >([]);

  const { portfolioProject } = useApi();
  const { create, edit } = portfolioProject;

  useEffect(() => {
    setValue("description", project ? project.description : "");
    setValue("title", project ? project.name : "");

    project && setImageList(loadImgString(project.images));
  }, []);

  const imgFile = watch("image");

  const addPhoto = async (fileList: FileList) => {
    const imgUrl = await previewUrl(fileList);
    const newArray = imageList;
    newArray.push(imgUrl.base64);
    setImageList(newArray);
    setValue("image", null as unknown as FileList);
  };

  const removePhoto = (index: number) => {
    console.log(index, imageList);
    const newArray = imageList;
    newArray.splice(index, 1);
    if (index == coverIndex) setCoverIndex(0);
    console.log(newArray);
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
    const imageStringList = [imageList[coverIndex]];

    console.log(data, imageList);

    // imageList.forEach(
    //   (image, index) => index != coverIndex && imageStringList.push(image)
    // );
    // const imageStringJoined = imageStringList.join(",");

    // if (imageStringJoined === "") {
    //   return;
    // }

    // const payload: CreatePortfolioProjectData = {
    //   name: data.title,
    //   description: data.description,
    //   professionalId: id,
    //   images: imageStringJoined,
    // };

    // await create(payload);

    // handleClose();
  };

  return (
    <FlexBox full direction="column">
      <FlexBox justifyContent="space-between" full gap={4}>
        <h2>Adicionar Projeto</h2>
        <Button type="button" variant="outline" onClick={handleClose}>
          Voltar para lista
        </Button>
      </FlexBox>
      <form
        onSubmit={handleSubmit((e) => {
          return onSubmit(e);
        })}
        style={{ flex: 1 }}
      >
        <FlexBox direction="column" gap={2} full mt={2}>
          <Input.Text
            placeholder="Nome do projeto"
            {...register("title")}
            error={errors.title}
          />
          <Input.Area
            placeholder="Descrição do projeto"
            {...register("description")}
          />
        </FlexBox>
        <FlexBox alignItems="flex-end" gap={10} my={2}>
          <Input.File
            placeholder="Selecione uma foto"
            label="Adicione uma foto"
            {...register("image")}
          />
          <Button
            type="button"
            onClick={() => addPhoto(imgFile)}
            disabled={!imgFile || imgFile.length == 0}
          >
            <Plus />
          </Button>
        </FlexBox>

        <FlexBox gap={1} mb={3}>
          {imageList.map((image, index) => (
            <PhotoPreview
              key={image}
              isCover={index == coverIndex}
              removePicture={() => removePhoto(index)}
              toggleCover={() => setCover(index)}
              url={image}
            />
          ))}
        </FlexBox>

        <Button>Enviar</Button>
      </form>
    </FlexBox>
  );
};
