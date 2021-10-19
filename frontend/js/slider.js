import image_1 from '../public/images/slider/img1.png'
import image_2 from '../public/images/slider/img2.png'
import image_3 from '../public/images/slider/img3.png'

const description = ['Чтобы по-настоящему насладится вашим первым подводным погружением, вам нужен будет инструктор, которому вы сможете полностью доверять. Наши опытные инструкторы позаботяться о том, чтобы вы были в полной безопасности во время ваших подводных приключений и получили незабываемые эмоции', 'Щоб по-справжньому насолодитися вашим першим підводним зануренням, вам потрібен буде інструктор, якому ви зможете повністю довіряти. Наші досвідчені інструктори позаботяться про те, щоб ви були в цілковитій безпеці під час ваших підводних пригод і отримали незабутні емоції', 'To truly enjoy your first scuba dive, you will need an instructor you can fully trust. Our experienced instructors will make sure that you are completely safe during your underwater adventures and have an unforgettable experience.']
const buttons = ['Записаться', 'Записатися', 'Sign up']

export const data_slider = {
  data: [
    {
      imageUrl: image_1.src,
      title: ['Рекреационные курсы', 'Рекреаційні курси', 'Recreational courses'],
      description,
      buttons
    },
    {
      imageUrl: image_2.src,
      title: ['Технические курсы', 'Технічні курси', 'Technical courses'],
      description,
      buttons
    },
    {
      imageUrl: image_3.src,
      title: ['Пещерные', 'Печерні', 'Cave'],
      description,
      buttons
    }
  ]
}