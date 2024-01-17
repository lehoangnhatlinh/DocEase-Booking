export const formatDate = (date, config) => {
  const defaultOptions = { month: "short", day: "numeric", year: "numeric" };
  const options = config ? config : defaultOptions;

  return new Date(date).toLocaleDateString("en-US", options);
};
