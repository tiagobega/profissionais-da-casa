import { Evaluation } from "services/User/types";

export const evaluationAverage = (evaluations: Evaluation[]) => {
  if (!evaluations.length) return 0;

  let sum = 0;
  evaluations.forEach((item) => {
    if (item.status !== "approved") return;
    sum = sum + evaluationSingleAverage(item);
  });
  return sum / evaluations.length;
};

export const evaluationSingleAverage = (evaluation: Evaluation) => {
  const average =
    (evaluation.cost +
      evaluation.deadlines +
      evaluation.functionality +
      evaluation.quality +
      evaluation.relationship) /
    5;
  return average;
};

export const approvedEvaluations = (evaluations: Evaluation[]) => {
  const approved = evaluations.filter((el) => el.status == "approved");
  const catAvg = evaluationCategoryAverage(approved);
  const totalAverage = evaluationAverage(evaluations);
  return {
    evaluations: approved,
    average: totalAverage,
    quantity: approved.length,
    cost: catAvg.cost,
    quality: catAvg.quality,
    relationship: catAvg.relationship,
    functionality: catAvg.functionality,
    deadlines: catAvg.deadlines,
  };
};

export const evaluationCategoryAverage = (evaluations: Evaluation[]) => {
  let cost = 0;
  let quality = 0;
  let relationship = 0;
  let deadlines = 0;
  let functionality = 0;

  evaluations.forEach((item) => {
    cost = cost + item.cost;
    quality = quality + item.quality;
    functionality = functionality + item.functionality;
    deadlines = deadlines + item.deadlines;
    relationship = relationship + item.relationship;
  });

  return {
    cost: cost / evaluations.length,
    quality: quality / evaluations.length,
    deadlines: deadlines / evaluations.length,
    functionality: functionality / evaluations.length,
    relationship: relationship / evaluations.length,
  };
};
