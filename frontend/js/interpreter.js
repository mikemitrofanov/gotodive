const dictionary = {
  "russian": {
    "_home": "Главная",
    "_diving": "Дайвинг",
    "_specializations": "Специализации",
    "_gallery": "Галерея",
    "_price": "Прайс",
    "_title_start": "ПОГРУЗИСЬ В",
    "_title_end": "ПРИКЛЮЧЕНИЯ",
    "_description": "Погружения с аквалангом — это незабываемые моменты отпуска в Хорватии! Это намного проще чем ты думаешь! Дайвинг это просто, легко и весело!",
    "_sub_description": "Вы всегда задавались вопросом, каково это дышать под водой? Что скрыто под водной гладью? Вам страшно, но интересно это узнать? Тогда пора действовать! Чтобы по-настоящему насладиться вашим первым подводным погружением, вам нужен будет инструктор, которому вы сможете полностью доверять. Наши опытные инструкторы позаботятся о том, чтобы вы были в полной безопасности во время ваших подводных приключений и получили незабываемые эмоции."
  },
  "ukrainian": {
    "_home": "Головна",
    "_diving": "Дайвінг",
    "_specializations": "Спеціалізації",
    "_gallery": "Галерея",
    "_price": "Прайс",
    "_title_start": "ЗАНУРИСЬ У",
    "_title_end": "ПРИГОДИ",
    "_description": "Занурення з аквалангом - це незабутні моменти відпустки в Хорватії! Це набагато простіше ніж ти думаєш! Дайвінг це просто, легко і весело!",
    "_sub_description": "Ви завжди задавалися питанням, як це дихати під водою? Що приховано під водною гладдю? Вам страшно, але цікаво це дізнатися? Тоді пора діяти! Щоб по-справжньому насолодитися вашим першим підводним зануренням, вам потрібен буде інструктор, якому ви зможете повністю довіряти. Наші досвідчені інструктори подбають про те, щоб ви були в цілковитій безпеці під час ваших підводних пригод і отримали незабутні емоції."
  },
  "english": {
    "_home": "Home",
    "_diving": "Diving",
    "_specializations": "Specializations",
    "_gallery": "Gallery",
    "_price": "Price",
    "_title_start": "DIVE INTO",
    "_title_end": " ADVENTURES",
    "_description": "Scuba diving is an unforgettable holiday experience in Croatia! It's much easier than you think! Diving is simple, easy and fun!",
    "_sub_description": "Have you always wondered what it is like to breathe underwater? What is hidden under the water surface? Are you scared but curious to know? Then it's time to act! To truly enjoy your first scuba dive, you will need an instructor you can fully trust. Our experienced instructors will make sure that you are completely safe during your underwater adventures and have an unforgettable experience."
  },
};

if (typeof window === 'object') {
  document.addEventListener("DOMContentLoaded", function () {
    const lang_switchers = document.querySelectorAll('.lang_switcher')
    const data_translates = document.querySelectorAll('[data_translate]')

    lang_switchers.forEach((lang_switcher) => {
      lang_switcher.addEventListener('click', (event) => {
        data_translates.forEach((data_translate) => {
          data_translate.innerText = dictionary[event.target.attributes[0].textContent][data_translate.attributes[0].textContent]
        })
      })
    })
  });
}
