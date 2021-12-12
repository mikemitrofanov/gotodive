import styles from "./gallery.module.css";
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
                       data-src={photo.photo_url}
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
