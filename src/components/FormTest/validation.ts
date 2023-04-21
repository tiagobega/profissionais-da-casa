import * as zod from 'zod'

export const formTestSchema = zod.object({
  name: zod.string().min(1, 'Digite um nome'),
  food: zod.string(),
  profession: zod.string({
    required_error: 'Escolha obrigatória',
    invalid_type_error: 'Escolha obrigatória',
  }),
  age: zod.number().min(18, 'Você deve ter ao menos 18 anos'),
  terms: zod.boolean(),
})
