import { Lead } from "services/User/types";

export const filteredLeadsList = (list: Lead[], query: string) => {
  console.log(list);

  const sortedLeads = list.sort(function (a, b) {
    let keyA = new Date(a.createdAt);
    let keyB = new Date(b.createdAt);
    // Compare the 2 dates
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
  });

  console.log(sortedLeads);

  if (query.length > 3) return sortedLeads;

  const filteredList = sortedLeads.filter((el) =>
    el.name.toLowerCase().includes(query.toLowerCase())
  );
  return filteredList;
};
