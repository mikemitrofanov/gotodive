import style from "../styles/header.module.css";
import Link from "next/link";

export default function MenuItems(props) {
  const { item } = props;

  return (
    <Link href='#'>
      <a>{item}</a>
    </Link>
  );
}
