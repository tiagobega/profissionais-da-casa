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
      direction = "row",
      error,
      groupName,
      bold = false,
      gap = 1,
      ...rest
    }: RadioGroupProps,
    forwardedRef: ForwardedRef<HTMLInputElement>
  ) => {
    const weight = bold ? "bold" : "normal";
    return (
      <RadioGroupContainer role="radiogroup">
        {groupLegend && <legend>{groupLegend}</legend>}
        <FlexBox gap={gap} direction={direction}>
          {options.map((option) => (
            <FlexBox key={option.value} gap={0.5} alignItems="center">
              <input
                type={type}
                value={option.value}
                id={option.value}
                ref={forwardedRef}
                name={groupName}
                {...rest}
              />
              <label htmlFor={option.value} style={{ fontWeight: weight }}>
                {option.label}
              </label>
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
