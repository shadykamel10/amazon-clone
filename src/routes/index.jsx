import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../component/HomePage";
import Login from "../component/login";
import ProductPage from "../component/ProductPage";
import CheckoutPage from "../component/CheckoutPage";
import Search from "../component/SearchResult";
const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/search" element={<Search />} />

    </>
));

export default router