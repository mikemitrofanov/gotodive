import "@fancyapps/ui";
import styles from "./gallery.module.css";
import {useGetPhotoGalleryQuery} from "../../store/api/categories";

export default function Gallery() {
    const {data : photoList} = useGetPhotoGalleryQuery();
    console.log("photoList" , photoList)

    return (
        <>
            {photoList.map( photo => (
                <article key={photo.id} className={styles.wrapper_images}>
                    {/*<a data-fancybox='gallery' data-src={photo.photo_url}>*/}
                    {/*    <img className={styles.images} src={photo.optimized_photo_url}/>*/}
                    {/*</a>*/}
                    <a data-fancybox='gallery' data-src='/images/gallery/img3.png'>
                        <img className={styles.images} src='/images/gallery/img3.png'/>
                    </a>
                    <a data-fancybox='gallery' data-src='/images/gallery/img2.png'>
                        <img className={styles.images} src='/images/gallery/img2.png'/>
                    </a>
                </article>
            ))}
        </>
    )
}
