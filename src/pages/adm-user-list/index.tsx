import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { useEffect, useState } from "react";
import { UserList } from "./components/userList";
import { Header } from "./styles";
import { useNavigate } from "react-router-dom";
import { CaretLeft } from "@phosphor-icons/react";
import { Me } from "services/User/types";
import { useApi } from "contexts/User";
import { Page } from "components/Page";

export interface AdmUserListProps {}

export type ScreenList = "professionals" | "validation";

export const AdmUserList: React.FC<AdmUserListProps> = () => {
  const [allUsers, setAllUsers] = useState<Me[]>();

  const { professional, user } = useApi();

  const navigate = useNavigate();

  const fetchAll = async () => {
    const userResponse = await user.getAll();
    if (!userResponse) return;

    const professionalResponse = await professional.getAll();

    if (!professionalResponse) return;

    setAllUsers(userResponse.users);
  };

  useEffect(() => {
    if (!allUsers) fetchAll();
  }, []);

  return (
    <Page>
      <FlexBox mt={2}>
        <Button variant="text" onClick={() => navigate(-1)}>
          <CaretLeft weight="fill" /> Voltar
        </Button>
      </FlexBox>

      <Header>
        <h2>Usuários da Casa</h2>
      </Header>

      <UserList users={allUsers || []} />
    </Page>
  );
};
