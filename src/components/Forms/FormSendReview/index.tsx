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
import { Me, Professional } from "services/User/types";
import { useApi } from "contexts/User";
import { useNavigate } from "react-router-dom";

export interface FormSendReviewProps {
  user: Me;
  professional: Professional;
}

export type FormData = Zod.infer<typeof sendReviewSchema>;

export const FormSendReview: FC<FormSendReviewProps> = ({
  user,
  professional,
}) => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(sendReviewSchema),
    mode: "onSubmit",
  });

  const { evaluation } = useApi();
  const { create } = evaluation;
  const [modalConfirm, setModalConfirm] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setValue("cost", 0);
    setValue("relationship", 0);
    setValue("deadlines", 0);
    setValue("functionality", 0);
    setValue("quality", 0);
  }, []);

  const { color } = useTheme();

  const onSubmit = async (data: FormData) => {
    console.log(data, user);
    await create({
      ...data,
      professionalId: professional.id,
      userId: user.id,
      status: "pending",
    });
    setModalConfirm(true);
    // navigate(-1);
    return;
  };

  const closeConfirmationModal = () => {
    navigate(-1);
    setModalConfirm(false);
  };

  const categories: {
    name: string;
    value: "cost" | "deadlines" | "functionality" | "quality" | "relationship";
  }[] = [
    { name: "Custo", value: "cost" },
    { name: "Prazo", value: "deadlines" },
    { name: "Funcionalidade", value: "functionality" },
    { name: "Qualidade das Entregas", value: "quality" },
    { name: "Relacionamento com o Cliente", value: "relationship" },
  ];

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FlexBox direction="column" gap={1} full>
        <h2>Avaliação do profissional</h2>
        <Information direction="column" mb={1} full pb={1}>
          <p>
            Profissional: <strong>{professional.name}</strong>
          </p>
          <p>
            Usuário: <strong>{user.name}</strong>
          </p>
        </Information>
        {categories.map((cat, index) => (
          <StarContainer
            full
            justifyContent="center"
            gap={1}
            alignItems="center"
          >
            <div className="cat-name">
              <p>{cat.name}</p>
            </div>
            <div>
              {[1, 2, 3, 4, 5].map((rating) => (
                <Star
                  weight={"fill"}
                  onClick={() => setValue(cat.value, +rating)}
                  key={Math.random()}
                  size={24}
                  color={
                    watch(cat.value) >= rating
                      ? color.secondary.yellow
                      : color.base[200]
                  }
                />
              ))}
            </div>
          </StarContainer>
        ))}
        <FlexBox full mt={0.5}>
          <Input.Area
            label="Depoimento"
            error={errors.description}
            {...register("description")}
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
            onClick={() => closeConfirmationModal()}
          >
            Sair
          </Button>
        </FlexBox>
      </ConfirmModal>
    </Form>
  );
};
