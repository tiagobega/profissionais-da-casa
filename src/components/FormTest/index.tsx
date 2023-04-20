import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'components/Button'
import { FlexBox } from 'components/FlexBox'
import { Checkbox, Input, RadioGroup } from 'components/Input'
import { RadioOptionType } from 'components/Input/types'
import { useForm } from 'react-hook-form'
import { formTestSchema } from './validation'

export interface TestForm1Props {}

export type FormTestData = Zod.infer<typeof formTestSchema>

export const FormTest: React.FC<TestForm1Props> = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormTestData>({
    resolver: zodResolver(formTestSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      age: 0,
    },
  })

  const submitFunction = (values: FormTestData) => {
    console.log(values)
    window.alert(JSON.stringify(values))
  }

  const radioOptions: RadioOptionType[] = [
    { label: 'Arquiteto(a)', value: 'arquiteto' },
    { label: 'Outros', value: 'outros' },
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

        {/* <FlexBox gap={3}>
          <FlexBox alignItems="center" gap={0.5}>
            <input
              {...register('profession', { required: true })}
              type="radio"
              value="architect"
              id="architect"
            />
            <label htmlFor="architect">Arquiteto(a)</label>
          </FlexBox>
          <FlexBox alignItems="center" gap={0.5}>
            <input
              {...register('profession', { required: true })}
              type="radio"
              value="others"
              id="others"
            />
            <label htmlFor="others">Outros</label>
          </FlexBox>
        </FlexBox> */}
        <Button type="submit" full>
          Confirmar
        </Button>
      </FlexBox>
    </form>
  )
}
