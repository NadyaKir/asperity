export const getColor = (type) => {
  switch (type) {
    case "Отгул":
      return "#FFB649";
    case "Отпуск":
      return "#DB4546";
    default:
      return;
  }
};
