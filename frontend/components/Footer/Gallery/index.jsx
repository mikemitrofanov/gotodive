import "@fancyapps/ui";
import styles from "./gallery.module.css";

export default function Gallery() {
  return (
    <article className={styles.gallery_wrapper}>
      <h1 className={styles.gallery_heading}>Gallery</h1>
      <div className={styles.wrapper_img}>
        <a data-fancybox='' data-src='/images/footer/gallery/img1_big.png'>
          <img className={styles.img_gallery} src='/images/footer/gallery/img1.png' />
        </a>
        <a data-fancybox='' data-src='/images/footer/gallery/img2_big.png'>
          <img className={styles.img_gallery} src='/images/footer/gallery/img2.png' />
        </a>
        <a data-fancybox='' data-src='images/footer/gallery/img3_big.png'>
          <img className={styles.img_gallery} src='/images/footer/gallery/img3.png' />
        </a>
        <a data-fancybox='' data-src='/images/footer/gallery/img4_big.png'>
          <img className={styles.img_gallery} src='/images/footer/gallery/img4.png' />
        </a>
      </div>
      <a data-fancybox='' data-src='images/footer/gallery/img5_big.png'>
        <img className={styles.img_gallery} src='/images/footer/gallery/img5.png' />
      </a>
      <a data-fancybox='' data-src='/images/footer/gallery/img6_big.png'>
        <img className={styles.img_gallery} src='/images/footer/gallery/img6.png' />
      </a>
      <a data-fancybox='' data-src='/images/footer/gallery/img7_big.png'>
        <img className={styles.img_gallery} src='/images/footer/gallery/img7.png' />
      </a>
      <a data-fancybox='' data-src='/images/footer/gallery/img8_big.png'>
        <img className={styles.img_gallery} src='/images/footer/gallery/img8.png' />
      </a>
    </article>
  );
}
