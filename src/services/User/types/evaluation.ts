import { EvaluationStatus } from "constants/evaluation";
import { Me } from "./user";
import { Professional } from "./professional";

/**
 * Profile evaluation from user
 */
export interface Evaluation {
  id: string;
  professionalId: string;
  userId: string;
  description: string;
  cost: number;
  deadlines: number;
  functionality: number;
  quality: number;
  relationship: number;
  status: EvaluationStatus;
  createdAt: string;

  userRel: Me;
  professionalProfileRel: Professional;
}

/**
 * Data to create evaluation
 */
export type CreateEvaluationData = Omit<
  Evaluation,
  "id" | "createdAt" | "userRel" | "professionalProfileRel"
>;

/**
 * Data to update Evaluation
 */
export type UpdateEvaluationData = Partial<Evaluation> & Pick<Evaluation, "id">;

/**
 * Data to delete Evaluation
 */
export type DeleteEvaluationData = Pick<Evaluation, "id">;

/**
 * Data to get single Evaluation
 */
export type SingleEvaluationData = Pick<Evaluation, "id">;

/**
 * Response for all Evaluations
 */
export type AllEvaluationResponse = {
  evaluations: Evaluation[];
};
