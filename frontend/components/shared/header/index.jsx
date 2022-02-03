import styles from "./header.module.css";
import Burger from "./components/burger";
import Navbar from "./components/navbar";
import SearchInput from "./components/searchInput";
import LanguageSwitchers from "./components/languageSwitchers";
import Container from "@/components/shared/Container";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function Header({categories}) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    useEffect(() => {
        setIsOpen(false)
    }, [router])
    return (
        <Container background={styles.background} container={styles.header}>
            <Burger isOpen={isOpen} setIsOpen={setIsOpen} categories={categories}/>
            <Navbar categories={categories}/>
            <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <LanguageSwitchers/>
        </Container>
    )
}
