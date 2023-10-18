import type { ToastContextI, Toast } from "contexts/Toast";
import React, { useEffect, useState } from "react";
import cn from "classnames";

import { TOAST_ACTIONS, ToastTypes } from "../../constants/toast";

import "./index.scss";

import image_info from "./images/info.svg";

const imageMap: { [key in ToastTypes]: string } = {
  alert: image_info,
  error: image_info,
  info: image_info,
  success: image_info,
};

export type ToastWrapperProps = Required<ToastContextI>;

export const ToastWrapper: React.FC<ToastWrapperProps> = ({
  currentToasts,
}) => {
  return (
    <div className="ToastWrapper">
      <ul className="ToastWrapper__List">
        {[...currentToasts.values()].map(({ ...rest }) => (
          <ToastItem {...rest} key={rest.timestamp} />
        ))}
      </ul>
    </div>
  );
};

const ToastItem: React.FC<Toast> = (props) => {
  const [canAnimate, setCanAnimate] = useState(false);

  const {
    action,
    type,
    size,
    timer,
    autoDestroy,
    message,
    animated,
    title,
    deleteToast,
  } = props;

  const handleClick = () => {
    switch (action) {
      case TOAST_ACTIONS.DELETE:
        deleteToast();
        props.onDelete && props.onDelete();
        return;

      case TOAST_ACTIONS.CLICK:
        props.onClick && props.onClick();
        props.onClose && props.onClose();
        return;

      case TOAST_ACTIONS.CONFIRM:
        return;
    }
  };

  const durationVelocity = 200;
  const minDuration = 10 * durationVelocity;
  const maxDuration = 75 * durationVelocity;
  const duration = message.length * durationVelocity;

  useEffect(() => {
    if (!canAnimate) setTimeout(() => setCanAnimate(true), 0);
  }, []);

  return (
    <li
      className={cn(
        "ToastItem",
        {
          animate: canAnimate && animated,
        },
        `size-${size}`
      )}
      onClick={handleClick}
    >
      <div className={cn("ToastItem__Content", `type-${type}`, `size-${size}`)}>
        <div
          className={cn(
            "ToastItem__Content__Icon",
            `type-${type}`,
            `size-${size}`,
            {
              animate: canAnimate && animated,
            }
          )}
        >
          <img src={imageMap[type]} loading="lazy" />
        </div>

        <div className="ToastItem__Content__Message">
          {title && <h3 className="ToastItem__Title">{title}</h3>}

          <span
            style={{
              animationDuration: `${Math.min(
                maxDuration,
                Math.max(minDuration, duration)
              )}ms`,
            }}
          >
            {message}
            <span className="repeater">{message}</span>
          </span>
        </div>

        {autoDestroy && (
          <div
            className="ToastItem__Content__Destroy"
            style={{ animationDuration: `${timer}ms` }}
          />
        )}
      </div>
    </li>
  );
};
