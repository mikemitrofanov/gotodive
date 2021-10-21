import Link from "next/link";
import "@fancyapps/ui";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <section className={styles.wrapper_footer}>

        <article className={styles.contact_us}>
          <h1 className={styles.heading_contact_us}>Contact Us</h1>
          <Link href='#'>
            <a className={styles.contact_us}>
              <img className={styles.icon} src='images/footer/icons/mapIcon.png' />
              999, Моя Улица, Хорватия
            </a>
          </Link>
          <Link href='#'>
            <a className={styles.contact_us}>
              <img className={styles.icon} src='images/footer/icons/TelIcon.png' />
              270-177-6026, 275-198-7978
            </a>
          </Link>
          <Link href='#'>
            <a className={styles.contact_us}>
              <img className={styles.icon} src='images/footer/icons/facebookIcon.png' />
              @GotoDive
            </a>
          </Link>
          <Link href='#'>
            <a className={styles.contact_us}>
              <img className={styles.icon} src='images/footer/icons/mailIcon.png' />
              GotoDive@gmail.com
            </a>
          </Link>
        </article>
        <article className={styles.contact_us}>
          <h1 className={styles.heading_categories}>Categories</h1>
          <Link href='#'>
            <a className={styles.categories}>Дайвинг</a>
          </Link>
          <Link href='#'>
            <a className={styles.categories}>Обучение дайвингу</a>
          </Link>
          <Link href='#'>
            <a className={styles.categories}>Стань ДАЙВ ПРО</a>
          </Link>
          <Link href='#'>
            <a className={styles.categories}>Экскурсии</a>
          </Link>
          <Link href='#'>
            <a className={styles.categories}>Прайс</a>
          </Link>
        </article>
        <article className={styles.contact_us}>
          <h1 className={styles.heading_social}>Social</h1>
          <Link href='#'>
            <a className={styles.social}>
              <img className={styles.icon} src='images/footer/icons/instaIcon.png' />
              @GotoDive
            </a>
          </Link>
          <Link href='#'>
            <a className={styles.social}>
              <img className={styles.icon} src='images/footer/icons/telegramIcon.png' />
              @GotoDive
            </a>
          </Link>
          <Link href='#'>
            <a className={styles.social}>
              <img className={styles.icon} src='images/footer/icons/wtsupIcon.png' />
              @GotoDive
            </a>
          </Link>
          <Link href='#'>
            <a className={styles.social}>
              <img className={styles.icon} src='images/footer/icons/viberIcon.png' />
              @GotoDive
            </a>
          </Link>
        </article>


      <article className={styles.gallery}>
        <h1 className={styles.heading_gallery}>Gallery</h1>
        <div className={styles.wrapper_gallery}>
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
    </section>
  );
}
