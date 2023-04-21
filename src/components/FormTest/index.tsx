import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'components/Button'
import { FlexBox } from 'components/FlexBox'
import {
  Checkbox,
  Input,
  RadioGroup,
  Select,
  SelectInput,
} from 'components/Input'
import { RadioOptionType } from 'components/Input/types'
import { useForm } from 'react-hook-form'
import { formTestSchema } from './validation'
import { useEffect } from 'react'

export interface TestForm1Props {}

export type FormTestData = Zod.infer<typeof formTestSchema>

export const FormTest: React.FC<TestForm1Props> = () => {
  const {
    handleSubmit,
    register,
    watch,
    control,
    formState: { errors },
  } = useForm<FormTestData>({
    resolver: zodResolver(formTestSchema),
    mode: 'all',
    defaultValues: {
      name: '',
      age: 0,
    },
  })

  const food = watch('food')

  useEffect(() => {
    console.log(food)
  }, [])

  const submitFunction = (values: FormTestData) => {
    console.log(errors)
    console.log(values)
    window.alert(JSON.stringify(values))
  }

  const radioOptions: RadioOptionType[] = [
    { label: 'Arquiteto(a)', value: 'arquiteto' },
    { label: 'Outros', value: 'outros' },
  ]

  const foodOptions = [
    {
      name: 'Food 1',
      value: 'one',
    },
    {
      name: 'Food 2',
      value: 'two',
    },
  ]

  return (
    <form onSubmit={handleSubmit(submitFunction)}>
      <FlexBox direction="column" gap={1.5} full>
        <Input
          type="text"
          label="Name"
          error={errors.name}
          {...register('name')}
        />
        <Input
          type="number"
          label="Age"
          error={errors.age}
          {...register('age')}
        />
        <RadioGroup
          error={errors.profession}
          groupLegend="Registro profissional / Acadêmico"
          options={radioOptions}
          groupName="profession"
          {...register('profession')}
        />

        <Checkbox
          error={errors.profession}
          label="Confirmo que li os termos"
          subject="terms"
          {...register('terms')}
        />
        <Select
          error={errors.profession}
          label="Favorite food"
          selectName="food"
          options={foodOptions}
          control={control}
        />

        <Button type="submit" full>
          Confirmar
        </Button>
      </FlexBox>
    </form>
  )
}
