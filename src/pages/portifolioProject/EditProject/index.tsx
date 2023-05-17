import { Button } from 'components/Button'
import { FormTest } from 'components/FormTest'
import { Modal } from 'components/Modal'
import { useState } from 'react'

export interface EditPortifolioProjectProps {}
export const EditPortifolioProject: React.FC<
  EditPortifolioProjectProps
> = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Button variant="outline" small onClick={() => setModalOpen(true)}>
        Editar Projeto
      </Button>
      <Modal
        isOpened={modalOpen}
        onProceed={() => console.log('proceed')}
        onClose={() => setModalOpen(false)}
      >
        <FormTest />
      </Modal>
    </>
  )
}
