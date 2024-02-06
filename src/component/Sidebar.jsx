import { IoIosStar } from "react-icons/io";
import Search from "./Search";
const Sidebar = () => {
  return (

    <div className="">
      <Search/>
        <h2 className="text-2xl">customer reviews</h2>
        <div className="mb-5">
          <div className="flex text-amber-400">{Array.from(Array(5), (e, i) => <IoIosStar key={i} />)}</div>
          <div className="flex text-amber-400">{Array.from(Array(5), (e, i) => <IoIosStar key={i} />)}</div>
          <div className="flex text-amber-400">{Array.from(Array(5), (e, i) => <IoIosStar key={i} />)}</div>
          <div className="flex text-amber-400">{Array.from(Array(5), (e, i) => <IoIosStar key={i} />)}</div>
        </div>
        <div className="flex flex-col max-w-28 ">
          <h2 className="text-2xl">brands</h2>
         <div className="item-center">
         <input type="checkbox" name="apple" id="" />
          <label htmlFor="apple" >apple</label>
         </div>
        <div className="item-center">
        <input type="checkbox" name="samsung" id="" />
          <label htmlFor="samsung">samsung</label>
        </div>
         <div className="item-center">
         <input type="checkbox" name="sony" id="" />
          <label htmlFor="sony">sony</label>
         </div>
        </div>
        <div className="mt-5">
          <h2 className="mb-2 text-2xl">price</h2>
          <p>under $25</p>
          <p>$25 - $50</p>
          <p>$50 - $100</p>
          <p>above $100</p>
        </div>
      </div>
  )
}

export default Sidebar
