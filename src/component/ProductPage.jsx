import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../app/feature/cartSlice'
// import ProductDetails from './ProductDetails '
const ProductPage = () => {
  const dispatch=useDispatch()
  const {id} = useParams()
  const product = async()=>{
    const {data} = await axios.get(`http://localhost:1337/api/products/${id}?populate=image`)
    return data
  }
  const {data}=useQuery("product",()=>product())
  return (
    <div className="h-screen bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
        <div className="grid grid-cols-10 gap-2">
          {/* left */}
            <div className="col-span-2 p-8 rounded bg-white m-auto">
              <img src={`${import.meta.env.VITE_SERVER_URL}${data?.data?.attributes?.image?.data?.attributes?.url}`} alt="Main product" />
            </div>
            {/* middle */}
            <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
              <div className="mb-3">
                {/* <ProductDetails product={data} ratings={true} /> */}
                <h1 className="text-xl xl:text-2xl">{data?.data?.attributes?.title}</h1>

              </div>
              <div className="text-base xl:text-lg mt-3">
                <p>{data?.data?.attributes?.description}</p>
              </div>
            </div>
            {/* right */}
            <div className="col-span-2 p-4 rounded bg-white">
              <div className="text-xl xl:text-2xl text-red-700 text-right font-semibold">
                {data?.data?.attributes?.price}
              </div>
              <div className="text-sm xl:text-base text-blue-500 font-semibold mt-3">
                FREE Returns
              </div>
              <div className="text-sm xl:text-base text-blue-500 font-semibold mt-1">
                FREE Delivery
              </div>
              <div className="text-base xl:text-lg text-green-700 font-semibold mt-1">
                In Stock
              </div>
              <div className="text-base xl:text-lg mt-1">
                Quantity:
                <select
                  // onChange={(e) => setQuantity(e.target.value)}
                  className="p-2 bg-white border rounded-md focus:border-indigo-600"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <Link to="/checkout">
                <button
                  // onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                  className="bg-amazonclone-yellow w-full p-2  rounded-md mt-3"
                  onClick={() => dispatch(addToCartAction(data.data))}
                >
                  Add to Cart
                </button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
