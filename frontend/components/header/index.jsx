import styles from "./header.module.css";
import Burger from "./components/burger";
import Navbar from "./components/navbar";
import SearchInput from "./components/searchInput";
import LanguageSwitchers from "./components/languageSwitchers";
import Container from "@/components/shared/Container";
import {useState} from "react";
import {useRouter} from "next/router";
import {useGetAllCategoriesQuery} from "@/redux/slices/apiSlice";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    const {data: categories} = useGetAllCategoriesQuery(router.locale);

    return (
        <Container background={styles.background} container={styles.container}>
            <Burger isOpen={isOpen} setIsOpen={setIsOpen} categories={categories}/>
            <Navbar categories={categories}/>
            <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <LanguageSwitchers/>
        </Container>
    )
}
