import "@fancyapps/ui";
import styles from "./gallery.module.css";

export default function Gallery() {
  return (
    <>
      <article className={styles.wrapper_images}>
        <a data-fancybox='' data-src='images/footer/fancybox_photo/img8_big.png'>
          <img className={styles.images} src='images/gallery/img1.png' />
        </a>
        <a data-fancybox='' data-src='images/footer/fancybox_photo/img7_big.png'>
          <img className={styles.images} src='images/gallery/img2.png' />
        </a>
      </article>
      <article className={styles.wrapper_images}>
        <a data-fancybox='' data-src='images/footer/fancybox_photo/img6_big.png'>
          <img className={styles.images} src='images/gallery/img3.png' />
        </a>
        <a data-fancybox='' data-src='images/footer/fancybox_photo/img5_big.png'>
          <img className={styles.images} src='images/gallery/img4.png' />
        </a>
      </article>
      <article className={styles.wrapper_images}>
        <a data-fancybox='' data-src='images/gallery/img5_big.png'>
          <img className={styles.images} src='images/gallery/img5.png' />
        </a>
        <a data-fancybox='' data-src='images/gallery/img6_big.png'>
          <img className={styles.images} src='images/gallery/img6.png' />
        </a>
      </article>
      <article className={styles.wrapper_images}>
        <a data-fancybox='' data-src='images/gallery/img7_big.png'>
          <img className={styles.images} src='images/gallery/img7.png' />
        </a>
        <a data-fancybox='' data-src='images/footer/fancybox_photo/img4_big.png'>
          <img className={styles.images} src='images/gallery/img8.png' />
        </a>
      </article>
      <article className={styles.wrapper_images}>
        <a data-fancybox='' data-src='images/gallery/img9_big.png'>
          <img className={styles.images} src='images/gallery/img9.png' />
        </a>
        <a data-fancybox='' data-src='images/gallery/img10_big.png'>
          <img className={styles.images} src='images/gallery/img10.png' />
        </a>
      </article>
    </>
  );
}
