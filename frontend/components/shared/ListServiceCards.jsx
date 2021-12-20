import ServiceCard from "@/components/shared/ServiceCard";

export default function ListServiceCards({listServices = []}) {

    return (
        <>
            {listServices.map(item => (
                <ServiceCard
                    key={item.id}
                    src={item.photos.photo_url}
                    title={item.title}
                    description={item.description}
                    id={item.id}
                />
            ))}
        </>
    )
}
