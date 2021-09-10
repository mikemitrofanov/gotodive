
import tailwindcss from '../styles/Home.module.css'
import Footer from '../components/Footer';


import img1 from '../public/images/footer/photo/img1.png'
import img2 from '../public/images/footer/photo/img2.png'
import img3 from '../public/images/footer/photo/img3.png'
import img4 from '../public/images/footer/photo/img4.png'
import img5 from '../public/images/footer/photo/img5.png'
import img6 from '../public/images/footer/photo/img6.png'
import img7 from '../public/images/footer/photo/img7.png'
import img8 from '../public/images/footer/photo/img8.png'

export default function Home({images}) {
  return (
    <div>
        <Footer images={images}/>
    </div>
  )
}

export function getStaticProps() {
  const images = [img1,img2,img3,img4,img5,img6,img7,img8]

  return {
    props: {
      images
    }
  }
}
