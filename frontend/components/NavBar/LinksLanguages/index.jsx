import LinkLanguages from "./LinkLanguages";

export default function LinksLanguages({ setLanguage }) {
  return (
    <>
      <LinkLanguages data_language='ru' language='RU' setLanguage={setLanguage} />
      <LinkLanguages data_language='ua' language='UA' setLanguage={setLanguage} />
      <LinkLanguages data_language='en' language='EN' setLanguage={setLanguage} />
    </>
  );
}
