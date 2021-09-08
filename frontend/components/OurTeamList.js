import Image from "next/image"

export default function OurTeam(data) {
    let {dataTeam,images} = data;
    return (
        <>
        {dataTeam.map((el,i) => 
            <div key={i} className='flex-col m-32'>
                <Image src={images[i].src} alt={`photo number ${i}`} height={390} width={389}/>
                <div className='flex items-center flex-col mt-8'>
                    <div className='name_team text-4xl	text-white'>{el.name}</div>
                    <div className='desc-our_team text-xl text-white '>{el.desc}</div>
                </div>
            </div>)}
        </>
    )
}