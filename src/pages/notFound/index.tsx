import { CaretLeft, SlidersHorizontal } from '@phosphor-icons/react'
import { Button } from 'components/Button'
import { FlexBox } from 'components/FlexBox'
import { FormTest } from 'components/FormTest'
import { Skeleton } from 'components/Skeleton'
import { useTheme } from 'styled-components'

const NotFound = () => {
  const theme = useTheme()

  return (
    <div className="HomePage">
      <h1>notFound</h1>
      <FlexBox gap={2} p={2}>
        <Skeleton width={270} height={360} variant="rectangle" pulse />
        <Skeleton width={270} height={360} variant="rectangle" pulse />
        <Skeleton width={270} height={360} variant="rectangle" pulse />
        <Skeleton width={270} variant="round" pulse />
        <Skeleton width={180} variant="round" pulse />
      </FlexBox>
      <FlexBox direction="column" gap={1} p={2}>
        <Skeleton width={360} height={24} variant="rectangle" pulse />
        <Skeleton width={270} height={12} variant="rectangle" pulse />
        <Skeleton width={300} height={12} variant="rectangle" pulse />
        <Skeleton width={300} height={12} variant="rectangle" pulse />
        <Skeleton width={300} height={12} variant="rectangle" pulse />
      </FlexBox>

      <FlexBox gap={1} p={2} centralized>
        <Button shadow>Test</Button>
        <Button background={theme.color.secondary.blue} color="white">
          Test color
        </Button>
        <Button
          background={theme.color.secondary.blue}
          color="white"
          width={20}
        >
          Test color
        </Button>
        <Button variant="text">
          <CaretLeft weight="fill" /> Text Button Test
        </Button>
        <Button variant="outline" color={theme.color.brand.orange} width={20}>
          <SlidersHorizontal weight="fill" /> Text Button Test
        </Button>
      </FlexBox>
      <FlexBox p={2} gap={2} centralized>
        <input type="text" placeholder="test placeholder" />
        <input type="number" placeholder="test placeholder" />
        <input type="date" />
        <input type="radio" name="test-radio" id="op1" />
        <label htmlFor="op1">Option 1</label>
        <input type="radio" name="test-radio" id="op2" />
        <label htmlFor="op2">Option 2</label>
        <input type="checkbox" name="test-checkbox" />
        <input type="checkbox" name="test-checkbox" />
      </FlexBox>
      <FlexBox p={2} centralized>
        <FormTest />
      </FlexBox>
    </div>
  )
}

export default NotFound
