import { zodResolver } from "@hookform/resolvers/zod";
import { Category } from "Models/faq";
import { NameValueType } from "Models/models";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { contactProfessionalSchema } from "./validation";
import { Professional } from "services/User/types";
import { useApi, useUser } from "contexts/User";
import { useEffect, useState } from "react";

export type FormContactProfessional = Zod.infer<
  typeof contactProfessionalSchema
>;

interface FormContactProfessionalProps {
  professional: Professional;
  onClose: () => void;
  onSend?: () => void;
}

export const FormContactProfessional: React.FC<
  FormContactProfessionalProps
> = ({ professional, onClose, onSend }) => {
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

  const {
    user: { me, getSingleUser },
    professional: {},
    email: { sendEmail },
    lead: { create },
  } = useApi();

  useEffect(() => {
    setValue("byEmail", true);
    setValue("byWhatsapp", true);
  }, [professional]);

  const onSubmit = async (data: FormContactProfessional) => {
    const emailSignature =
      (me &&
        `${me?.name}<br/>${
          (watch("byEmail") && `Email para resposta: ${me?.email}`) || ""
        }<br/>${
          (watch("byWhatsapp") &&
            `Responder via whatsapp ou telefone: ${me?.phone}`) ||
          ""
        }`) ||
      "";

    const emailSignatureDisplay =
      (me &&
        `${me?.name} - ${(watch("byEmail") && `${me?.email}`) || ""} - ${
          (watch("byWhatsapp") && `${me?.phone}`) || ""
        }`) ||
      "";
    const subject = "Profissionais da Casa - Contato de cliente";

    const userResponse = await getSingleUser({ id: professional.userId });

    if (!userResponse || !me) {
      return onClose();
    }

    const messageWithSignature = `${data.description} -  ${emailSignatureDisplay}`;

    const leadResponse = await create({
      professionalId: professional.id,
      userId: me.id,
      description: messageWithSignature,
      name: me.name,
    });

    if (!leadResponse) return onClose();

    const mailResponse = await sendEmail(
      {
        subject,
        template: "LEAD_TO_PROFESSIONAL",
        email: userResponse.email,
        text: "text",
        params: {
          DESCRIPTION: data.description,
          SIGNATURE: emailSignature,
        },
      },
      true
    );
    onSend?.();
    onClose();
  };

  const nothingSelected = !watch("byEmail") && !watch("byWhatsapp");

  return (
    <form
      onSubmit={handleSubmit((e) => {
        return onSubmit(e);
      })}
      style={{ width: "100%" }}
    >
      <FlexBox direction="column" gap={1.5} full>
        <h2>Entre em contato com {professional.name}</h2>
        <Input.Area
          rows={10}
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

        <p style={{ fontSize: 12, fontStyle: "italic" }}>
          Profissionais da Casa compartilhará suas informações apenas para o
          profissional escolhido por você. Seus dados permanecerão protegidos,
          segundo a LGPD.
        </p>

        <Button type="submit" full width={5} disabled={nothingSelected}>
          Enviar e-mail
        </Button>
      </FlexBox>
    </form>
  );
};
