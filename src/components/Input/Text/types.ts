import type { FieldError } from "react-hook-form";
import { MaskedInputProps } from "react-text-mask";

export interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  type?: "text" | "number" | "date" | "email" | "password";
  error?: FieldError;
  disabled?: boolean;
  width?: number;
  maskedInput?: MaskedInputProps;
}
