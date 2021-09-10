import mailIcon from "../public/images/footer/icons/mailIcon.png";
import mapIcon from "../public/images/footer/icons/mapIcon.png";
import TelIcon from "../public/images/footer/icons/TelIcon.png";
import facebookIcon from "../public/images/footer/icons/facebookIcon.png";

import viberIcon from "../public/images/footer/icons/viberIcon.png";
import wtsupIcon from "../public/images/footer/icons/wtsupIcon.png";
import instaIcon from "../public/images/footer/icons/instaIcon.png";
import telegramIcon from "../public/images/footer/icons/telegramIcon.png";

import ListMediaItem from "./ListMediaItem";

export default function ListMedia() {
  return (
    <section className={`flex w-3/5 justify-around`}>
      <ListMediaItem
        title={"Contact Us"}
        info1={"999, Моя Улица, Хорватия"}
        info2={"270-177-6026, 275-198-7978"}
        info3={"@GotoDive"}
        info4={"GotoDive@gmail.com"}
        icon1={mapIcon}
        icon2={TelIcon}
        icon3={facebookIcon}
        icon4={mailIcon}
      />
      <ListMediaItem
        title={"Categories"}
        info1={"Дайвинг"}
        info2={"Обучение дайвингу"}
        info3={"Стань ДАЙВ ПРО"}
        info4={"Экскурсии"}
      />
      <ListMediaItem
        title={"Contact Us"}
        info1={"@GotoDive"}
        info2={"@GotoDive"}
        info3={"@GotoDive"}
        info4={"@GotoDive"}
        icon={instaIcon}
        icon1={telegramIcon}
        icon2={TelIcon}
        icon3={wtsupIcon}
        icon4={viberIcon}
      />
    </section>
  );
}
