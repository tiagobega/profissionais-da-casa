import { FlexBox } from "components/FlexBox";
import Input from "components/Input";
import { useState } from "react";
import { UserListLine } from "../ListLine";
import { List, ListContent, ListHeader, ListLegend } from "./styles";
import { Me } from "services/User/types";

export interface UserListProps {
  users: Me[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  const [query, setQuery] = useState<string>("");

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
        {users.map((el) => (
          <UserListLine user={el} key={el.id} />
        ))}
      </ListContent>
    </List>
  );
};
