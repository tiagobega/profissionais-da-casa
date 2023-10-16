export function formatShortDate(date: string) {
  const numberDate = new Date(date);
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "numeric",
    year: "numeric",
  }).format(numberDate);
}

export function formatLongDate(date: string) {
  const numberDate = new Date(date);
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(numberDate);
}
