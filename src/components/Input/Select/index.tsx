import React, { FC, Ref, forwardRef, useEffect } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Controller } from "react-hook-form";
import { CaretDown } from "@phosphor-icons/react";

import { SelectContainer } from "./styles";
import type { SelectInputProps, SelectProps } from "./types";
import { FlexBox } from "components/FlexBox";

export const SelectInput = forwardRef(
  ({ ...props }: SelectInputProps, forwardedRef: Ref<HTMLButtonElement>) => {
    useEffect(() => {
      console.log(props.value);
    }, []);
    return (
      <SelectContainer>
        <FlexBox gap={0.5} alignItems="center">
          <SelectPrimitive.Root {...props}>
            <SelectPrimitive.Trigger ref={forwardedRef}>
              {props.value ?? props.label}
              <SelectPrimitive.Value asChild />
              <SelectPrimitive.Icon>
                <CaretDown size={14} />
              </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>

            <SelectPrimitive.Portal>
              <SelectPrimitive.Content>
                <SelectPrimitive.Viewport>
                  <SelectPrimitive.Group>
                    <SelectPrimitive.Label>Escolha um</SelectPrimitive.Label>
                    {props.options.map((op) => (
                      <SelectPrimitive.Item value={op.value} key={op.name}>
                        {op.name}
                        <SelectPrimitive.ItemIndicator />
                      </SelectPrimitive.Item>
                    ))}
                  </SelectPrimitive.Group>
                </SelectPrimitive.Viewport>
              </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
          </SelectPrimitive.Root>
        </FlexBox>
        {props.error && (
          <p aria-errormessage={props.error.message} role="alert">
            {props.error.message}
          </p>
        )}
      </SelectContainer>
    );
  }
);

export const Select: FC<SelectProps> = ({
  control,
  selectName,
  options,
  error,
  label,
}) => {
  return (
    <Controller
      control={control}
      name={selectName}
      render={({ field: { onChange, value, ref } }) => (
        <SelectInput
          onValueChange={onChange}
          value={value?.toString()}
          forwardedRef={ref}
          options={options}
          error={error}
          label={label}
        />
      )}
    />
  );
};
