import LinkLanguages from "./LinkLanguages";

export default function LinksLanguages({ isOpened }) {
  return (
    <>
      <LinkLanguages isOpened={isOpened} data_language='russian' language='RU' />
      <LinkLanguages isOpened={isOpened} data_language='ukrainian' language='UKR' />
      <LinkLanguages isOpened={isOpened} data_language='english' language='EN' />
    </>
  );
}
