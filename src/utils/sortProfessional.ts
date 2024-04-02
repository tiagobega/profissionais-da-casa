import { Me, Professional } from "services/User/types";

export const sortFilterProfessional = (
  list: {
    professional: Professional;
    user: Me;
  }[],
  type: "name" | "date",
  query: string
) => {
  console.log(list[0]);

  const key: keyof Professional = type === "name" ? "name" : "createdAt";

  const sortedLeads = list.sort(function (a, b) {
    let keyA = new Date(a.professional[key].toLocaleLowerCase());
    let keyB = new Date(b.professional[key].toLocaleLowerCase());
    // Compare the 2 dates
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
  });

  console.log(sortedLeads);

  if (query.length > 3) return sortedLeads;

  const filteredList = sortedLeads.filter((el) =>
    el.professional.name.toLowerCase().includes(query.toLowerCase())
  );
  return filteredList;
};
