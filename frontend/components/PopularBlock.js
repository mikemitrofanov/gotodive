import Image from 'next/image';
import img1 from '../utils/images/img1.png';
import img2 from '../utils/images/img2.png';
import img3 from '../utils/images/img3.png';


export default function PopularBlock () {
    let arr = [img1,img2,img3];
    const dataCourse = [
      {
        title:'Рекреационные курсы',
        desc:'Чтобы по-настоящему насладиться вашим первым подводным погружением, вам нужен будет инструктор, которому вы сможете полностью доверять. Наши опытные инструкторы позаботятся о том, чтобы вы были в полной безопасности во время ваших подводных приключений и получили незабываемые эмоции.'
      },
      {
        title:'Технические курсы',
        desc:'Чтобы по-настоящему насладиться вашим первым подводным погружением, вам нужен будет инструктор, которому вы сможете полностью доверять. Наши опытные инструкторы позаботятся о том, чтобы вы были в полной безопасности во время ваших подводных приключений и получили незабываемые эмоции.'
      },
      {
        title:'Пещерные курсы ',
        desc:'Чтобы по-настоящему насладиться вашим первым подводным погружением, вам нужен будет инструктор, которому вы сможете полностью доверять. Наши опытные инструкторы позаботятся о том, чтобы вы были в полной безопасности во время ваших подводных приключений и получили незабываемые эмоции.'
      }
    ]

    return (
        <div class=' flex justify-center'>
            <div class='flex flex-col '>
                <div className={`flex justify-center text-4xl fonts-title_popular-block`}>Популярное</div>
                <div class='flex '>
                    {dataCourse.map((el,i) => 
                        <div className='w-cards h-100  m-5 relative'>
                        <div>
                            <Image 
                                src={arr[i]}
                                alt='text'
                                width={469}
                                height={308} 
                            />
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
                </div>
            </div>
        </div>
    )
}