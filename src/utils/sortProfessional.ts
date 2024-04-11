import { Me, Professional } from "services/User/types";

export const sortFilterProfessional = (
  list: {
    professional: Professional;
    user: Me;
  }[],
  type: "name" | "date",
  query: string
) => {
  if (type == "date") {
    list.sort(function (a, b) {
      let keyA = new Date(a.professional.createdAt.toLocaleLowerCase());
      let keyB = new Date(b.professional.createdAt.toLocaleLowerCase());
      // Compare the 2 dates
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
  }
  if (type == "name") {
    list.sort(function (a, b) {
      let keyA = a.professional.name.toLocaleLowerCase();
      let keyB = b.professional.name.toLocaleLowerCase();
      // Compare the 2 dates
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
  }

  const filteredList = list.filter((el) =>
    el.professional.name.toLowerCase().includes(query.toLowerCase())
  );
  return filteredList;
};
