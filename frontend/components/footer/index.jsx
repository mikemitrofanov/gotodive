import styles from "./footer.module.css";
import Categories from "./items/Categories";
import ContactUs from "./items/ContactUs";
import Gallery from "./items/Gallery";
import Social from "./items/Social";
import {useTranslation} from "next-i18next";
import {useGetPhotoGalleryQuery} from "../../redux/slices/apiSlice";

export default function Footer() {
    const {t} = useTranslation("common");
    const {data: photoList} = useGetPhotoGalleryQuery();

    return (
        <section className={styles.background}>
            <div className={styles.container}>
                <ContactUs t={t}/>
                <Categories t={t}/>
                <Social t={t}/>
                <Gallery t={t} photoList={photoList}/>
            </div>
        </section>
    )
}
