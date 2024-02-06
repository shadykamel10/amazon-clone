import {Swiper, SwiperSlide} from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import { Autoplay,  Navigation } from 'swiper/modules';


import 'swiper/css/navigation';

const Carousel = () => {
  return (
    <div className="bg-yellow-500">
      
      <Swiper
       loop={true}
       spaceBetween={0}
       navigation={true}
       modules={[Navigation, Autoplay]}
       autoplay={{
         delay: 1000,
       }}
       className="h-[50%]"
      >
        <SwiperSlide> 
            <img src="../../public/images/carousel_1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../../public/images/carousel_2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../../public/images/carousel_3.jpg" alt="" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Carousel
