import { CaretLeft, SlidersHorizontal } from '@phosphor-icons/react'
import { Button } from 'components/Button'
import { FlexBox } from 'components/FlexBox'
import { FormTest } from 'components/FormTest'
import { Geometry } from 'components/Geometry'
import { Loading } from 'components/Loading'
import { Skeleton } from 'components/Skeleton'
import { Tooltip } from 'components/Tooltip'
import { TooltipIcon } from 'components/TooltipIcon'
import { useTheme } from 'styled-components'

const NotFound = () => {
  const theme = useTheme()

  return (
    <div className="HomePage">
      <h1>notFound</h1>

      <FlexBox>
        <FlexBox grow={1}>teste1</FlexBox>
        <FlexBox flex={'auto'}>teste2</FlexBox>
      </FlexBox>

      <FlexBox gap={2} p={2}>
        <Skeleton width={270} height={360} variant="rectangle" pulse />
        <Skeleton width={270} variant="round" pulse />
        <FlexBox direction="column">
          <Geometry color={theme.color.brand.orange} width={40} />
          <Geometry color={theme.color.brand.purple} width={40} triangle />

          <Geometry
            color={theme.color.secondary.blue}
            width={40}
            triangle
            angle={270}
          />
          <TooltipIcon
            side="bottom"
            boxAlign="center"
            title="tooltip super creative title"
            text="this is a text tooltip with longer text! omg that's too much information to put on a tooltip"
          />
        </FlexBox>
      </FlexBox>
      <FlexBox direction="column" gap={1} p={2}>
        <Skeleton width={360} height={24} variant="rectangle" pulse />
        <Skeleton width={270} height={12} variant="rectangle" pulse />
        <Skeleton width={300} height={12} variant="rectangle" pulse />
        <Skeleton width={300} height={12} variant="rectangle" pulse />
        <Skeleton width={300} height={12} variant="rectangle" pulse />
      </FlexBox>

      <FlexBox gap={1} p={2} centralized direction="column">
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

      <FlexBox p={2} centralized>
        <FormTest />
      </FlexBox>
    </div>
  )
}

export default NotFound
