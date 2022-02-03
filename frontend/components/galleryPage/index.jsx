import styles from "./galleryPage.module.css";
import container_styles from "@/components/shared/styles/container.module.css";
import "@fancyapps/ui";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import {useGetPhotoGalleryQuery} from "@/redux/slices/apiSlice";
import Image from 'next/image';
import {useEffect} from "react";

export default function Gallery() {
    const {data: photoList = []} = useGetPhotoGalleryQuery();

    useEffect(() => {
        if (window.location.hash !== '') {
            Fancybox.show([{src: window.location.hash, type: "clone"}]);
        }
    }, []);

    return (

        <div className={container_styles.flex + ' ' + styles.gallery_container}>
            {photoList.map(photo => (
                <div key={photo.id} className={styles.wrapper} id={photo.id}>
                    <a className={styles.fancybox_wrap}
                       data-fancybox=''
                       data-src={`${process.env.NEXT_PUBLIC_URL}/${photo.photo_url.split('/').splice(3, 3).join('/')}`}
                    >
                        <Image
                            className={styles.image}
                            alt={'img'}
                            width={100}
                            height={100}
                            layout={'responsive'}
                            src={photo.photo_url}
                        />
                    </a>
                </div>
            ))}
        </div>
    )
}
