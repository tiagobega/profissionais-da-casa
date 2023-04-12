import type { TextProps } from "./types";
import React from "react";
import PropTypes from "prop-types";
// import cn from "classnames";

import "./index.scss";

const Text = <E extends React.ElementType = "div">({
  children,
  className,
  weight,
  family,
  type,
  onClick,
  as,
  align,
  caretTransparent = true,
  ...rest
}: TextProps<E>) => {
  const Component = as || "div";

  return (
    <Component
      onClick={onClick}
      className={
        "Text"
        // weight && `w-${weight}`,
        // family && `f-${family}`,
        // align && `align-${align}`,
        // caretTransparent && `caretTransparent`,
        // className
      }
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Text;
