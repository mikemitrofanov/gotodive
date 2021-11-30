import Link from "next/link";

export default function ListItemLink(props) {
    const {href, text, ...prop} = props;

    return (
        <Link href={href}>
            <a {...prop}>{text}</a>
        </Link>
    )
}
