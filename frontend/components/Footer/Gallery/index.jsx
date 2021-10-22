import "@fancyapps/ui";
import styles from "./gallery.module.css";

export default function Gallery() {
  return (
    <article className={styles.gallery_wrapper}>
      <h1 className={styles.gallery_heading}>Gallery</h1>
      <div className={styles.wrapper_img}>
        <a data-fancybox='gallery' data-src='images/footer/fancybox_photo/img1_big.png'>
          <img className={styles.img_gallery} src='images/footer/photo/img1.png' />
        </a>
        <a data-fancybox='gallery' data-src='images/footer/fancybox_photo/img2_big.png'>
          <img className={styles.img_gallery} src='images/footer/photo/img2.png' />
        </a>
        <a data-fancybox='gallery' data-src='images/footer/fancybox_photo/img3_big.png'>
          <img className={styles.img_gallery} src='images/footer/photo/img3.png' />
        </a>
        <a data-fancybox='gallery' data-src='images/footer/fancybox_photo/img4_big.png'>
          <img className={styles.img_gallery} src='images/footer/photo/img4.png' />
        </a>
      </div>
      <a data-fancybox='gallery' data-src='images/footer/fancybox_photo/img5_big.png'>
        <img className={styles.img_gallery} src='images/footer/photo/img5.png' />
      </a>
      <a data-fancybox='gallery' data-src='images/footer/fancybox_photo/img6_big.png'>
        <img className={styles.img_gallery} src='images/footer/photo/img6.png' />
      </a>
      <a data-fancybox='gallery' data-src='images/footer/fancybox_photo/img7_big.png'>
        <img className={styles.img_gallery} src='images/footer/photo/img7.png' />
      </a>
      <a data-fancybox='gallery' data-src='images/footer/fancybox_photo/img8_big.png'>
        <img className={styles.img_gallery} src='images/footer/photo/img8.png' />
      </a>
    </article>
  );
}
