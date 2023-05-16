import { FlexBox } from 'components/FlexBox'
import {
  CollapsibleInformation,
  FAQContainer,
  InformationContainer,
} from './styles'
import { Geometry } from 'components/Geometry'
import { Button } from 'components/Button'
import { useTheme } from 'styled-components'
import { Collapsible } from 'components/Collapsable'

export interface FAQPageProps {}
export const FAQPage: React.FC<FAQPageProps> = () => {
  const { color } = useTheme()

  const questions = [
    {
      category: 'Categoria A',
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      response:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aspernatur tempora debitis corrupti dignissimos! Odio autem illo sunt tempore quasi deserunt voluptas libero molestiae sequi possimus corrupti culpa, quam blanditiis! Ut numquam corrupti possimus, porro distinctio doloribus expedita quasi sed cupiditate nisi id, obcaecati labore quia fugiat at ullam earum, inventore perspiciatis! Doloremque repellendus esse et aperiam suscipit magnam! Numquam!',
    },
    {
      category: 'Categoria A',
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      response:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aspernatur tempora debitis corrupti dignissimos! Odio autem illo sunt tempore quasi deserunt voluptas libero molestiae sequi possimus corrupti culpa, quam blanditiis! Ut numquam corrupti possimus, porro distinctio doloribus expedita quasi sed cupiditate nisi id, obcaecati labore quia fugiat at ullam earum, inventore perspiciatis! Doloremque repellendus esse et aperiam suscipit magnam! Numquam!',
    },
    {
      category: 'Categoria A',
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      response:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aspernatur tempora debitis corrupti dignissimos! Odio autem illo sunt tempore quasi deserunt voluptas libero molestiae sequi possimus corrupti culpa, quam blanditiis! Ut numquam corrupti possimus, porro distinctio doloribus expedita quasi sed cupiditate nisi id, obcaecati labore quia fugiat at ullam earum, inventore perspiciatis! Doloremque repellendus esse et aperiam suscipit magnam! Numquam!',
    },
    {
      category: 'Categoria B',
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      response:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aspernatur tempora debitis corrupti dignissimos! Odio autem illo sunt tempore quasi deserunt voluptas libero molestiae sequi possimus corrupti culpa, quam blanditiis! Ut numquam corrupti possimus, porro distinctio doloribus expedita quasi sed cupiditate nisi id, obcaecati labore quia fugiat at ullam earum, inventore perspiciatis! Doloremque repellendus esse et aperiam suscipit magnam! Numquam!',
    },
    {
      category: 'Categoria B',
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      response:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aspernatur tempora debitis corrupti dignissimos! Odio autem illo sunt tempore quasi deserunt voluptas libero molestiae sequi possimus corrupti culpa, quam blanditiis! Ut numquam corrupti possimus, porro distinctio doloribus expedita quasi sed cupiditate nisi id, obcaecati labore quia fugiat at ullam earum, inventore perspiciatis! Doloremque repellendus esse et aperiam suscipit magnam! Numquam!',
    },
    {
      category: 'Categoria B',
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      response:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aspernatur tempora debitis corrupti dignissimos! Odio autem illo sunt tempore quasi deserunt voluptas libero molestiae sequi possimus corrupti culpa, quam blanditiis! Ut numquam corrupti possimus, porro distinctio doloribus expedita quasi sed cupiditate nisi id, obcaecati labore quia fugiat at ullam earum, inventore perspiciatis! Doloremque repellendus esse et aperiam suscipit magnam! Numquam!',
    },
    {
      category: 'Categoria C',
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      response:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aspernatur tempora debitis corrupti dignissimos! Odio autem illo sunt tempore quasi deserunt voluptas libero molestiae sequi possimus corrupti culpa, quam blanditiis! Ut numquam corrupti possimus, porro distinctio doloribus expedita quasi sed cupiditate nisi id, obcaecati labore quia fugiat at ullam earum, inventore perspiciatis! Doloremque repellendus esse et aperiam suscipit magnam! Numquam!',
    },
  ]

  const categoryList = () => {
    const list: string[] = new Array()
    questions.forEach((item) => {
      if (!list.includes(item.category)) {
        list.push(item.category)
      } else {
        return
      }
    })
    return list
  }

  const filterByCategory = (category: string) => {
    return questions.filter((el) => el.category === category)
  }

  return (
    <FAQContainer>
      <FlexBox direction="column">
        <Geometry color={color.brand.orange} width={170} triangle angle={270} />
        <Geometry color={color.secondary.green} width={170} angle={0} />
        <Geometry
          color={color.brand.yellowLight}
          width={170}
          triangle
          angle={0}
        />
        <Geometry color={color.brand.orange} width={170} triangle angle={270} />
      </FlexBox>
      <InformationContainer direction="column" gap={2} alignItems="flex-start">
        <h2>Perguntas Frequentes</h2>
        <div className="questions">
          {categoryList().map((item) => (
            <Collapsible title={item} variant="faq" key={item}>
              <CollapsibleInformation>
                {filterByCategory(item).map((el, index) => (
                  <div className="question-item" key={Math.random()}>
                    <h4>{el.question}</h4>
                    <p>{el.response}</p>
                    {index <= filterByCategory(item).length - 2 && <hr />}
                  </div>
                ))}
              </CollapsibleInformation>
            </Collapsible>
          ))}
        </div>
        <div>
          <strong>Ficou com alguma dúvida?</strong>
          <p>Mande um email para contato@vivacadacasa.com.br</p>
        </div>
      </InformationContainer>
      <FlexBox direction="column">
        <Geometry color={color.brand.yellowLight} width={170} angle={0} />
        <Geometry
          color={color.secondary.green}
          width={170}
          triangle
          angle={0}
        />
        <Geometry color={color.brand.orange} width={170} triangle angle={270} />
        <Geometry
          color={color.brand.yellowLight}
          width={170}
          triangle
          angle={180}
        />
      </FlexBox>
    </FAQContainer>
  )
}
