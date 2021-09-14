import style from "../styles/contact-forms.module.css";
import { InputField, InputMessage } from "./inputsForm/inputs";

export default function InputForms({ handleChange, handleSubmit, data }) {
  return (
    <form className="flex flex-col mt-7" onSubmit={handleSubmit}>
      <h2 className='flex justify-center fonts-title_popular-block '>
        Пишите нам
      </h2>
      <div className="flex flex-row flex-wrap justify-center">
        <div className="flex flex-col pr-7 align-center">
          <div className='w-full'>
              {/*создал отдельные компоненты для обработки формы,что бы не дублировать */}
            <InputField
              label={"Name"}
              name="name"
              type={"text"}
              value={data.name}
              onChange={handleChange("name")}
              className='w-full md:w-96'
            />
            <InputField
              label={"email"}
              name="email"
              type={"email"}
              value={data.email}
              onChange={handleChange("email")} //{/*Создал в ContactForms этот метод передаём туда value поля,для того,что бы изменить состояние*/}
              className='w-full md:w-96'
            />
            <InputField
              label={"phone"}
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
            label={"messages"}
            name="messages"
            type={"textarea"}
            value={data.messages}
            onChange={handleChange("messages")}
            className='w-full '
          />
          <div className="flex justify-end mt-2">
            <button className={`${style.buttonSubmit}  md:w-96`} type={"submit"} >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
