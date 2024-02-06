import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../context/GlobalState";
import auth from "../../firebase";

const Header = () => {



  const {user}=useAuth()

  const handlleAuth = () => {
    auth.signOut();
  }
  return (
  <div className="flex bg-[#131921] sticky z-50 w-full ">
      <Link to="/">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.KTDfEdLrGrelL8iwrLr99QHaEo&pid=Api&P=0&h=220"
          alt=""
          className="w-28"
        />
      </Link>
      <div className="flex ">
        <input
          type="text"
          className="h-8 mt-3 ml-2 w-[900px]"
          
        />
        <FaSearch className="mt-5 ml-2 text-white w-10" />
      </div>
      <div className="flex text-white " onClick={handlleAuth}>
        <Link to={"/login"} className="mr-2">
          <div>hello {user ? `${user.email}` : `guest`}</div>
          <h3>{user ? `sign out` : `sign in`}</h3>
        </Link>
        <Link to={"/orders"} className="mr-2">
          <div>return</div>
          <h3>& orders</h3>
        </Link>
        <div>
          <p>your</p>
          <h3>prime</h3>
        </div>
        <Link to={"/checkout"} className="mr-2 flex mt-5 ml-5 ">
          <FaShoppingCart className="mr-2" />
          
        </Link>
      </div>
    </div>
  );
};

export default Header;
