export default function ServiceShort({service}) {

    return (
        <div className='popular-item'>
           <img className='popular-service-image' src={service.imageUrl} alt='Image'/>
            <p className='popular-service-title'>{service.title}</p>
            <p>{service.description}</p>
            {/*<ul>*/}
                <button className='popular-service-button'>Записаться</button>
            {/*</ul>*/}
        </div>
    )
}