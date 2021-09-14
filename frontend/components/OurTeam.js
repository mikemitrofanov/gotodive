import Image from "next/image"

export default function OurTeam({teamName,desc,imagesValue}) {
    return (
            <article className='flex-col max-md:m-16 m-32 w-1/6'>
                <Image src={imagesValue} alt={`on this photo: ${teamName}`} height={390} width={389}/>
                <div className='flex items-center flex-col mt-8 max-sm:mt-4'>
                    <h3 className='name_team sm:text-4xl max-md:text-2xl max-sm:text-xs	text-white'>{teamName}</h3>
                    <div className='desc-our_team text-xl text-white max-md:hidden'>{desc}</div>
                </div>
            </article>
    )
}