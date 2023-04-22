import { SelectProps as RadixSelectProps } from "@radix-ui/react-select";
import { FieldError, RefCallBack } from "react-hook-form";

export interface SelectProps extends RadixSelectProps {
  innerRef: RefCallBack;
  label?: string;
  placeholder?: string;
  error?: FieldError;
  options?: NameValueType[];
  onOpenChange?: (open: boolean) => void;
}

export type NameValueType = {
  name: string;
  value: string;
};
