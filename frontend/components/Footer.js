import style from '../styles/footerStyle.module.css';
import ListMedia from '../components/ListMedia';
import Gallery from './Gallery';

export default function Footer ({images}) {
    return (
        <footer className={`max-lg:justify-start justify-center ${style.container_bg}`}>
            <div className={` w-full max-lg:w-1/2 ${style.wrapper_info} flex flex-wrap`}>
                <ListMedia />
                <Gallery images={images}/>
            </div>
        </footer>
    )
}
