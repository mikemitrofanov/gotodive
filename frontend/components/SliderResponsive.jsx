import Slider from "react-slick";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Article from "./Article";

export default function SliderResponsive({ article }) {
  
  return (

<Carousel>
    {article.map(el => <Article article={el}/>)}

</Carousel>

  );
}

  