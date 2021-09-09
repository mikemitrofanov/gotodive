import style from '../styles/contact-forms.module.css';


export default function InputForms(data) {

    return (
        <div className='flex flex-row'>
            <div className='flex flex-col pr-7'>
                <div className='flex flex-col'>
                    <label className={`${style.allParamsForms} mt-11 text-2xl`}>Имя</label>
                    <input type={'text'} name={'text'} className={`w-96 height-forms ${style.styleForms}`} />
                </div>
                <div className='flex flex-col'>
                    <label className={`${style.allParamsForms} mt-11 text-2xl`}>Email</label>
                    <input type={'email'} name={'email'} className={`w-96 height-forms ${style.styleForms}`} />
                </div>
                <div className='flex flex-col'>
                    <label className={`${style.allParamsForms} mt-11 text-2xl`}>Phone</label>
                    <input type={'tel'} name={'phone'} className={`w-96 height-forms ${style.styleForms}`} />
                </div>
            </div>
            <div>
                <label className={`${style.allParamsForms} mt-11 text-2xl`}>Сообщение</label>
                <input type={'text'} name={'messages'} className={`${style.MessageInput} height-forms  ${style.styleForms}`} />
            </div>
        </div>
    )
}