import style from "../styles/footerStyle.module.css";
import Image from "next/image";

export default function Gallery({ images }) {
  return (
    <section className={`text-white `}>
      <h1 className={style.styleTitle}>Gallery</h1>
      <div className={`flex flex-wrap ${style.galleryBlock} mt-6`}>
        {images.map((el, i) => (
          <Image src={el.src} alt={`img${i}`} height={83} width={103} />
        ))}
      </div>
    </section>
  );
}
