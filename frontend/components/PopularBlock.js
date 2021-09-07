import Image from 'next/image';
import img1 from '../utils/images/img1.png';
import img2 from '../utils/images/img2.png';
import img3 from '../utils/images/img3.png';


export default function PopularBlock () {
    let arr = [img1,img2,img3];
    const dataCourse = [
      {
        photo:'/../utils/images/img1.png',
        title:'Рекреационные курсы',
        desc:'Чтобы по-настоящему насладиться вашим первым подводным погружением, вам нужен будет инструктор, которому вы сможете полностью доверять. Наши опытные инструкторы позаботятся о том, чтобы вы были в полной безопасности во время ваших подводных приключений и получили незабываемые эмоции.'
      },
      {
        photo:'/../utils/images/img1',
        title:'Технические курсы',
        desc:'Чтобы по-настоящему насладиться вашим первым подводным погружением, вам нужен будет инструктор, которому вы сможете полностью доверять. Наши опытные инструкторы позаботятся о том, чтобы вы были в полной безопасности во время ваших подводных приключений и получили незабываемые эмоции.'
      },
      {
        photo:'/../utils/images/img1',
        title:'Пещерные курсы ',
        desc:'Чтобы по-настоящему насладиться вашим первым подводным погружением, вам нужен будет инструктор, которому вы сможете полностью доверять. Наши опытные инструкторы позаботятся о том, чтобы вы были в полной безопасности во время ваших подводных приключений и получили незабываемые эмоции.'
      }
    ]

    return (
        <div class=' flex justify-center'>
            <div class='flex flex-col'>
                <div class='flex justify-center text-4xl font-myFont'>Популярное</div>
                <div class='flex '>
                    {dataCourse.map((el,i) => 
                        <div className='w-96 h-100  m-5 relative'>
                        <div>
                            <Image 
                                src={arr[i]}
                                alt='text'
                                width={469}
                                height={308} 
                            />
                        </div>
                        <div>
                            <div className='w-26 h-7 text-3xl mt-4' >
                            {el.title}
                            </div>
                            <div className='w-26 h-48 mt-7 text-lg font-dop'>
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