export interface SocialMedia {
  id: string;
  professionalId: string;
  name: string;
  link: string;
}

export type CreateSocialMediaData = {
  id: string;
};

export type UpdateSocialMediaData = {
  professionalId: string;
  name: string;
  link: string;
};

export type SingleSocialMediaData = {
  id: string;
};

export type DeleteSocialMediaData = {
  id: string;
};

export type AllSocialMediaResponse = {
  socialMedias: SocialMedia[];
};
