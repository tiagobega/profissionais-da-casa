import { SubplanName } from "constants/subPlan";

export interface Subplan {
  id: string;
  name: SubplanName;
  isActive: boolean;
}

export type CreateSubplanData = {
  name: SubplanName;
  isActive: boolean;
};

export type UpdateSubplanData = Partial<Subplan> &
  Pick<Subplan, "id"> & {
    currentName: SubplanName;
    newName: SubplanName;
  };

export type DeleteSubplanData = Pick<Subplan, "id">;

export type SingleSubplanData = Pick<Subplan, "id"> | Pick<Subplan, "name">;
