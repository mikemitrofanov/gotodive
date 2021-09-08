import InputForms from "./InputForms";
import style from '../styles/contact-forms.module.css';

export default function ContactForm() {
    let formsParams = [
        {
            label: 'name',
            type: 'text',
        },
        {
            label: 'number',
            type: 'text',
        }, {
            label: 'email',
            type: 'email',
        },
    ]

    let formsParamsMessage = [
        {
            label:'Сообщения',
            type:'text'
    },
    ]

    return (
        <div className='flex justify-center'>
            <div className={`${style.wrapperContactForm}`}>
                <div className={`flex justify-center fonts-title_popular-block`}>Пишите нам</div>
                    <form className='flex flex-col mt-7'>
                                <InputForms params={formsParams} />
                        <div className='flex justify-end mt-2'>
                            <button className={`${style.buttonSubmit}`}>Отправить</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}