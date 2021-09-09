import style from "../../styles/contact-forms.module.css";

export const InputField = ({ label, name, type, value, onChange }) => (
  <div className="flex flex-col">
    <label
      htmlFor={`${type}Input`}
      className={`${style.allParamsForms} mt-11 text-2xl`}
    >
      {label}
    </label>
    <input
      id={`${type}Input`}
      type={`${type}`}
      name={`${name}`}
      className={`w-96 height-forms ${style.styleForms}`}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  </div>
);

export const InputMessage = ({ label, name, type, value, onChange }) => (
  <div className="flex flex-col">
    <label
      htmlFor={`${type}Input`}
      className={`${style.allParamsForms} mt-11 text-2xl`}
    >
      {label}
    </label>
    <input
      id={`${type}Input`}
      type={`${type}`}
      name={`${name}`}
      value={value}
      className={`${style.MessageInput} height-forms  ${style.styleForms}`}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
