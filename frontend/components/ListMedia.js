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
  let info = [
    {
      title:'Contact Us',
      info1: "999, Моя Улица, Хорватия",
      info2: "270-177-6026, 275-198-7978",
      info3: "@GotoDive",
      info4: "GotoDive@gmail.com",
      icon1: mapIcon,
      icon2: TelIcon,
      icon3: facebookIcon,
      icon4: mailIcon,
    },
    {
      title:'Categories',
      info1: "Дайвинг",
      info2: "Обучение дайвингу",
      info3: "Стань ДАЙВ ПРО",
      info4: "Экскурсии",
    },
    {
      title:'Social',
      info1: "@GotoDive",
      info2: "@GotoDive",
      info3: "@GotoDive",
      info4: "@GotoDive",
      icon1: instaIcon,
      icon2: telegramIcon,
      icon3: wtsupIcon,
      icon4: viberIcon,
    }
  ];
  return (
    <section className='flex max-lg:w-1/2 max-lg:m-20 w-3/5 max-lg:justify-start justify-around flex-wrap '>
      {info.map((el) => (
        <ListMediaItem 
        title={el.title}
         info1={el.info1}
         info2={el.info2}
         info3={el.info3}
         info4={el.info3}
         icon1={el.icon1}
         icon2={el.icon2}
         icon3={el.icon3}
         icon4={el.icon4}
        />
      ))}
    </section>
  );
}
