import { Role } from "./role";

export interface Me {
  id: string;
  cpf: string;
  role: string;
  roleRel: Role;
  phone: string;
  name: string;
  verified: boolean;
  active: boolean;
  profilePicture: string;
  zipCode: string;
  profileType: string;
  profileTypeRel: {
    id: string;
    name: "user" | "admin";
  };
  email: string;
  createdAt: string;
  leads: [];
}

export type SignInData = {
  email: string;
  password: string;
};

export type SignUpData = {
  cpf: string;
  role: string;
  email: string;
  password: string;
  phone: string;
  name: string;
  profileType: string;
  profilePicture: string;
  zipCode: string;
};

export type UpdateUserData = Partial<
  Omit<
    Me,
    | "id"
    | "roleRel"
    | "profileTypeRel"
    | "leads"
    | "createdAt"
    | "email"
    | "verified"
  >
>;
export type UpdatePasswordData = {
  currentPassword: string;
  newPassword: string;
};

export type AllUserResponse = {};

export type DeleteUserData = Pick<Me, "id"> | Pick<Me, "email">;

export type ForgotPasswordData = Pick<Me, "id"> | Pick<Me, "email">;

export type ResetPasswordData = {
  code: string;
  password: string;
  email: string;
};

export type AdminUpdateUserData = Partial<
  Omit<Me, "id" | "roleRel" | "profileTypeRel" | "leads" | "createdAt">
> & { id: string };

/**
 * Response when sign in
 */
export type SignInResponse = {
  accessToken: string;
};

/**
 * Response when sign up
 */
export type SignUpResponse = {
  user: Me;
  session: {
    accessToken: string;
  };
};
