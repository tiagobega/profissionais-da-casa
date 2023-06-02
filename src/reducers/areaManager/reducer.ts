import { Actions } from "./actions";

export type areaType = {
  state: string;
  city: string;
  location: string;
  id: string;
};

export type areaStateType = {
  activeArea: areaType | null;
  areaList: areaType[];
};

export const reducerFunction = (state: areaStateType, action: Actions) => {
  const { payload, type } = action;
  switch (type) {
    case "ADD_AREA_TO_LIST":
      return { ...state, areaList: [...state.areaList, payload] };
      break;
    case "DELETE_AREA_FROM_LIST":
      return {
        ...state,
        areaList: state.areaList.filter((el) => el != payload),
      };
      break;
    case "SELECT_AREA_TO_EDIT":
      {
        const areaToBeActive = state.areaList.find(
          (el) => el.id === payload.id
        );
        return { ...state, activeArea: areaToBeActive || null };
      }
      break;
    case "UPDATE_AREA":
      return {
        ...state,
        areaList: state.areaList
          .filter((el) => el.id != payload.id)
          .push(payload),
      };
      break;
    default:
      break;
  }
};
