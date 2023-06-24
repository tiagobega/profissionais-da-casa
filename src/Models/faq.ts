export type Category = {
  title: string;
  description: string;
  id: string;
};

export type Question = {
  title: string;
  description: string;
  id: string;
  category: string;
};
