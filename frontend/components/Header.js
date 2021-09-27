import styles from '../styles/homeHero.module.css'

export default function Header() {
    return (
        <div className={styles.header_container}>
            <div className={styles.header_content_container}>
                <div className={styles.header_image_container}>
                    <img className={styles.header_image} src='images/home_hero/image_main.png'/>
                    <img className={styles.header_logo} src='images/home_hero/LOGO.png'/>
                </div>
                <div className={styles.header_text_container}>
                    <h1>ПОГРУЗИСЬ В
                        <br/> <span> ПРИКЛЮЧЕНИЯ</span>
                    </h1>

                    <p>
                        Погружения с аквалангом — это незабываемые моменты отпуска в Хорватии!
                        <br/>Это намного проще чем ты думаешь! Дайвинг это просто, легко и весело!
                    </p>
                    <p>
                        Вы всегда задавались вопросом, каково это дышать под водой? Что скрыто под
                        <br/>водной гладью? Вам страшно, но интересно это узнать? Тогда пора действовать!
                        <br/>Чтобы по-настоящему насладиться вашим первым подводным погружением, вам
                        <br/> нужен будет инструктор, которому вы сможете полностью доверять. Наши опытные
                        <br/> инструкторы позаботятся о том, чтобы вы были в полной безопасности во время
                        <br/> ваших подводных приключений и получили незабываемые эмоции.
                    </p>

                </div>
            </div>
        </div>
    )
}