import { ProfessionalPersonalInfo } from "pages/adm-professional-list/components/professionalList";
import { RatingType } from "pages/adm-rating-list";

export function filterProfessionalFunction(
  list: ProfessionalPersonalInfo[],
  query: string
): ProfessionalPersonalInfo[] {
  const queryRegex = new RegExp(query, "i");
  if (query?.length < 3 || query == null) return list;
  const filteredList = list?.filter((el) => {
    const values = Object.values(el);
    let occurences = 0;
    values.forEach((value) => {
      const stringifiedEntry = JSON.stringify(value);
      stringifiedEntry.toString().match(queryRegex) && occurences++;
    });
    return occurences > 0;
  });

  return filteredList;
}

export function filterRating(list: RatingType[], query: string): RatingType[] {
  const queryRegex = new RegExp(query, "i");
  if (query?.length < 3 || query == null) return list;
  const filteredList = list?.filter((el) => {
    const values = Object.values(el);
    let occurences = 0;
    values.forEach((value) => {
      const stringifiedEntry = JSON.stringify(value);
      stringifiedEntry.toString().match(queryRegex) && occurences++;
    });
    return occurences > 0;
  });

  return filteredList;
}
