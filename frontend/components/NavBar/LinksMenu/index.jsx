import { useTranslation } from "react-i18next";
import CategoryServicesDropdown from "./CategoryServicesDropdown";

import LinkMenu from "./LinkMenu";

export default function LinksMenu() {
  const { t } = useTranslation("translation", { useSuspense: false });

  return (
    <>
      <LinkMenu href='/' name={t("navBar.home")} />
      <CategoryServicesDropdown />
      <LinkMenu href='/gallery' name={t("navBar.gallery")} />
      <LinkMenu href='/prices' name={t("navBar.price")} />
    </>
  );
}
