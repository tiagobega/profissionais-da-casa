import { Role } from "constants/roles";
import { SubPlanName } from "constants/subPlan";

export interface AuthCookie {
  accessToken: string;
}

export interface GenericError {
  messages: string[];
}

/**
 * RESPONSE /ACCOUNT/ME
 */
export interface Me {
  id: string;
  cpf: string;
  role: string;
  roleRel: SingleRole;
  name: string;
  verified: boolean;
  active: boolean;
  profilePicture: string;
  zipCode: string;
  profileType: string;
  profileTypeRel: {
    ui: string;
    name: "user" | "professional";
  };
  email: string;
  phone: string;
  createdAt: string;
}

/**
 *
 */
export interface Professional {
  id: string;
}

/**
 * RESPONSE /ACCOUNT/SIGNIN
 */
export interface SignIn {
  accessToken: string;
}

/**
 * RESPONSE /ACCOUNT/SIGNUP
 */
export interface SignUp {
  user: Me;
  session: SignIn;
}

/**
 * RESPONSE /ROLE/GETONE
 */
export interface SingleRole {
  id: string;
  name: Role;
}

/**
 * RESPONSE /SUBPLAN/CREATE
 */

export interface Subplan {
  id: string;
  name: SubPlanName;
  isActive: boolean;
}

/**
 * DATA TO SIGN IN
 */
export type SignInData = {
  email: string;
  password: string;
};

export interface SignInError extends GenericError {}

/**
 * DATA TO REGISTER
 */
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

/**
 * DATA TO REGISTER PROFESSIONAL
 */
export type ProfessionalSignUpData = {
  userId: string;
  subscriptionPlanId: string;
  name: string;
  professionalRegister: string;
  companyName: string;
  cnpj: string;
  zipCode: string;
  phone: string;
  formationInstitute: string;
  formationDetails: string;
  formation: string;
  caucrea: string;
  yearConclusion: string;
  tags: string;
  profilePicture: string;
  backgroundPicture: string;
  birthDate: string;
  onlineAppointment: boolean;
};

/**
 * DATA TO CREATE SUBPLAN
 */
export type SubPlanData = {
  name: string;
  isActive: boolean;
};

/**
 * DATA TO SEND FILE TO STORAGE
 */

export type SendFileData = {
  filename: string;
  content: string;
  contentType: string;
  contentEncoding?: string;
  acl?:
    | "private"
    | "public-read"
    | "public-read-write"
    | "aws-exec-read"
    | "authenticated-read"
    | "bucket-owner-read"
    | "bucket-owner-full-control"
    | "log-delivery-write";
};

/**
 * DATA TO CREATE STATES
 */

export type CreateManyLocationData = {
  id: string;
  /**
   * string separada por virgula
   * @example "SP,PR,RS"
   */
  states: string;
};

/**
 * DATA TO CREATE SOCIAL MEDIA
 */

export type CreateManySocialMediaData = {
  id: string;
  socialMedias: any;
};
