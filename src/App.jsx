
import { Route,Routes } from "react-router-dom";
import Header from "./component/Header";
import Login from "./component/login";
import HomePage from "./component/HomePage";
import ProductPage from "./component/ProductPage";
import CheckoutPage from "./component/CheckoutPage";
import Search from "./component/SearchResult";
const App = () => {
 
  return (
    <div>
  <Header />
  <Routes>
    <Route index  element={<HomePage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/product/:id" element={<ProductPage />} /> 
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route path="/search" element={<Search />} />
  </Routes>
</div>
  )
}

export default App
