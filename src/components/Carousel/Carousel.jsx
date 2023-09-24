import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/img2.jpg";
import image3 from "../../assets/img3.jpg";
import image4 from "../../assets/img4.jpg";
import image5 from "../../assets/img5.jpg";
import image6 from "../../assets/img6.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {desktop} from "../../responsive/screens"
import useMediaQuery from "../../responsive/responsive";


function ImageCarousel() {
  const images = [image1, image2, image3, image4, image5, image6];
  const isDesktop =  useMediaQuery(desktop)
  return (
    <Carousel
      width={isDesktop?1300:300}
      autoPlay={true}
      infiniteLoop={true}
      showArrows={true}
      showThumbs={false}
      interval={2000}
    >
      {images.map((img, index) => (
        <div key={index}>
          {index === 1 ? (
            <img src={img} key={index} alt="home image" />
          ) : (
            <img src={img} key={index} alt="home image" />
          )}
        </div>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
