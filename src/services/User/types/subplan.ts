import { SubplanName } from "constants/subPlan";

export interface Subplan {
  id: string;
  name: SubplanName;
  active: boolean;
  createdAt: string;
}

export type CreateSubplanData = Omit<Subplan, "id" | "createdAt">;

export type UpdateSubplanData =
  | ({ newName?: SubplanName; active?: boolean } & Pick<Subplan, "id">)
  | (Pick<Subplan, "name"> & { currentName: SubplanName });

export type DeleteSubplanData = Pick<Subplan, "id"> | Pick<Subplan, "name">;

export type SingleSubplanData = Pick<Subplan, "id"> | Pick<Subplan, "name">;
