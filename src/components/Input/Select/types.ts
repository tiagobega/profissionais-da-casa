import { FormTestData } from "components/FormTest";
import { FieldError, Control, RefCallBack } from "react-hook-form";



export interface SelectProps {
  label: string;
  selectName: FormFields;
  error: FieldError | undefined;
  options: NameValueType[];
  control: Control<FormTestData>;
}

export interface SelectInputProps {
  forwardedRef: RefCallBack;
  label: string;
  error: FieldError | undefined;
  options: NameValueType[];
  onValueChange: (...event: any[]) => void;
  value: string;
}

export type NameValueType = {
  name: string;
  value: string;
};

type Unionize<T extends object> = {
  [k in keyof T]: k;
}[keyof T];

export type FormFields = Unionize<FormTestData>;
