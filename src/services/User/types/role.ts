import { RoleName } from "constants/roles";

export interface Role {
  id: string;
  name: RoleName;
}

export type CreateRoleData = {
  name: string;
};

export type UpdateRoleData = (Pick<Role, "id"> | Pick<Role, "name">) & {
  newName: string;
};

export type DeleteRoleData = Pick<Role, "id"> | Pick<Role, "name">;

export type SingleRoleData = Pick<Role, "id"> | Pick<Role, "name">;

export type AllRoleResponse = {
  roles: Role[];
};
