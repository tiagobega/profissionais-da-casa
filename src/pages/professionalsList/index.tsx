import { HeaderList } from 'components/HeaderList'
import { List } from './components/list'
import { FlexBox } from 'components/FlexBox'

export interface ProfessionalsListProps {}
export const ProfessionalsListPage: React.FC<ProfessionalsListProps> = () => {
  return (
    <FlexBox direction="column" gap={2} my={2}>
      <HeaderList />
      <List />
    </FlexBox>
  )
}
