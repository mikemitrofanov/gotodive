export const switchLanguage = (languages) => {
  switch (languages) {
    case "ru":
      return 0;
    case "ukr":
      return 1;
    case "en":
      return 2;
    default:
      return 0;
  }
};