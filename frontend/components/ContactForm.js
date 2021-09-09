import InputForms from "./InputForms";
import style from '../styles/contact-forms.module.css';

export default function ContactForm() {
    return (
        <div className='flex justify-center'>
            <div className={`${style.wrapperContactForm}`}>
                <div className={`flex justify-center fonts-title_popular-block`}>Пишите нам</div>
                    <form className='flex flex-col mt-7'>
                                <InputForms  />
                        <div className='flex justify-end mt-2'>
                            <button className={`${style.buttonSubmit}`}>Отправить</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}