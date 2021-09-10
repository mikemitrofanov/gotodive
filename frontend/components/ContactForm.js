import InputForms from "./InputForms";
import style from "../styles/contact-forms.module.css";
import { useState } from "react";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    messages: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const regExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    /*Валидация номера телефона,все остальные параметры будут валидироваться на сервере*/
    if (data.phone.match(regExp)) {
      console.log('validate') //вместо console будет функция асинхронная для отправки данных на сервер

    }else {
      console.log('not valid')
    }
  };

  const handleChange = (fieldName) => (fieldValue) => {/*в params передаём имена каждого input и его value */
    return setData({ ...data, [fieldName]: fieldValue });
  };

  return (
    <section className="flex justify-center">
      <div className={`${style.wrapperContactForm}`}>
        <InputForms
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          data={data}
        />
      </div>
    </section>
  );
}
