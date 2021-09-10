import style from "../styles/footerStyle.module.css";
import Image from "next/image";

export default function ListMediaItem({ title, ...rest }) {
  const { info1, info2, info3, info4, icon1, icon2, icon3, icon4 } = rest;
  return (
    <article className="text-white">
      <h1 className={`mt-7 ${style.styleTitle}`}>{title}</h1>
      <ul className={`mt-6`}>
        <div className={`${style.info_menu}`}>
          {icon1 && <Image src={icon1} alt="map_icon" />}
          &nbsp;
          {info1}
        </div>
        <div className={`${style.info_menu}`}>
          {icon2 && <Image src={icon2} alt="map_icon" />}
          &nbsp;
          {info2}
        </div>
        <div className={`${style.info_menu}`}>
          {icon3 && <Image src={icon3} alt="map_icon" />}
          &nbsp;
          {info3}
        </div>
        <div className={`${style.info_menu}`}>
          {icon4 && <Image src={icon4} alt="map_icon" />}
          &nbsp;
          {info4}
        </div>
      </ul>
    </article>
  );
}
