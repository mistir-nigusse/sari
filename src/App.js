import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/navbar/navbar";
import Home from "./components/home/home";
import { Routes, Route, Router } from "react-router-dom";
import Footer from "./components/footer/footer";
import ProductPage from "./components/product/product_page";
import Categorie from "./components/category/category";
import LeftDrawer from "./components/left_drawer/left_drawer";
import SearchPage from "./components/search/search_page";
import Breadcrumb from './components/utils/breadcrumb'
function App() {
    const showLeftDrawer = useSelector((state) => state.leftDrawer.isOpen);
  return (
    <div className="root">
      <Header />
      <Breadcrumb />
      {showLeftDrawer && <LeftDrawer />}
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<ProductPage />} />
          <Route exact path="/categories/:name" element={<Categorie />} />
          <Route exact path="/search/:name" element={<SearchPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
