export type NameValueType = {
  name: string;
  value: string;
};

export type ProjectType = {
  name: string;
  customer: string;
  professional: string;
  phone: string;
  email: string;
  status: "not-started" | "ongoing" | "complete";
};
