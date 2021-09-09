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
    console.log(data);//вместо console будет функция асинхронная для отправки данных на сервер
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
