import { HeaderList } from "components/HeaderList";
import { List } from "./components/list";
import { Page } from "components/Page";

export interface ProfessionalsListProps {}
export const ProfessionalsListPage: React.FC<ProfessionalsListProps> = () => {
  return (
    <Page>
      <HeaderList />
      <List />
    </Page>
  );
};
