import ServiceCard from "@/components/shared/ServiceCard";

export default function ListServiceCards({listServices = [], onActive}) {
    return (
        <>
            {listServices && listServices.map(item => (
                <ServiceCard
                    key={item.id}
                    src={item.photos.optimized_photo_url !== undefined ? item.photos.optimized_photo_url : '/img/mainScreen/logo.png'}
                    title={item.title}
                    description={item.description}
                    id={item.id}
                    onActive={onActive}
                />
            ))}
        </>
    )
}
