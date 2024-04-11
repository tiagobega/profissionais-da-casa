import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { editProfileSchema } from "./validation";

export type FormEditProfileData = Zod.infer<typeof editProfileSchema>;

export const FormAddDelivery = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormEditProfileData>({
    resolver: zodResolver(editProfileSchema),
    mode: "onSubmit",
  });
  const { color } = useTheme();

  const onSubmit = (data: FormEditProfileData) => {
    window.alert(JSON.stringify(data));
  };

  return (
    <form
      onSubmit={handleSubmit((e) => {
        return onSubmit(e);
      })}
    >
      <FlexBox direction="column" gap={1.5} full>
        <Input.Text
          type="date"
          label="Data da entrega"
          error={errors.date}
          {...register("date")}
        />

        <p>
          *As entregas servem para monitorar o desenvolvimento do projeto e não
          são editáveis.
        </p>

        <Button type="submit" full background={color.secondary.blue} width={5}>
          Adicionar
        </Button>
      </FlexBox>
    </form>
  );
};
