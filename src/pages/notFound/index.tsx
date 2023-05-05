import { CaretLeft, Pencil, SlidersHorizontal, X } from '@phosphor-icons/react'
import { Button } from 'components/Button'
import { CardProfile } from 'components/Card'
import { CardStyledProfile } from 'components/Card copy'
import { Collapsible } from 'components/Collapsable'
import { FlexBox } from 'components/FlexBox'
import { FormTest } from 'components/FormTest'
import { Geometry } from 'components/Geometry'
import { HeaderList } from 'components/HeaderList'
import { Modal } from 'components/Modal'
import { NotFoundContent } from 'components/NotFound'
import { ProjectCard } from 'components/ProjectCard'
import { Skeleton } from 'components/Skeleton'
import { TooltipIcon } from 'components/TooltipIcon'
import { useState } from 'react'
import { useTheme } from 'styled-components'

const NotFound = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const theme = useTheme()

  return (
    <div className="HomePage">
      <h1>notFound</h1>
      <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
      <p>{String(modalOpen)}</p>
      <Modal
        isOpened={modalOpen}
        onProceed={() => console.log('proceed')}
        onClose={() => setModalOpen(false)}
      >
        <FormTest />
        <FormTest />
      </Modal>
      <HeaderList />
      <FlexBox>
        <FlexBox grow={1}>teste1</FlexBox>
        <FlexBox flex={'auto'}>teste2</FlexBox>
      </FlexBox>
      <ProjectCard projectStatus="not-started" />

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
          <FlexBox gap={3}>
            <CardProfile />
            <CardStyledProfile />
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <NotFoundContent />
      <FlexBox direction="column" gap={1} p={2}>
        <Collapsible title="title of the collapsable">
          <FlexBox direction="column" gap={1} p={1}>
            <p>Item A</p>
            <p>Item B</p>
            <Button>HEY</Button>
          </FlexBox>
        </Collapsible>
        <Collapsible
          title="title of the collapsable"
          titleButton={
            <Pencil weight="fill" onClick={() => window.alert('edit')} />
          }
          actionButton={<X size={24} onClick={() => window.alert('delete')} />}
          variant="faq"
        >
          <FlexBox direction="column" gap={1} p={1}>
            <p>Item A</p>
            <p>Item B</p>
          </FlexBox>
        </Collapsible>
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
