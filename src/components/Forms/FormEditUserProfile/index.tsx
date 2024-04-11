import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useUser } from "contexts/User";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Me } from "services/User/types";
import { editProfileSchema } from "./validation";

export type FormEditUserProfileData = Zod.infer<typeof editProfileSchema>;
interface FormEditUserProfileProps {
  user: Me;
  close: () => void;
}

export const FormEditUserProfile: FC<FormEditUserProfileProps> = ({
  user,
  close,
}) => {
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormEditUserProfileData>({
    resolver: zodResolver(editProfileSchema),
    mode: "onSubmit",
  });
  const { updateMe } = useUser();

  const setInitialData = () => {
    setValue("name", user.name);
    setValue("phone", user.phone);
    setValue("cep", user.zipCode);
    setValue("email", user.email);
  };

  useEffect(() => {
    setInitialData();
  }, [user]);

  const onSubmit = async (data: FormEditUserProfileData) => {
    await updateMe(data);
    close();
  };

  return (
    <form
      onSubmit={handleSubmit((e) => {
        return onSubmit(e);
      })}
    >
      <FlexBox direction="column" gap={1.5} full>
        <Input.Text
          type="text"
          placeholder="Nome/Razão Social"
          aria-label="Nome"
          error={errors.name}
          {...register("name")}
        />

        <Input.Text
          aria-label="E-mail"
          placeholder="Email"
          error={errors.email}
          {...register("email")}
        />
        <Input.Text
          type="text"
          placeholder="CEP"
          aria-label="CEP"
          error={errors.cep}
          {...register("cep")}
        />

        <Input.Text
          aria-label="Telefone"
          placeholder="Telefone"
          error={errors.phone}
          {...register("phone")}
        />

        <Button type="submit" full>
          Salvar
        </Button>
      </FlexBox>
    </form>
  );
};
