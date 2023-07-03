import React, { createContext, useContext, useState } from "react";

import {
  TOAST_TYPES,
  ToastTypes,
  TOAST_SIZES,
  ToastSizes,
  TOAST_ACTIONS,
  ToastActions,
} from "../../constants/toast";
import { ToastWrapper } from "../../components/toast";

export interface ToastInterface {
  action: ToastActions;
  type: ToastTypes;
  size: ToastSizes;
  timer: number;
  autoDestroy: boolean;
  message: string;
  timestamp: number;
  animated: boolean;
  title?: string;
  deleteToast: () => void;
}

type OptionsToOmit = "message" | "timestamp" | "animated" | "deleteToast";

export type ToastOptions =
  | Partial<Omit<DeleteToast, OptionsToOmit>>
  | Partial<Omit<ConfirmToast, OptionsToOmit>>
  | Partial<Omit<ClickToast, OptionsToOmit>>;

export type Toast = DeleteToast | ConfirmToast | ClickToast;

export interface DeleteToast extends ToastInterface {
  action: "DELETE";
  onDelete?: () => void;
}

export interface ConfirmToast extends ToastInterface {
  action: "CONFIRM";
  onConfirm?: () => void;
  onReject?: () => void;
}

export interface ClickToast extends ToastInterface {
  action: "CLICK";
  onClick?: () => void;
  onClose?: () => void;
}

export interface ToastContextI {
  currentToasts: Set<Toast>;
  addToast?(message: string, options?: ToastOptions): Toast;
  removeToast?(timestamp?: number): void;
}

export interface ToastProviderProps {
  children: React.ReactNode;
}

const initialValues: ToastContextI = {
  currentToasts: new Set(),
};

const animationDuration = 400;

export const ToastContext = createContext<ToastContextI>(initialValues);

export const ToastContextProvider = ({ children }: ToastProviderProps) => {
  const [currentToasts, setCurrentToasts] = useState<Set<Toast>>(new Set());

  const addToast = (message: string, options: ToastOptions = {}) => {
    options.action ??= TOAST_ACTIONS.DELETE;

    const {
      action,
      type = TOAST_TYPES.INFO,
      size = TOAST_SIZES.SMALL,
      autoDestroy = false,
      timer = 3000,
      title,
    } = options;

    const timestamp = new Date().getTime();

    let toast: Toast;

    const sharedProps = {
      type,
      size,
      autoDestroy,
      timer,
      title,
      message,
      timestamp,
      animated: true,
      deleteToast: () => removeToast(timestamp),
    };

    switch (action) {
      case TOAST_ACTIONS.DELETE:
        toast = {
          action,
          ...sharedProps,
          onDelete: options.onDelete,
        };

        break;

      case TOAST_ACTIONS.CONFIRM:
        toast = {
          action,
          ...sharedProps,
          onConfirm: options.onConfirm,
          onReject: options.onReject,
        };
        break;

      case TOAST_ACTIONS.CLICK:
        toast = {
          action,
          ...sharedProps,
          onClick: options.onClick,
          onClose: options.onClose,
        };
    }

    setCurrentToasts((currentToasts) => {
      currentToasts.add(toast);
      return new Set(currentToasts);
    });

    if (autoDestroy) {
      setTimeout(() => {
        toast.deleteToast();
      }, timer);
    }

    return toast;
  };

  const removeToast = (timestamp: number) => {
    setCurrentToasts((currentToasts) => {
      const founded = [...currentToasts].find((toast) => {
        return timestamp === toast.timestamp;
      });

      if (!founded) return currentToasts;

      founded.animated = false;
      return new Set(currentToasts);
    });

    setTimeout(
      () =>
        setCurrentToasts((currentToasts) => {
          const founded = [...currentToasts].find((toast) => {
            return timestamp === toast.timestamp;
          });

          if (!founded) return currentToasts;

          currentToasts.delete(founded);
          return new Set(currentToasts);
        }),
      animationDuration
    );
  };

  return (
    <ToastContext.Provider value={{ currentToasts, addToast, removeToast }}>
      <ToastWrapper
        currentToasts={currentToasts}
        addToast={addToast}
        removeToast={removeToast}
      />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const { addToast, removeToast, currentToasts } = useContext(ToastContext);

  return {
    addToast: addToast!,
    removeToast: removeToast!,
    currentToasts,
  };
};
