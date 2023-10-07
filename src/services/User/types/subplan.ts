import { SubplanName } from "constants/subPlan";

export interface Subplan {
  id: string;
  name: SubplanName;
  active: boolean;
}

export type CreateSubplanData = {
  name: SubplanName;
  active: boolean;
  createdAt: string;
};

export type UpdateSubplanData = Partial<Subplan> &
  Pick<Subplan, "id"> & {
    currentName: SubplanName;
    newName: SubplanName;
  };

export type DeleteSubplanData = Pick<Subplan, "id">;

export type SingleSubplanData = Pick<Subplan, "id"> | Pick<Subplan, "name">;
