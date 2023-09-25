export interface PortfolioProject {
  id: string;
  name: string;
  professionalId: string;
  description: string;
  images: string[];
}

export type SinglePortfolioProjectData = {
  id: string;
};

export type UpdatePortfolioProjectData = Partial<PortfolioProject> &
  Pick<PortfolioProject, "id">;

export type DeletePortfolioProjectData = {
  id: string;
};

export type CreatePortfolioProjectData = Omit<PortfolioProject, "id">;

export type AllPortfolioProjectResponse = {
  portProjs: PortfolioProject[];
};
