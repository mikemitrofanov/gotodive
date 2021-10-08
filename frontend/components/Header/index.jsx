import styles from "./header.module.css";

export default function Header() {
  return (
    <section className={styles.header_container}>
      <div className={styles.header_content_container}>
        <div className={styles.wrapper_mobile_background}>
          <article className={styles.header_image_container}>
            <img className={styles.header_image} src='images/header/image_main.png' />
            <img className={styles.header_logo} src='images/header/logo.png' />
          </article>

          {/* <article className={styles.header_text_container}> */}
          <h1>
            ПОГРУЗИСЬ В<span> ПРИКЛЮЧЕНИЯ</span>
          </h1>
        </div>

        <div className={styles.wrapper_content}>
          <p className={styles.content}>Погружения с аквалангом — это незабываемые моменты отпуска в Хорватии! Это намного проще чем ты думаешь! Дайвинг это просто, легко и весело!</p>
          <p className={styles.sub_content}>Вы всегда задавались вопросом, каково это дышать под водой? Что скрыто под водной гладью? Вам страшно, но интересно это узнать? Тогда пора действовать! Чтобы по-настоящему насладиться вашим первым подводным погружением, вам нужен будет инструктор, которому вы сможете полностью доверять. Наши опытные инструкторы позаботятся о том, чтобы вы были в полной безопасности во время ваших подводных приключений и получили незабываемые эмоции.</p>
          {/* </article> */}
        </div>




      </div>
    </section>
  );
}
