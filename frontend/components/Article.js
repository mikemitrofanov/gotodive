import Image from 'next/image'

export default function Article({ article }) {
    return (
        <article className='w-cards h-100 2 m-5 relative'>
            <div>
                 <Image 
                    src={article.image}
                    alt='text'
                    width={469}
                    height={308} 
                />
            </div>
            <div>
                <h3 className='w-26 h-7 text-3xl mt-4 fonts-title-desc_popular_block' >
                {article.title}
                </h3>
                <div className='w-26 h-48 mt-7 fonts-desc_popular-block lg:mt-12 md:mt-16 sm:text-base	'>
                    {article.desc}
                </div>
            </div>
            <button className='bg-black text-white text-xl rounded-lg w-full h-12 absolute bottom-0 fonts_button_action'>Записаться</button>
        </article>
    )
}


