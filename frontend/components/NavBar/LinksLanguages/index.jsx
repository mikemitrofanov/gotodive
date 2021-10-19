import LinkLanguages from "./LinkLanguages";

export default function LinksLanguages({ isOpened, setLanguage }) {
  return (
    <>
      <LinkLanguages isOpened={isOpened} data_language='russian' language='RU' setLanguage={setLanguage} />
      <LinkLanguages isOpened={isOpened} data_language='ukrainian' language='UKR' setLanguage={setLanguage} />
      <LinkLanguages isOpened={isOpened} data_language='english' language='EN' setLanguage={setLanguage} />
    </>
  );
}
