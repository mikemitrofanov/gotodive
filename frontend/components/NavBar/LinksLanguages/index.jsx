import LinkLanguages from "./LinkLanguages";

export default function LinksLanguages({ isOpened }) {
  return (
    <>
      <LinkLanguages isOpened={isOpened} language='RU' />
      <LinkLanguages isOpened={isOpened} language='UKR' />
      <LinkLanguages isOpened={isOpened} language='EN' />
    </>
  );
}
