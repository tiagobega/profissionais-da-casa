export interface Location {}

export type CreateLocationData = {
  id: string;
  state: string;
};

export type CreateManyLocationData = {
  id: string;
  /**
   * string separada por virgula
   * @example "SP,PR,RS"
   */
  states: string;
};
