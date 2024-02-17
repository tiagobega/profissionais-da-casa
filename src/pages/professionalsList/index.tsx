import { HeaderList } from "components/HeaderList";
import { List } from "./components/list";
import { FlexBox } from "components/FlexBox";
import { ProfessionalsListPageContainer } from "components/HeaderList/styles";

export interface ProfessionalsListProps {}
export const ProfessionalsListPage: React.FC<ProfessionalsListProps> = () => {
  return (
    <ProfessionalsListPageContainer direction="column" gap={2} p={2}>
      <HeaderList />
      <List />
    </ProfessionalsListPageContainer>
  );
};
