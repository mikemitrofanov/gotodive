import Image from 'next/image';



export default function PopularBlockList(data) {
    return (
        <>
        {data.data.map((el,i) => 
            <div className='w-cards h-100  m-5 relative'>
            <div>
                
                 <Image 
                    src={data.images[i].src}
                    alt='text'
                    width={469}
                    height={308} 
                /> *
            </div>
            <div>
                <div className='w-26 h-7 text-3xl mt-4 fonts-title-desc_popular_block' >
                {el.title}
                </div>
                <div className='w-26 h-48 mt-7 fonts-desc_popular-block'>
                    {el.desc}
                </div>
            </div>
            <button className='bg-black text-white text-xl rounded-lg w-full h-12 absolute bottom-0'>Записаться</button>
        </div>
        )}
        </>
    )
}