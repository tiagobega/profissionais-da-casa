import { ReactElement } from "react";
import { FieldError } from "react-hook-form";

export interface CheckboxProps extends React.ComponentProps<"input"> {
  type?: "checkbox";
  label?: string | ReactElement;
  subject?: string;
  error?: FieldError;
  disabled?: boolean;
}
