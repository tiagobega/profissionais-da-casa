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
    createdAt: string;
  };
  email: string;
  createdAt: string;
  leads: [];
}

export type SignInData = {
  email: string;
  password: string;
};

export type SignUpData = { password: string } & Omit<
  Me,
  "id" | "leads" | "createdAt" | "roleRel" | "profileTypeRel"
>;

export type SingleUserData =
  | {
      id: string;
    }
  | {
      email: string;
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

export type AllUserResponse = { users: Me[] };

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

export type UpdatePasswordResponse = {
  messages: string;
};
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

export type ResendEmailData = Pick<Me, "email"> | Pick<Me, "id">;

export type ResendEmailResponse = string;

export type DeleteUserResponse = { messages: string };
