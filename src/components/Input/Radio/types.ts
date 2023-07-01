import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

export interface RadioGroupProps extends React.ComponentProps<"input"> {
  type?: "radio";
  groupLegend?: string;
  error?: FieldError;
  disabled?: boolean;
  options?: RadioOption[];
  direction?: "row" | "column";
  groupName: string;
  gap?: number;
  bold?: boolean;
}

export type RadioOption = {
  value: string;
  label: string | ReactNode;
};
