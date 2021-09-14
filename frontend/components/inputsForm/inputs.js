import style from "../../styles/contact-forms.module.css";

export const InputField = ({ label, name, type, value, onChange }) => (
  <div className="flex flex-col">
    <label
      htmlFor={`${type}Input`}
      className={`max-sm:text-xl ${style.allParamsForms} mt-11 text-2xl`}
    >
      {label}
    </label>
    <input
      id={`${type}Input`}
      type={`${type}`}
      name={`${name}`}
      className={` max-cust:w-60  max-sm:w-96  height-forms max-sm:h-8 h-20 ${style.styleForms} w-96 text-2xl`}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  </div>
);

export const InputMessage = ({ label, name, type, value, onChange }) => (
  <div className="flex flex-col">
    <label
      htmlFor={`${type}Input`}
      className={`max-sm:text-xl ${style.allParamsForms} mt-11 text-2xl`}
    >
      {label}
    </label>
    <textarea
      id={`${type}Input`}
      type={`${type}`}
      name={`${name}`}
      value={value}
      className={`max-cust:w-60   sm: w-formsWidth  max-sm:w-96 ${style.MessageInput}  height-forms  ${style.styleForms} text-2xl resize-none`}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
