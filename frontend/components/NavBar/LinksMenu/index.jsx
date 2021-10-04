import CategoryServicesDropdown from "../CategoryServicesDropdown";
import LinkMenu from "../LinkMenu";

export default function LinksMenu({ isOpened, categories }) {
  return (
    <>
      <LinkMenu isOpened={isOpened} href='/' name='Главная' />
      {categories.map((category) => (
        <CategoryServicesDropdown
          category={category}
          key={category.title}
          isOpened={isOpened}
        />
      ))}
      <LinkMenu isOpened={isOpened} href='/gallery' name='Галерея' />
      <LinkMenu isOpened={isOpened} href='/prices' name='Прайс' />
    </>
  );
}
