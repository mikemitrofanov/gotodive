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
        <div>
            <div className={`${style.wrapperContactForm}`}>
                <div>Пишите нам</div>
                <div>
                    <form className='flex flex-col bg-red-100'>
                        <div className='flex flex-row m-7 p-1'>
                            <div>
                                <InputForms params={formsParams} />
                            </div>
                            <div>
                                <InputForms params={formsParamsMessage} />
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <button className={`${style.buttonSubmit}`}>Отправить</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}