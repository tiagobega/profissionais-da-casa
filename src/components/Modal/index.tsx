import { FlexBox } from 'components/FlexBox'
import { ReactNode, useEffect, useRef } from 'react'
import { CloseButton, Container } from './styles'
import { CaretLeft, X } from '@phosphor-icons/react'
import { Button } from 'components/Button'

export interface ModalProps {
  children: ReactNode
  isOpened: boolean
  onProceed?: () => void
  onClose: () => void
  small?: boolean
}
export const Modal: React.FC<ModalProps> = ({
  children,
  isOpened,
  onProceed,
  onClose,
  small = false,
}) => {
  const ref: any = useRef(null)

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal()
      document.body.classList.add('modal-open')
    } else {
      ref.current?.close()
      document.body.classList.remove('modal-open')
    }
  }, [isOpened])

  const preventAutoClose = (e: React.MouseEvent) => e.stopPropagation()

  return (
    <Container
      ref={ref}
      onCancel={() => onClose()}
      onClick={() => onClose()}
      small={small}
    >
      <div onClick={(event: React.MouseEvent) => preventAutoClose(event)}>
        <FlexBox direction="column" py={3} px={6} gap={1} full>
          <CloseButton variant="text" onClick={() => onClose()}>
            <CaretLeft weight="fill" />
            Voltar
          </CloseButton>
          <FlexBox full alignItems="center" direction="column">
            {children}
          </FlexBox>
        </FlexBox>
      </div>
    </Container>
  )
}
