import { Role } from "constants/roles";
import { SubPlanName } from "constants/subplan";

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
  profilePicture: string;
  profileType: string;
}

/**
 * 
 */
export interface Professional {
  
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
export interface SignUp {}

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
  formation: boolean;
  caucrea: string;
  yearConclusion: string;
  tags: string;
  profilePicture: string;
  backgroundPicture: string;
};

/**
 * DATA TO CREATE SUBPLAN
 */
export type SubPlanData = {
  name: string;
  isActive: boolean;
};
