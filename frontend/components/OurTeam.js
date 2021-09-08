import Image from 'next/image';
import alexGerman from '../public/images/ourteam/alexGerman.png'
import yuriyPrihvatilo from '../public/images/ourteam/yuriyPrihvatilo.png'
import rickSanches from '../public/images/ourteam/rickSanches.png'
import OurTeamList from './OurTeamList';

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
                    <OurTeamList dataTeam={teamData} images={imagesTeam}/>
                </div>
            </div>
        </div>
    )
}