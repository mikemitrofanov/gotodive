import Link from "next/link";
import style from "../styles/header.module.css";

export default function MenuItems(props) {
  const { children } = props;

  return (
    <Link href='#'>
      <a className='py-4 px-5 max-lg:py-0 max-lg:px-0'>{children}</a>
    </Link>
  );
}
