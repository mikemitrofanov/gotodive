import styles from "./galleryPage.module.css";
import "@fancyapps/ui";
import {useGetPhotoGalleryQuery} from "@/redux/slices/apiSlice";
import Image from 'next/image';

export default function Gallery() {
    const {data: photoList = []} = useGetPhotoGalleryQuery();
    
    return (
        <div className={styles.container}>
            {photoList.map(photo => (
                <div key={photo.id} className={styles.wrapper}>
                    <a className={styles.fancybox_wrap}
                       data-fancybox=''
                       data-src={`http://localhost:8000/${photo.photo_url.split('/').splice(3, 3).join('/')}`}
                    >
                        <Image
                            className={styles.image}
                            alt={'img'}
                            width={960}
                            height={710}
                            src={photo.optimized_photo_url}
                        />
                    </a>
                </div>
            ))}
        </div>
    )
}
