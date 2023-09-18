export const SUB_PLAN = {
  STARTER: "starter",
};

export type SubplanName = (typeof SUB_PLAN)[keyof typeof SUB_PLAN];
