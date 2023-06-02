import React, { forwardRef } from "react";

import type { ForwardedRef } from "react";
import type { InputProps } from "./types";
import { InputContainer } from "./styles";

export const Textarea = forwardRef(
  (
    { label, error, ...rest }: InputProps,
    forwardedRef: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <InputContainer>
        {label && <label htmlFor={rest.name}>{label}</label>}
        <textarea rows={6} id={rest.name} ref={forwardedRef} />
        {error && (
          <p aria-errormessage={error.message} role="alert">
            {error.message}
          </p>
        )}
      </InputContainer>
    );
  }
);
