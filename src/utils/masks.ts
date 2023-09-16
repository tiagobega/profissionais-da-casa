const phone8 = [
  "(",
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const phone9 = [
  "(",
  /[0-9]/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const cpf = [
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];

const zipCode = [/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/];
const date = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/];

const cnpj = [
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  "/",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];

export const mask = {
  cpf,
  phone8,
  phone9,
  zipCode,
  date,
  cnpj,
};

export const parsePhone = (phone: string) => {
  return phone.replaceAll(/[() -]/g, "");
};

export const parseCPF = (cpf: string) => {
  return cpf.replaceAll(/[.-]/g, "");
};

export const parseCEP = (cep: string) => {
  return cep.replaceAll(/[-]/g, "");
};

export const parseCNPJ = (cnpj: string) => {
  return cnpj.replaceAll(/[./-]/g, "");
};
