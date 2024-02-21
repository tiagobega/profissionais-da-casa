import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useState } from "react";
import { UserListLine } from "../ListLine";
import { List, ListContent, ListHeader, ListLegend } from "./styles";
import { Me, Professional } from "services/User/types";
import { ROLES } from "constants/roles";

export interface UserListProps {
  users: Me[];
  professionals: Professional[];
  refetch: () => void;
}

export const UserList: React.FC<UserListProps> = ({ users, professionals, refetch }) => {
  const [query, setQuery] = useState<string>("");

  const list = users.map((user) => {
    const professional =
      user.roleRel.name !== ROLES.PROFESSIONAL
        ? undefined
        : professionals.find(({ userId }) => user.id === userId);

    return { user, professional };
  });

  return (
    <List>
      <ListHeader alignItems="center" justifyContent="space-between" p={1}>
        <h3>Cadastrados ({users.length})</h3>
        <Input.Text
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquisar Usuário"
          aria-label="Pesquisar Usuário"
          width={5}
        />
      </ListHeader>
      <ListLegend full>
        <FlexBox gap={1}>
          <div className="name">Nome</div>
          <div className="email">Email</div>
          <div className="role">Categoria</div>
          <div className="verified">E-mail Verificado</div>
        </FlexBox>
      </ListLegend>
      <ListContent>
        {list.map((el) => (
          <UserListLine entry={el} key={el.user.id}  refetch={refetch}/>
        ))}
      </ListContent>
    </List>
  );
};
