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
    return input.split(",").map((imageUrl) => ({ imageUrl }));
  } else {
    return input.map((imageUrl) => ({ imageUrl }));
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

  const [imageList, setImageList] = useState<
    {
      imageUrl: string;
      file?: File;
    }[]
  >([]);

  const [coverIndex, setCoverIndex] = useState<number>(0);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const {
    portfolioProject: { create, edit },
    file: { sendFile },
  } = useApi();

  useEffect(() => {
    setValue("description", project ? project.description : "");
    setValue("title", project ? project.name : "");

    project && setImageList(loadImgString(project.images));
  }, []);

  const imgFile = watch("image");

  const addPhoto = async (fileList: FileList) => {
    const { base64, file } = await previewUrl(fileList);
    setImageList((old) => [...old, { imageUrl: base64, file }]);
    setValue("image", null as unknown as FileList);
  };

  const removePhoto = (index: number) => {
    const newArray = [...imageList];
    newArray.splice(index, 1);
    if (index == coverIndex) setCoverIndex(0);
    setImageList(newArray);
  };

  const setCover = (index: number) => {
    setCoverIndex(index);
  };

  const handleClose = () => {
    setCoverIndex(0);
    setDisableSubmit(false);
    setImageList([]);
    reset();
    close();
  };

  const onSubmit = async (data: FormData) => {
    setDisableSubmit(true);
    const lastImageList: string[] = [];

    const promises: Promise<{ url: string; isCover: boolean }>[] = [];

    imageList.forEach(({ imageUrl, file }, index) => {
      if (!file) {
        index === coverIndex
          ? lastImageList.unshift(imageUrl)
          : lastImageList.push(imageUrl);

        return;
      }

      promises.push(
        new Promise(async (resolve, reject) => {
          const fileRespose = await sendFile({
            content: imageUrl,
            contentType: file.type,
            filename: `portfolio_image_${index}`,
          });

          if (!fileRespose) return reject("");
          return resolve({ url: fileRespose, isCover: index === coverIndex });
        })
      );
    });

    const executedPromises = await Promise.all(promises);

    executedPromises.forEach(({ url, isCover }) => {
      if (!isCover) {
        lastImageList.push(url);
      } else {
        lastImageList.unshift(url);
      }
    });

    await create({
      description: data.description,
      name: data.title,
      images: lastImageList.join(","),
      professionalId: id,
    });

    handleClose();
  };

  return (
    <FlexBox full direction="column">
      <FlexBox justifyContent="space-between" full gap={4}>
        <h2>Adicionar Projeto </h2>
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
            error={errors.description}
          />
          <p>{watch("description")?.length}/400 caracteres</p>
        </FlexBox>
        <FlexBox
          direction="column"
          alignItems="flex-end"
          justifyContent={"space-between"}
          my={2}
        >
          <Input.File
            placeholder="Selecione uma foto"
            label={`Adicione uma foto (${imageList.length}/6)`}
            {...register("image")}
            disabled={imageList.length == 6}
          />
          <Button
            type="button"
            width={3}
            onClick={() => addPhoto(imgFile)}
            disabled={!imgFile || imgFile?.length == 0 || imageList.length == 6}
          >
            <Plus />
          </Button>
        </FlexBox>

        <FlexBox gap={1} mb={3}>
          {imageList.map((image, index) => (
            <PhotoPreview
              key={image.imageUrl}
              isCover={index == coverIndex}
              removePicture={() => removePhoto(index)}
              toggleCover={() => setCover(index)}
              url={image.imageUrl}
            />
          ))}
        </FlexBox>

        <Button
          type="submit"
          disabled={
            watch("description")?.length == 0 ||
            watch("description")?.length > 400 ||
            watch("title")?.length < 3 ||
            disableSubmit
          }
        >
          Enviar
        </Button>
      </form>
    </FlexBox>
  );
};
