export interface PortfolioProject {
  id: string;
  name: string;
  professionalId: string;
  description: string;
  images: string;
  createdAt: string;
}

export type SinglePortfolioProjectData = {
  id: string;
};

export type UpdatePortfolioProjectData = Partial<
  Omit<PortfolioProject, "createdAt">
> &
  Pick<PortfolioProject, "id">;

export type DeletePortfolioProjectData = Pick<PortfolioProject, "id">;

export type CreatePortfolioProjectData = Omit<
  PortfolioProject,
  "id" | "createdAt"
>;

export type AllPortfolioProjectResponse = {
  portProjs: PortfolioProject[];
};
