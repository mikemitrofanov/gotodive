import "@fancyapps/ui";
import styles from "./gallery.module.css";
import {useGetPhotoGalleryQuery} from "../../redux/slices/apiSlice";
import Image from 'next/image';

export default function Gallery() {
    const {data: photoList} = useGetPhotoGalleryQuery();

    return (
        <div className={styles.container}>
            {photoList.map(photo => (
                <div key={photo.id} className={styles.wrapper}>
                    <a
                        className={styles.fancybox_wrap}
                        data-fancybox=''
                        data-src={`${process.env.NEXT_PUBLIC_URL}/${photo.photo_url}`}
                    >
                        <Image
                            className={styles.image}
                            alt={'img'}
                            width={960}
                            height={710}
                            src={`${process.env.NEXT_PUBLIC_URL}/${photo.optimized_photo_url}`}
                        />
                   </a>
                 </div>
            ))}
        </div>
    )
}
