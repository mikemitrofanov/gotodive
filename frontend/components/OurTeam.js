import Image from "next/image"

export default function OurTeam({teamName,desc,imagesValue}) {
    return (
            <div className='flex-col m-32'>
                <Image src={imagesValue} alt={`on this photo: ${teamName}`} height={390} width={389}/>
                <div className='flex items-center flex-col mt-8'>
                    <div className='name_team text-4xl	text-white'>{teamName}</div>
                    <div className='desc-our_team text-xl text-white '>{desc}</div>
                </div>
            </div>
    )
}