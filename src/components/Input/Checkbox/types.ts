import { FieldError, Control, RefCallBack } from "react-hook-form";

export interface CheckboxProps extends React.ComponentProps<"input"> {
  type?: "checkbox";
  label?: string;
  subject?: string;
  error?: FieldError;
  disabled?: boolean;
}
