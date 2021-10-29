import { useTranslation } from "next-i18next";
import CategoryServicesDropdown from "./CategoryServicesDropdown";
import LinkMenu from "./LinkMenu";

export default function LinksMenu() {
  const { t } = useTranslation("common");

  return (
    <>
      <LinkMenu href='/' name={t("navBar.home")} />
      <CategoryServicesDropdown />
      <LinkMenu href='/gallery' name={t("navBar.gallery")} />
      <LinkMenu href='/prices' name={t("navBar.price")} />
    </>
  );
}
