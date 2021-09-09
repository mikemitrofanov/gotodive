import style from "../styles/contact-forms.module.css";
import { InputField, InputMessage } from "./inputsForm/inputs";

export default function InputForms({ handleChange, handleSubmit, data }) {
  return (
    <form className="flex flex-col mt-7" onSubmit={handleSubmit}>
      <h1 className={`flex justify-center fonts-title_popular-block`}>
        Пишите нам
      </h1>
      <div className="flex flex-row">
        <div className="flex flex-col pr-7">
          <div>
              {/*создал отдельные компоненты для обработки формы,что бы не дублировать */}
            <InputField
              label={"Name"}
              name="name"
              type={"text"}
              value={data.name}
              onChange={handleChange("name")}
            />
            <InputField
              label={"email"}
              name="email"
              type={"email"}
              value={data.email}
              onChange={handleChange("email")} //{/*Создал в ContactForms этот метод передаём туда value поля,для того,что бы изменить состояние*/}
            />
            <InputField
              label={"phone"}
              name="phone"
              type={"tel"}
              value={data.phone}
              onChange={handleChange("phone")}
            />
          </div>
        </div>
        <div>
          <InputMessage
            label={"messages"}
            name="messages"
            type={"text"}
            value={data.messages}
            onChange={handleChange("messages")}
          />
          <div className="flex justify-end mt-2">
            <button className={`${style.buttonSubmit}`} type={"submit"}>
              Отправить
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
