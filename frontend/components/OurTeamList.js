import OurTeam from './OurTeam';

export default function OurTeamList({dataTeam,images}) {
    return (
        // <section className='wrapper-our_team mt-40'>
            <section className='flex flex-col'>
                <h1 className='flex justify-center fonts-title_popular-block'>Наша Команда</h1  >
                <div className='h-wrapper  flex flex-row bg-custom justify-center mt-5'>
                    {dataTeam.map((data,i) => <OurTeam key={data.id} teamName={data.name} desc={data.desc} imagesValue={images[i].src}/>)}
                </div>
            </section>
        // </section>
    )
}