import { zodResolver } from "@hookform/resolvers/zod";
import { Category } from "Models/faq";
import { NameValueType } from "Models/models";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { contactProfessionalSchema } from "./validation";
import { Professional } from "services/User/types";
import { useUser } from "contexts/User";
import { useEffect, useState } from "react";

export type FormContactProfessional = Zod.infer<
  typeof contactProfessionalSchema
>;

interface FormContactProfessionalProps {
  name: string;
  email: string;
}

export const FormContactProfessional: React.FC<
  FormContactProfessionalProps
> = ({ name, email }) => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormContactProfessional>({
    resolver: zodResolver(contactProfessionalSchema),
    mode: "onSubmit",
  });
  const { me } = useUser();

  useEffect(() => {
    setValue("byEmail", true);
    setValue("byWhatsapp", true);
    setValue("recipient", email);
  }, []);

  const emailSignature =
    me &&
    `${me?.name}\n${watch("byEmail") && `Email para resposta: ${me?.email}`}\n${
      watch("byWhatsapp") && `Responder via whatsapp ou telefone: ${me?.phone}`
    }`;
  console.log(getValues);

  const onSubmit = (data: FormContactProfessional) => {
    const emailBody = `${data.description}\n\n${emailSignature}`;
    const subject = "Profissionais da Casa - Contato de cliente";
    console.log(email, subject, emailBody);
  };

  return (
    <form
      onSubmit={handleSubmit((e) => {
        console.log(e);
        return onSubmit(e);
      })}
      style={{ width: "100%" }}
    >
      <FlexBox direction="column" gap={1.5} full>
        <h2>Entre em contato com {name}</h2>
        <Input.Area
          rows={20}
          label="Descrição do projeto"
          error={errors.description}
          placeholder="Descreva brevemente o seu projeto"
          {...register("description")}
        />
        <Input.Checkbox
          {...register("byEmail")}
          label="Quero disponibilizar o meu email para resposta"
        />

        <Input.Checkbox
          {...register("byWhatsapp")}
          label="Quero disponibilizar o meu telefone para resposta"
        />

        <Button type="submit" full width={5}>
          Enviar e-mail
        </Button>
      </FlexBox>
    </form>
  );
};
