import React, { Ref, forwardRef } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { SelectContainer } from "./styles";
import type { SelectProps } from "./types";
import { FlexBox } from "components/FlexBox";

export const Select = forwardRef(
  (props: SelectProps, innerRef: Ref<HTMLButtonElement>) => {
    
    const {
      placeholder = "Escolha uma opção",
      label,
      error,
      options = [],
      name,
      value,
    } = props;

    return (
      <SelectContainer>
        {label && <label htmlFor={name}>{label}</label>}
        <FlexBox gap={0.5} alignItems="center">
          <SelectPrimitive.Root
            {...props}
          >
            <SelectPrimitive.Trigger
              ref={innerRef}
              id={name}
              className="text-md border-solid border-2 border-slate-500 px-2"
            >
              <SelectPrimitive.Value asChild>
                <span>
                  {options.find((option) => option.value == value)?.name ??
                    placeholder}
                </span>
              </SelectPrimitive.Value>
              <SelectPrimitive.Icon />
            </SelectPrimitive.Trigger>

            <SelectPrimitive.Portal>
              <SelectPrimitive.Content className="border-solid border-2 border-slate-500 bg-white p-2">
                <SelectPrimitive.ScrollUpButton />
                <SelectPrimitive.Viewport>
                  {options.map((option) => (
                    <SelectPrimitive.Item
                      key={option.value}
                      value={option.value}
                    >
                      <SelectPrimitive.ItemText>
                        {option.name}
                      </SelectPrimitive.ItemText>
                      <SelectPrimitive.ItemIndicator />
                    </SelectPrimitive.Item>
                  ))}
                  <SelectPrimitive.Separator />
                </SelectPrimitive.Viewport>
                <SelectPrimitive.ScrollDownButton />
              </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
          </SelectPrimitive.Root>
        </FlexBox>
        {error && (
          <p aria-errormessage={error.message} role="alert">
            {error.message}
          </p>
        )}
      </SelectContainer>
    );
  }
);
