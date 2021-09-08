import Image from 'next/image';
import alexGerman from '../utils/images/ourteam/alexGerman.png'
import yuriyPrihvatilo from '../utils/images/ourteam/yuriyPrihvatilo.png'
import rickSanches from '../utils/images/ourteam/rickSanches.png'


export default function OurTeam () {
    let imagesTeam = [alexGerman,yuriyPrihvatilo,rickSanches];
    let teamData = [
        {
            name:'Alex German',
            desc:'великий и ужасный'
        },
        {
            name:'Юрии Прохватило',
            desc:'великий и ужасный'
        },
        {
            name:'Alex German',
            desc:'просто душка'
        }
    ]
    return (
        <div className='wrapper-our_team mt-40'>
            <div className='flex flex-col'>
                <div className='flex justify-center fonts-title_popular-block'>Наша Команда</div>
                <div className='h-wrapper  flex flex-row bg-custom justify-center mt-5'>
                        {teamData.map((el,i) => 
                            <div key={i} className='flex-col m-32'>
                                    <Image src={imagesTeam[i]} alt={`photo number ${i}`} height={390} width={389}/>
                                    <div className='flex items-center flex-col mt-8'>
                                        <div className='name_team text-4xl	text-white'>{el.name}</div>
                                        <div className='desc-our_team text-xl text-white '>{el.desc}</div>
                                    </div>
                            </div>)}
                </div>
            </div>
        </div>
    )
}