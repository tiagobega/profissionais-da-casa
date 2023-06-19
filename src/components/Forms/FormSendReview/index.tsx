import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { sendReviewSchema } from "./validation";
import { Star } from "@phosphor-icons/react";
import { Form, StarContainer } from "./style";
import { useState } from "react";

export type FormEditProfileData = Zod.infer<typeof sendReviewSchema>;

export const FormSendReview = () => {
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
  const { color } = useTheme();

  const onSubmit = (data: FormEditProfileData) => {
    console.log(data);

    window.alert(JSON.stringify(data));
  };
  const currentRating = +watch("rating");
  const setRating = (value: number) => {
    setValue("rating", value);
    console.log(getValues("testimonial"));
  };

  return (
    <Form
      onSubmit={handleSubmit((e) => {
        console.log(e);
        return onSubmit(e);
      })}
    >
      <FlexBox direction="column" gap={2} full centralized>
        <StarContainer full justifyContent="center" gap={1}>
          {[1, 2, 3, 4, 5].map((rating) => (
            <Star
              weight={"fill"}
              onClick={() => setRating(rating)}
              key={rating}
              size={48}
              color={
                currentRating >= rating
                  ? color.secondary.yellow
                  : color.base[200]
              }
            />
          ))}
        </StarContainer>
        <FlexBox>
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
    </Form>
  );
};
