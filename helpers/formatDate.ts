export const formatDateToMMMdhm = (unformattedDate: Date) => unformattedDate
  .toLocaleDateString(undefined, {
    hour12: true,
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });