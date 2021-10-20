import { useRouter } from "next/router";
import LinkLanguages from "./LinkLanguages";

export default function LinksLanguages({ isOpened, setLanguage }) {
  const router = useRouter();
  const { data_language } = router.query;

  return (
    <>
      <LinkLanguages isOpened={isOpened} data_language='ru' language='RU' setLanguage={setLanguage} />
      <LinkLanguages isOpened={isOpened} data_language='ua' language='UKR' setLanguage={setLanguage} />
      <LinkLanguages isOpened={isOpened} data_language='en' language='EN' setLanguage={setLanguage} />
    </>
  );
}
