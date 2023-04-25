import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'components/Button'
import { FlexBox } from 'components/FlexBox'
import Input from 'components/Input'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { formTestSchema } from './validation'

export type FormTestData = Zod.infer<typeof formTestSchema>

const radioOptions = [
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
  {
    name: 'Food 3',
    value: 'three',
  },
  {
    name: 'Food 4',
    value: 'vier',
  },
  {
    name: 'Food 5',
    value: 'cinq',
  },
  {
    name: 'Food 6',
    value: 'seis',
  },
  {
    name: 'Food 7',
    value: 'sieben',
  },
  {
    name: 'Food 8',
    value: 'ocho',
  },
]

export const FormTest = () => {
  const {
    handleSubmit,
    register,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormTestData>({
    resolver: zodResolver(formTestSchema),
    mode: 'all',
  })

  const profession = watch('food')
  const onSubmit = (data: FormTestData) => {
    console.log(data)

    window.alert(JSON.stringify(data))
  }

  useEffect(() => {
    console.log(profession)
  }, [profession])

  return (
    <form
      onSubmit={handleSubmit((e) => {
        console.log(e)
        return onSubmit(e)
      })}
    >
      <FlexBox direction="column" gap={1.5} full>
        <Input.Text
          type="text"
          placeholder="Name"
          error={errors.name}
          {...register('name')}
        />

        <Input.Text
          type="number"
          label="Age"
          error={errors.age}
          {...register('age', { valueAsNumber: true })}
        />

        <Input.Radio
          error={errors.profession}
          groupLegend="Registro profissional / Acadêmico"
          options={radioOptions}
          {...register('profession')}
        />

        <Input.Checkbox
          error={errors.terms}
          label="Confirmo que li os termos"
          subject="terms"
          {...register('terms', { required: true })}
        />

        <Controller
          control={control}
          name={'food'}
          render={({ field }) => {
            return (
              <Input.Select
                {...field}
                options={foodOptions}
                label={'teste'}
                innerRef={field.ref}
                error={errors.food}
                onValueChange={field.onChange}
              />
            )
          }}
        />

        <Button type="submit" full>
          Confirmar
        </Button>
      </FlexBox>
    </form>
  )
}
