import style from '../styles/footerStyle.module.css';
import ListMedia from '../components/ListMedia';
import Gallery from './Gallery';

export default function Footer () {
    return (
        <footer className={`${style.container_bg}`}>
            <div className={`${style.wrapper_info}`}>
                <ListMedia />
                <Gallery />
            </div>
        </footer>
    )
}
