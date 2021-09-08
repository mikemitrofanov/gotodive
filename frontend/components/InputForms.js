import style from '../styles/contact-forms.module.css';


export default function InputForms(data) {
    let { params } = data;

    return (
        <>
            {console.log(params)}
            {params.map((el, i) =>
                <div className='flex flex-col'>
                    <label className={`${style.allParamsForms} mt-11`}>{el.label}</label>
                    <input type={el.type} name={el.label} className={`${el.label !== 'Сообщения' ? 'w-96' : style.MessageInput} height-forms  ${style.styleForms}`} />
                </div>
            )}
        </>
    )
}