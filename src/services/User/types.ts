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
  id: number;
  nickname: string;
  name: string;
  email: string;
  countryCode: string;
  disability: string | null;
  instruction: string;
  profile: string;
  birthdate: string;
  readonly createdAt: string;
  readonly updatedAt: string;
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
 * RESPONSE /ACCOUNT/FORGOT-PASSWORD
 */
export interface ForgotPassword {
  success: boolean;
}

/**
 * RESPONSE /ACCOUNT/RESET-PASSWORD
 */
export interface ResetPassword {
  messages: string;
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
