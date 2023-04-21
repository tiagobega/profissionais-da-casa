import React, { forwardRef } from "react";

import type { RadioGroupProps } from "./types";
import type { ForwardedRef } from "react";

import { FlexBox } from "components/FlexBox";
import { RadioGroupContainer } from "./styles";

export const RadioGroup = forwardRef(
  (
    {
      type = "radio",
      options = [],
      groupLegend,
      error,
      ...rest
    }: RadioGroupProps,
    forwardedRef: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <RadioGroupContainer role="radiogroup">
        {groupLegend && <legend>{groupLegend}</legend>}
        <FlexBox gap={2}>
          {options.map((option) => (
            <FlexBox key={option.label} gap={0.5} alignItems="center">
              <input
                type={type}
                value={option.value}
                id={option.value}
                ref={forwardedRef}
                {...rest}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </FlexBox>
          ))}
        </FlexBox>
        {error && (
          <p aria-errormessage={error.message} role="alert">
            {error.message}
          </p>
        )}
      </RadioGroupContainer>
    );
  }
);
