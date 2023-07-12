import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { sendReviewSchema } from "./validation";
import { Star } from "@phosphor-icons/react";
import { ConfirmModal, Form, Information, StarContainer } from "./style";
import { FC, useEffect, useState } from "react";
import { ProjectType } from "Models/models";

export interface FormSendReviewProps {
  project: ProjectType;
}

export type FormEditProfileData = Zod.infer<typeof sendReviewSchema>;

export const FormSendReview: FC<FormSendReviewProps> = ({ project }) => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormEditProfileData>({
    resolver: zodResolver(sendReviewSchema),
    mode: "onSubmit",
  });

  const [modalConfirm, setModalConfirm] = useState(false);

  useEffect(() => {
    setValue("cost", 0);
    setValue("customerRelationship", 0);
    setValue("deadline", 0);
    setValue("functionality", 0);
    setValue("handedOver", 0);
  }, []);

  const { color } = useTheme();

  const onSubmit = (data: FormEditProfileData) => {
    window.alert(data);
  };

  const categories: {
    name: string;
    value:
      | "cost"
      | "deadline"
      | "functionality"
      | "handedOver"
      | "customerRelationship";
  }[] = [
    { name: "Custo", value: "cost" },
    { name: "Prazo", value: "deadline" },
    { name: "Funcionalidade", value: "functionality" },
    { name: "Qualidade das Entregas", value: "handedOver" },
    { name: "Relacionamento com o Cliente", value: "customerRelationship" },
  ];

  return (
    <Form
      onSubmit={handleSubmit((e) => {
        console.log(e);
        setModalConfirm(true);
        return onSubmit(e);
      })}
    >
      <FlexBox direction="column" gap={1} full>
        <h2>Avaliação do profissional</h2>
        <Information direction="column" mb={1} full pb={1}>
          <p>
            Profissional: <strong>{project.professional}</strong>
          </p>
          <p>
            Projeto: <strong>{project.name}</strong>
          </p>
        </Information>
        {categories.map((cat, index) => (
          <FlexBox key={index} direction="column">
            <StarContainer
              full
              justifyContent="center"
              gap={1}
              alignItems="center"
            >
              <div className="cat-name">
                <p>{cat.name}</p>
              </div>
              {[1, 2, 3, 4, 5].map((rating) => (
                <Star
                  weight={"fill"}
                  onClick={() => setValue(cat.value, +rating)}
                  key={rating}
                  size={24}
                  color={
                    watch(cat.value) >= rating
                      ? color.secondary.yellow
                      : color.base[200]
                  }
                />
              ))}
            </StarContainer>
          </FlexBox>
        ))}
        <FlexBox full mt={0.5}>
          <Input.Area
            label="Depoimento"
            error={errors.testimonial}
            {...register("testimonial")}
          />
        </FlexBox>

        <Button
          type="submit"
          background={color.secondary.blue}
          width={10}
          color="white"
        >
          Enviar
        </Button>
      </FlexBox>
      <ConfirmModal
        isOpened={modalConfirm}
        onClose={() => setModalConfirm(false)}
        bg={color.brand.yellowLight}
      >
        <FlexBox direction="column" my={3} centralized gap={3}>
          <h2>Agradecemos pela avaliação!</h2>
          <Button
            type="button"
            background="white"
            onClick={() => setModalConfirm(false)}
          >
            Sair
          </Button>
        </FlexBox>
      </ConfirmModal>
    </Form>
  );
};
