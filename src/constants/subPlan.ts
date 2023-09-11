export const SUB_PLAN = {
  STARTER: "starter",
};

export type SubPlanName = (typeof SUB_PLAN)[keyof typeof SUB_PLAN];
