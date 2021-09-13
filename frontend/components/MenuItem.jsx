import Link from "next/link";
import style from "../styles/header.module.css";

export default function MenuItems(props) {
  const { children } = props;

  return (
    <Link href='#'>
      <a>{children}</a>
    </Link>
  );
}
