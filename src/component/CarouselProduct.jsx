
import { Link } from "react-router-dom";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import axios from "axios";
import { useQuery } from "react-query";

const CarouselProduct = () => {
    const getProducts = async () => {
        const {data} = await axios.get("http://localhost:1337/api/products?populate=image")
        return data
    }
    const {data}=useQuery("products",()=> getProducts())

  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Best Sellers</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {data?.data?.map((product) => (
          <SwiperSlide key={product?.id}>
             <Link key={product?.id} to={`/product/${product?.id}`} className="flex-1">
      <img
        src={`http://localhost:1337${product?.attributes?.image?.data?.attributes?.url}`}
        alt="Carousel product"
        className="h-20 w-ful"
      />
    </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProduct;

{/* <div className="bg-white m-3 flex flex-col ">
<div className="text-2xl font-semibold p-3">Best Sellers</div>
<div className="flex flex-">
  {data?.data?.map((product) => (
    <Link key={product?.id} to={`/product/${product?.id}`} className="flex-1">
      <img
        src={`http://localhost:1337${product?.attributes?.image?.data?.attributes?.url}`}
        alt="Carousel product"
        className="h-20 w-ful"
      />
    </Link>
  ))}
</div>

</div> */}