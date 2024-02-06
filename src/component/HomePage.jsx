import Carousel from "./Carousel"
// import axios from "axios"
import HomePageCard from "./HomePageCard"
import CarouselCategory from "./CarouselCategory"
import CarouselProduct from "./CarouselProduct"
const ProductPage = () => {

  
  // const getProducts =async () => {
  //   const {} = await axios.get("http://localhost:1337/api/products")

  // }
  return (
    <div className= '' >
     
      
      <Carousel/>
      <div className="grid grid-cols-3 xl:grid-cols-4 -mt-[100px]  ">
      <HomePageCard
            title={"We have a surprise for you"}
            img={"../../public/images/home_grid_1.jpg"}
            link={"See terms and conditions"}
          />
          <HomePageCard
            title={"Watch The Rings of Power"}
            img={"../../public/images/home_grid_2.jpg"}
            link={"Start streaming now"}
          />
          <HomePageCard
            title={"Unlimited Streaming"}
            img={"../../public/images/home_grid_3.jpg"}
            link={"Find out more"}
          />
          <HomePageCard
            title={"More titles to explore"}
            img={"../../public/images/home_grid_4.jpg"}
            link={"Browse Kindle Unlimited"}
          />
          <HomePageCard
            title={"Shop Pet Supplies"}
            img={"../../public/images/home_grid_5.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Spring Sale"}
            img={"../../public/images/home_grid_6.jpg"}
            link={"See the deals"}
          />
          <HomePageCard
            title={"Echo Buds"}
            img={"../../public/images/home_grid_7.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Family Plan: 3 months free"}
            img={"../../public/images/home_grid_8.jpg"}
            link={"Learn more"}
          />
      </div>
      <CarouselProduct/>
      <CarouselCategory/>
    </div>
  )
}

export default ProductPage
