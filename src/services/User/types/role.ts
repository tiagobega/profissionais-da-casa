import { RoleName } from "constants/roles";

export interface Role {
  id: string;
  name: RoleName;
  createdAt: string;
}

export type CreateRoleData = Pick<Role, "name">;

export type UpdateRoleData = (Pick<Role, "id"> | Pick<Role, "name">) & {
  newName: string;
};

export type DeleteRoleData = Pick<Role, "id"> | Pick<Role, "name">;

export type SingleRoleData = Pick<Role, "id"> | Pick<Role, "name">;

export type AllRoleResponse = {
  roles: Role[];
};

export type ForgotPasswordResponse = {
  success: boolean;
};

export type ResetPasswordResponse = {
  messages: string;
};
