import { FieldError } from "react-hook-form";

export interface RadioGroupProps extends React.ComponentProps<"input"> {
  type?: "radio";
  groupLegend?: string;
  error?: FieldError;
  disabled?: boolean;
  options?: RadioOption[];
}

export type RadioOption = {
  value: string;
  label: string;
};
