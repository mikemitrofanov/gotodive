import { useState } from "react";
import Link from "next/link";
import styles from "./categoryServicesDropdown.module.css";

export default function CategoryServicesDropdown({ category, isOpened}) {
  const [isOpenedDropdown, setIsOpenedDropdown] = useState(false);

  const checkOpenDropdown = (event) => {

    // console.log(category);
    // console.log(isOpened);
    // console.log(event);
    // console.log(isOpenedDropdown);

    setIsOpenedDropdown((isOpenedDropdown) => !isOpenedDropdown);
  };

  return (
    <span onClick={checkOpenDropdown} className={`${isOpened ? styles.dropdown_burger : styles.dropdown}`}>
      <Link href='#'>
        <a className={`${isOpened ? styles.main_nav_links_burger : styles.main_nav_links} ${isOpenedDropdown && styles.active_link_dropdown}`}>
          {category.title}
        </a>
      </Link>
      <div
        className={`${ isOpened ? styles.dropdown_content_burger : styles.dropdown_content} ${isOpenedDropdown && styles.noHidden}`}>
        {category.services?.map((service) => (
          <a key={service.title} href='#' className={`${ isOpened ? styles.dropdown_links_burger : styles.dropdown_links }`} >
            {service.title}
          </a>
        ))}
      </div>
    </span>
  );
}
















//   const [isOpen2, setIsOpen2] = useState(false);
//   const [isOpen1, setIsOpen1] = useState(false);


// const check=(props)=>{
//   if(props){
//     return false
//   }
//   return true
// }

  //   const toggle1 = () => {
  //     if (isOpen2) toggle2();
  //        setIsOpen1(!isOpen1);
  //     };
  //  const toggle2 = () => {
  //     if (isOpen1) toggle1();
  //        setIsOpen2(!isOpen2);
  //     };






    // if(event.target.innerText === "Дайвинг"&& !event.target.parentElement.nextElementSibling.childNodes[1].classList.contains('false')){
    //   console.log('работает Дайвинг',isOpenedDropdown)

    //   console.dir(event.target.parentElement.nextElementSibling.childNodes[1].classList.remove('categoryServicesDropdown_noHidden__197Wd'));
    //   console.dir(event.target.parentElement.childNodes[1].classList.add('categoryServicesDropdown_noHidden__197Wd'));

    //   // console.dir(event.target.parentElement.nextElementSibling.childNodes[1].classList.add('false'));
    //   // console.dir(event.target.parentElement.nextElementSibling.childNodes[1].classList.remove('categoryServicesDropdown_noHidden__197Wd'));

    //   // console.dir(event.target.parentElement.childNodes[1].classList.add('categoryServicesDropdown_noHidden__197Wd'));
    //   // console.dir(event.target.parentElement.nextElementSibling.childNodes[1].classList.add('false'));

    //   return
    // }

    // if(event.target.innerText === "Специализация"&& !event.target.parentElement.previousElementSibling.childNodes[1].classList.contains('false')){
    //   if(!isOpenedDropdown){
    //     console.dir('работает Специализация',isOpenedDropdown)
    //     console.dir(event.target.parentElement.previousElementSibling)
    //     console.log(category)
    //     // event.target.parentElement.previousElementSibling.setIsOpenedDropdown((isOpenedDropdown) => !isOpenedDropdown);
    //   }

    // console.dir(event.target.parentElement.previousElementSibling.childNodes[1].classList.remove('categoryServicesDropdown_noHidden__197Wd'));
    // console.dir(event.target.parentElement.childNodes[1].classList.add('categoryServicesDropdown_noHidden__197Wd'));

    // console.dir(event.target.parentElement.previousElementSibling.childNodes[1].classList.add('false'));

    // console.dir(event.target.parentElement.nextElementSibling.childNodes[0].classList.remove('false'))
    // console.dir(event.target.parentElement.nextElementSibling.childNodes[0].classList.add('categoryServicesDropdown_active_link_dropdown__19E87'))
    // console.dir(event.target.parentElement.nextElementSibling.childNodes[1].classList.remove('false'))
    // console.dir(event.target.parentElement.previousElementSibling.childNodes[1].classList.add(categoryServicesDropdown_noHidden__197Wd'))

    // console.dir(event.target.parentElement.previousElementSibling.childNodes[1])

    //   return
    // }


  //     if (event.target.innerText === "Дайвинг"&& !event.target.parentElement.nextElementSibling.childNodes[1].classList.contains('false')) {

  // console.dir(event.target.parentElement.nextElementSibling.childNodes)

  // event.target.parentElement.nextElementSibling.childNodes[0].classList.remove('categoryServicesDropdown_active_link_dropdown__19E87')
  //   event.target.parentElement.nextElementSibling.childNodes[0].classList.add('false');
  // event.target.parentElement.nextElementSibling.childNodes[1].classList.remove('categoryServicesDropdown_noHidden__197Wd');
  // event.target.parentElement.nextElementSibling.childNodes[1].classList.add('false');
  //      return
  //     }

  // console.dir(event.target.parentElement.previousElementSibling.childNodes[0].classList.remove('categoryServicesDropdown_active_link_dropdown__19E87'))
  // console.dir(event.target.parentElement.previousElementSibling.childNodes[0].classList.add('categoryServicesDropdown_main_nav_links__10gpD'))
  // console.dir(event.target.parentElement.previousElementSibling.childNodes[1].classList.remove('categoryServicesDropdown_noHidden__197Wd'))

  // console.dir(event.target.parentElement.previousElementSibling.childNodes[0].classList.remove('categoryServicesDropdown_main_nav_links__10gpD'))
  // console.dir(event.target.parentElement.previousElementSibling.childNodes[0].classList.add('categoryServicesDropdown_main_nav_links__10gpD false'))

  // console.dir(event.target.parentElement.previousElementSibling.childNodes[1].classList.remove('categoryServicesDropdown_dropdown_content__3hlSl'))
  // console.dir(event.target.parentElement.previousElementSibling.childNodes[1].classList.add('categoryServicesDropdown_dropdown_content__3hlSl false'))

  // console.dir(event.target.parentElement.previousElementSibling.childNodes[0].classList.add('categoryServicesDropdown_main_nav_links__10gpD'))
  // console.dir(event.target.parentElement.previousElementSibling.childNodes[1].classList.add('categoryServicesDropdown_dropdown_content__3hlSl'))

  // console.dir(event.target.parentElement.previousElementSibling.childNodes[0].classList.remove("categoryServicesDropdown_active_link_dropdown__19E87"))

  // event.target.parentElement.previousElementSibling.childNodes[0].classList.remove("categoryServicesDropdown_dropdown_content__3hlSl")
  //   event.target.parentElement.previousElementSibling.childNodes[0].classList.add('false');
  //  event.target.parentElement.previousElementSibling.childNodes[1].classList.remove('categoryServicesDropdown_noHidden__197Wd');
  //   event.target.parentElement.previousElementSibling.childNodes[1].classList.add('false');

