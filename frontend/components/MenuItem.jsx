import style from "../styles/header.module.css";
import Link from "next/link";

export default function MenuItems(props) {
  const { children } = props;

  return (
    <Link href='#'>
      <a>{children}</a>
    </Link>
  );
}
