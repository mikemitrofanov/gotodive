import "@fancyapps/ui";
import styles from "./gallery.module.css";

export default function Gallery() {
    return (
        <>
            <article className={styles.wrapper_images}>
                <a data-fancybox='gallery' data-src='/images/gallery/img1.png'>
                    <img className={styles.images} src='/images/gallery/img1.png'/>
                </a>
                <a data-fancybox='gallery' data-src='/images/gallery/img2.png'>
                    <img className={styles.images} src='/images/gallery/img2.png'/>
                </a>
            </article>
            <article className={styles.wrapper_images}>
                <a data-fancybox='gallery' data-src='/images/gallery/img3.png'>
                    <img className={styles.images} src='/images/gallery/img3.png'/>
                </a>
                <a data-fancybox='gallery' data-src='/images/gallery/img4.png'>
                    <img className={styles.images} src='/images/gallery/img4.png'/>
                </a>
            </article>
            <article className={styles.wrapper_images}>
                <a data-fancybox='gallery' data-src='/images/gallery/img5.png'>
                    <img className={styles.images} src='/images/gallery/img5.png'/>
                </a>
                <a data-fancybox='gallery' data-src='/images/gallery/img6.png'>
                    <img className={styles.images} src='/images/gallery/img6.png'/>
                </a>
            </article>
            <article className={styles.wrapper_images}>
                <a data-fancybox='gallery' data-src='/images/gallery/img7.png'>
                    <img className={styles.images} src='/images/gallery/img7.png'/>
                </a>
                <a data-fancybox='gallery' data-src='/images/gallery/img8.png'>
                    <img className={styles.images} src='/images/gallery/img8.png'/>
                </a>
            </article>
            <article className={styles.wrapper_images}>
                <a data-fancybox='gallery' data-src='/images/gallery/img9.png'>
                    <img className={styles.images} src='/images/gallery/img9.png'/>
                </a>
                <a data-fancybox='gallery' data-src='/images/gallery/img10.png'>
                    <img className={styles.images} src='/images/gallery/img10.png'/>
                </a>
            </article>
        </>
    );
}
