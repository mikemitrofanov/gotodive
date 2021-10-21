import LinkLanguages from "./LinkLanguages";

export default function LinksLanguages({ isOpened, setLanguage }) {
  return (
    <>
      <LinkLanguages isOpened={isOpened} data_language='ru' language='RU' setLanguage={setLanguage} />
      <LinkLanguages isOpened={isOpened} data_language='ua' language='UKR' setLanguage={setLanguage} />
      <LinkLanguages isOpened={isOpened} data_language='en' language='EN' setLanguage={setLanguage} />
    </>
  );
}
