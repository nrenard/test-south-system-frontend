export const toLocaleString = date => {
  return `${new Date(date).toLocaleDateString()} ${new Date(
    date
  ).toLocaleTimeString()}`;
};
