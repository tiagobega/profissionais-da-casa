export enum WorkingAreaActionTypes {
  ADD_AREA_TO_LIST = "ADD_AREA_TO_LIST",
  SELECT_AREA_TO_EDIT = "SELECT_AREA_TO_EDIT",
  UPDATE_AREA = "UPDATE_AREA",
  DELETE_AREA_FROM_LIST = "DELETE_AREA_FROM_LIST",
}

export type Actions =
  | {
      type: "ADD_AREA_TO_LIST";
      payload: { city: string; state: string; location: string; id: string };
    }
  | {
      type: "DELETE_AREA_FROM_LIST";
      payload: { id: string };
    }
  | {
      type: "SELECT_AREA_TO_EDIT";
      payload: { id: string };
    }
  | {
      type: "UPDATE_AREA";
      payload: { city: string; state: string; location: string; id: string };
    };
