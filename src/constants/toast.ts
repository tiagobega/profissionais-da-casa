export const TOAST_TYPES = {
  ALERT: "alert",
  ERROR: "error",
  INFO: "info",
  SUCCESS: "success",
} as const;

export const TOAST_SIZES = {
  BIG: "big",
  SMALL: "small",
} as const;

export const TOAST_ACTIONS = {
  DELETE: "DELETE",
  CLICK: "CLICK",
  CONFIRM: "CONFIRM",
} as const;

export type ToastTypes = typeof TOAST_TYPES[keyof typeof TOAST_TYPES];
export type ToastSizes = typeof TOAST_SIZES[keyof typeof TOAST_SIZES];
export type ToastActions = typeof TOAST_ACTIONS[keyof typeof TOAST_ACTIONS];
