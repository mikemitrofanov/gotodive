
import tailwindcss from '../styles/Home.module.css'

import alexGerman from '../public/images/ourteam/alexGerman.png'
import yuriyPrihvatilo from '../public/images/ourteam/yuriyPrihvatilo.png'
import rickSanches from '../public/images/ourteam/rickSanches.png'
import OurTeamList from '../components/OurTeamList';

export default function Home({teamData,imagesTeam}) {

  return <OurTeamList dataTeam={teamData} images={imagesTeam}/>
}

export function getStaticProps() {
  let teamData = [
    {
      id:'1',
        name:'Alex German',
        desc:'великий и ужасный'
    },
    {
        id:'2',
        name:'Юрии Прохватило',
        desc:'великий и ужасный'
    },
    {
        id:'3',
        name:'Alex German',
        desc:'просто душка'
    }
]

let imagesTeam = [alexGerman,yuriyPrihvatilo,rickSanches];

  return {
    props:{
      teamData,
      imagesTeam
    }
  }
}