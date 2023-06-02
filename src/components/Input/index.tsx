import { Checkbox } from "./Checkbox";
import { RadioGroup } from "./Radio";
import { TextInput } from "./Text";
import { Select } from "./HTMLSelect";
import { FileInput } from "./FileInput";
import { Textarea } from "./Textarea";
// export * from "./Checkbox";
// export * from "./Radio";

const Input = {
  Checkbox: Checkbox,
  Radio: RadioGroup,
  Text: TextInput,
  Select: Select,
  File: FileInput,
  Area: Textarea,
};

export default Input;
