import styles from "../footer.module.css";

export default function Gallery() {

    return (
        <article className={`${styles.wrapper} ${styles.gallery}`}>
            <h1 className={styles.title}>Gallery</h1>
            <a className={styles.link} href='/gallery'>
                <img className={styles.img} alt='photo_gallery' src='/images/footer/gallery/img1.png'/>
                <img className={styles.img} alt='photo_gallery' src='/images/footer/gallery/img2.png'/>
                <img className={styles.img} alt='photo_gallery' src='/images/footer/gallery/img3.png'/>
                <img className={styles.img} alt='photo_gallery' src='/images/footer/gallery/img4.png'/>
                <img className={styles.img} alt='photo_gallery' src='/images/footer/gallery/img5.png'/>
                <img className={styles.img} alt='photo_gallery' src='/images/footer/gallery/img6.png'/>
                <img className={styles.img} alt='photo_gallery' src='/images/footer/gallery/img7.png'/>
                <img className={styles.img} alt='photo_gallery' src='/images/footer/gallery/img8.png'/>
            </a>
        </article>
    )
}
