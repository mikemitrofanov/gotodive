import "@fancyapps/ui";
import styles from "./gallery.module.css";
import {useGetPhotoGalleryQuery} from "../../../store/api/categories";

export default function FooterGallery() {
    const {data: photoList} = useGetPhotoGalleryQuery();

    return (
        <article className={styles.gallery_wrapper}>
            <h1 className={styles.gallery_heading}>Gallery</h1>
            <a className={styles.wrapper_img}>
                {photoList.filter((photo, i) => i < 8).map(photo => (
                    <img key={photo.id} className={styles.img_gallery}
                         src={`${process.env.NEXT_PUBLIC_URL}/${photo.optimized_photo_url}`}/>
                ))}
            </a>
        </article>
    )
}
