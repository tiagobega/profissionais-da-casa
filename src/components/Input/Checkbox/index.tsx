import React, { forwardRef } from "react";

import type { CheckboxProps } from "./types";
import type { ForwardedRef } from "react";

import { FlexBox } from "components/FlexBox";
import { CheckboxContainer } from "./styles";

export const Checkbox = forwardRef(
  (
    {
      type = "checkbox",
      label = "item",
      subject = "subject",
      error,
      ...rest
    }: CheckboxProps,
    forwardedRef: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <CheckboxContainer role="checkbox">
        <FlexBox gap={0.5} alignItems="center">
          <input type={type} {...rest} id={subject} ref={forwardedRef} />
          <label htmlFor={subject}>{label}</label>
        </FlexBox>
        {error && (
          <p aria-errormessage={error.message} role="alert">
            {error.message}
          </p>
        )}
      </CheckboxContainer>
    );
  }
);
