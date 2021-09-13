import style from "../styles/footerStyle.module.css";
import Image from "next/image";

export default function Gallery({ images }) {
  return (
    <section className='text-white'>
      <h3 className={style.styleTitle}>Gallery</h3>
      <div className={`flex flex-wrap ${style.galleryBlock} mt-6`}>
        {images.map((el, i) => (
          <Image src={el.src} alt={`img${i}`} height={83} width={103} /> //Не стал создавать отдельный компонент для однйо лишь картинки
        ))}
      </div>
    </section>
  );
}
