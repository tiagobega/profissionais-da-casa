export interface Location {
  id: string;
  professionalId: string;
  state: string;
}

export type SingleLocationData = {
  id: string;
};

export type CreateLocationData = {
  professionalId: string;
  state: string;
};

export type CreateManyLocationData = {
  professionalId: string;
  /**
   * string separada por virgula
   * @example "SP,PR,RS"
   */
  states: string;
};

export type UpdateLocationData = {
  id: string;
  currentProfessionalId: string;
  newProfessionalId: string;
  state: string;
};

/**
 * TODO
 */
export type UpdateManyLocationData = {};

export type DeleteLocationData = {
  id: string;
};

/**
 * TODO
 */
export type DeleteManyLocationData = {};

export type CreateManyLocationResponse = {
  locations: Location[];
};

/**
 * TODO
 */
export type UpdateManyLocationResponse = {};

export type AllLocationResponse = {
  locations: Location[];
};
