import { FieldError } from "react-hook-form";

export interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  type?: "text" | "number" | "date" | "email" | "password";
  error?: FieldError;
  disabled?: boolean;
  width?: number;
}
