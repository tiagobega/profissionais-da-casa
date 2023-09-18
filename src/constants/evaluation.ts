export const EVALUATION_STATUS = {
  APPROVED: "approved",
  REFUSED: "refused",
  PENDING: "pending",
} as const;

export type EvaluationStatus =
  (typeof EVALUATION_STATUS)[keyof typeof EVALUATION_STATUS];
