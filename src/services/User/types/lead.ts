export interface Lead {
  id: string;
  professionalId: string;
  userId: string;
  name: string;
  description: string;
  createdAt: string;
}

export type CreateLeadData = {
  professionalId: string;
  userId: string;
  name: string;
  description: string;
};

export type UpdateLeadData = {
  id: string;
  currentProfessionalId: string;
  newProfessionalId: string;
  currentUserId: string;
  newUserId: string;
  name: string;
  description: string;
};

export type SingleLeadData = {
  id: string;
};

export type DeleteLeadData = {
  id: string;
};

export type AllLeadResponse = {
  leads: Lead[];
};
