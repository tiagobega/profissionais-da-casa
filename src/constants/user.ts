import { HttpStatusCode } from "axios";

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  deleted: boolean;
  ProfilePhone: number;
  createdAt: string;
  updatedAt: string;
  ProfilePostalCode: string;
  ProfileName?: string;
  ProfileSurname?: string;
  ProfileMobile?: number;
  ProfileBirthDate?: string;
  RG?: string;
  CPF?: string;
}

export interface ResponseError<
  ErrorDetails extends {} = { [key: string]: any },
  ErrorData extends unknown = null
> {
  data: ErrorData;
  error: {
    details: ErrorDetails;
    name: string;
    message: string;
    status: HttpStatusCode;
  };
}

//login

export interface LoginParams {
  email: string;
  password: string;
}

export type LoginResponse = {
  jwt: string;
  user: User;
};

export type LoginError = ResponseError;

//register

export interface RegisterParams {
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  password: string;
  RG: string;
  CPF: string;
}

export interface RegisterResponse {
  user: User;
}

export type RegisterError = ResponseError;

//email confirmation

export interface EmailConfirmationParams {
  email: string;
}

export interface EmailReponse {
  email: string;
  sent: boolean;
}

export type EmailError = ResponseError;
