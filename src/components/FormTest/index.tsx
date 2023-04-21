import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { formTestSchema } from "./validation";

export interface TestForm1Props {}

export type FormTestData = Zod.infer<typeof formTestSchema>;

const radioOptions = [
  { label: "Arquiteto(a)", value: "arquiteto" },
  { label: "Outros", value: "outros" },
];

const foodOptions = [
  {
    name: "Food 1",
    value: "one",
  },
  {
    name: "Food 2",
    value: "two",
  },
];

export const FormTest: React.FC<TestForm1Props> = () => {
  const {
    handleSubmit,
    register,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormTestData>({
    resolver: zodResolver(formTestSchema),
    mode: "all",
  });

  // const food = watch("food");
  const profession = watch("terms");
  const onSubmit = (data: FormTestData) => {
    console.log(data);

    // console.log(errors);
    // console.log(values);
    // window.alert(JSON.stringify(values));
  };

  useEffect(() => {
    // setValue("food", "one");
    console.log(profession);
  }, [profession]);

  // useEffect(() => {}, []);

  // useEffect(() => {
  //   console.log(food);
  // }, [food]);

  return (
    <form
      onSubmit={handleSubmit((e) => {
        console.log(e);
        return onSubmit(e);
      })}
    >
      <FlexBox direction="column" gap={1.5} full>
        <Input.Text
          type="text"
          placeholder="Name"
          error={errors.name}
          {...register("name")}
        />

        <Input.Text
          type="number"
          label="Age"
          error={errors.age}
          {...register("age", { valueAsNumber: true })}
        />

        <Input.Radio
          error={errors.profession}
          groupLegend="Registro profissional / Acadêmico"
          options={radioOptions}
          {...register("profession")}
        />

        <Input.Checkbox
          error={errors.terms}
          label="Confirmo que li os termos"
          subject="terms"
          {...register("terms", { required: true })}
        />

        {/* <Input.Select
          error={errors.profession}
          label="Favorite food"
          selectName="food"
          options={foodOptions}
          control={control}
        /> */}

        <Button type="submit" full>
          Confirmar
        </Button>
      </FlexBox>
    </form>
  );
};
