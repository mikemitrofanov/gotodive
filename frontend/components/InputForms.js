import style from "../styles/contact-forms.module.css";
import { InputField, InputMessage } from "./inputsForm/inputs";

export default function InputForms({ handleChange, handleSubmit, data }) {
  return (
    <form className="flex flex-col mt-7" onSubmit={handleSubmit}>
      <h2 className='flex justify-center max-cust:text-2xl text-4xl fonts-title_popular-block  '>
        Пишите нам
      </h2>
      <div className="flex flex-row flex-wrap justify-center">
        <div className="flex flex-col max-md:pr-0 pr-7 align-center">
          <div className='w-full'>
              {/*создал отдельные компоненты для обработки формы,что бы не дублировать */}
            <InputField
              label={"Имя"}
              name="name"
              type={"text"}
              value={data.name}
              onChange={handleChange("name")}
              className='w-full md:w-96'
            />
            <InputField
              label={"Email"}
              name="email"
              type={"email"}
              value={data.email}
              onChange={handleChange("email")} //{/*Создал в ContactForms этот метод передаём туда value поля,для того,что бы изменить состояние*/}
              className='w-full md:w-96'
            />
            <InputField
              label={"Телефон"}
              name="phone"
              type={"tel"}
              value={data.phone}
              onChange={handleChange("phone")}
              className='w-full md:w-96'
            />
          </div>
        </div>
        <div>
          <InputMessage
            label={"Сообщение"}
            name="messages"
            type={"textarea"}
            value={data.messages}
            onChange={handleChange("messages")}
          />
          <div className="flex justify-end mt-2">
            <button className={`max-cust:text-sm max-md:h-12 max-md:w-6/12 ${style.fontButton} h-20 bg-black text-white w-1/2  `} type={"submit"} >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
