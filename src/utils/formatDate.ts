export const formatDate = (date?: string) => {
  if (!date) return "Data inválida";

  const stringoToDate = new Date(date);

  return new Intl.DateTimeFormat("pt-br").format(stringoToDate);
};