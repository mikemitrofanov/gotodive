import styles from "../content.module.css";

export default function ContentImage({className}) {

    return(
        <>
            <div className={className}>
                <img alt='img' src='/images/inner_page/img1.png'/>
                <img alt='img' src='/images/inner_page/img2.png'/>
                <img alt='img' src='/images/inner_page/img3.png'/>
                <img alt='img' src='/images/inner_page/img4.png'/>
            </div>
        </>
    )
}