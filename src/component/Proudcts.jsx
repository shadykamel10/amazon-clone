/* eslint-disable react/prop-types */
import {textSlice} from "../utils/function"
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";

const ProudctCard = ({product,className}) => {

  
   return (
    <div className={`${className} w-full shadow-lg space-x-5 `}>
      
        <div className="w-40">
        <Link >
        <img src={`http://localhost:1337${product?.attributes?.image?.data?.attributes?.url}`} 
        alt="product-img"
        className="h-50 w-50 "
        />
        </Link>
            <p className="w-32 ml-5"> {textSlice(product?.attributes?.title)}</p>
            <p><div className="flex text-amber-400">{Array.from(Array(5), (e, i) => <IoIosStar key={i} />)}</div></p>
            <small className=" ml-5">$</small>
            <strong className="text-xl " >{product?.attributes?.price}</strong>
        </div>
       
        <button className="bg-blue-500 p-2 text-white rounded-md" >view details</button>
        
        
    </div>
  )
}

export default ProudctCard
