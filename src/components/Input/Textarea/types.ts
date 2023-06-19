import { FieldError } from "react-hook-form";

export interface InputProps extends React.ComponentProps<"textarea"> {
  label?: string;
  error?: FieldError;
  disabled?: boolean;
}
