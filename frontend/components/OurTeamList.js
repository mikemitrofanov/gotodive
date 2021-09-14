import OurTeam from './OurTeam';

export default function OurTeamList({dataTeam,images}) {
    return (
            <section className='flex flex-col'>
                <h2 className='flex justify-center fonts-title_popular-block max-sm:justify-start max-sm:text-xl'>Наша Команда</h2>
                <div className='md:min-h-full max-lg:flex-wrap flex flex-row bg-custom justify-center mt-5 w-screen'>
                    {dataTeam.map((data,i) => <OurTeam key={data.id} teamName={data.name} desc={data.desc} imagesValue={images[i].src}/>)}
                </div>
            </section>
    )
}