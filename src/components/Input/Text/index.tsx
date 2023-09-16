import React, { forwardRef } from "react";

import type { InputProps } from "./types";
import { InputContainer } from "./styles";

export const TextInput = forwardRef(
  (
    { type = "text", label, error, width, maskedInput, ...rest }: InputProps,
    forwardedRef: React.LegacyRef<HTMLInputElement>
  ) => {
    return (
      <InputContainer width={width}>
        {label && <label htmlFor={rest.name}>{label}</label>}

        <input type={type} id={rest.name} {...rest} ref={forwardedRef} />

        {error && (
          <p aria-errormessage={error.message} role="alert">
            {error.message}
          </p>
        )}
      </InputContainer>
    );
  }
);
