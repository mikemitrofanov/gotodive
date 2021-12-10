import styles from "./footer.module.css";
import Categories from "./items/Categories";
import ContactUs from "./items/ContactUs";
import Gallery from "./items/Gallery";
import Social from "./items/Social";
import {useGetPhotoGalleryQuery} from "@/redux/slices/apiSlice";


export default function Footer() {
    const {data: photoList} = useGetPhotoGalleryQuery();

    return (
        <section className={styles.background}>
            <div className={styles.container}>
                <ContactUs />
                <Categories />
                <Social />
                <Gallery photoList={photoList}/>
            </div>
        </section>
    )
}
