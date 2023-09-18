export type FaqQuestion = {
  id: string;
  blockId: string;
  name: string;
  description: string;
};

export type CreateFaqQuestionData = {
  blockId: string;
  name: string;
  description: string;
};

export type UpdateFaqQuestionData = Partial<
  Omit<FaqQuestion, "blockId" | "id" | "name">
> & {
  currentBlockId: string;
  currentName: string;
  newBlockId: string;
  newName: string;
} & (Pick<FaqQuestion, "id"> | Pick<FaqQuestion, "name">);

export type DeleteFaqQuestionData =
  | Pick<FaqQuestion, "id">
  | Pick<FaqQuestion, "name">;

export type SingleFaqQuestionData =
  | Pick<FaqQuestion, "id">
  | Pick<FaqQuestion, "name">;

export type AllFaqQuestionResponse = {
  FaqQuestions: FaqQuestion[];
};

// FAQ BLOCK

export type FaqBlock = {
  id: string;
  name: string;
  faqQuestions: FaqQuestion[];
};

export type CreateFaqBlockData = {
  name: string;
};

export type UpdateFaqBlockData = {
  currentName: string;
  newName: string;
} & (Pick<FaqBlock, "id"> | Pick<FaqBlock, "name">);

export type DeleteFaqBlockData = Pick<FaqBlock, "id"> | Pick<FaqBlock, "name">;

export type SingleFaqBlockData = Pick<FaqBlock, "id"> | Pick<FaqBlock, "name">;

export type AllFaqBlockResponse = {
  faqBlocks: FaqBlock[];
};
