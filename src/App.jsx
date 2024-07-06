import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryPage from "./pages/CategoryPage";
import Add from "./pages/Add";
import Sign from "./pages/Sign";
import Login from "./pages/Login";
import AddConfirm from "./pages/AddConfirm";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/product-detail-page":
        title = "";
        metaDescription = "";
        break;
      case "/category-page":
        title = "";
        metaDescription = "";
        break;
      case "/add":
        title = "";
        metaDescription = "";
        break;
      case "/sign":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/sign1":
        title = "";
        metaDescription = "";
        break;
      case "/profile1":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
        case "/homepage":
        title = "";
        metaDescription = "";
        break;
        
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/product-detail-page" element={<ProductDetailPage />} />
      <Route path="/category-page" element={<CategoryPage />} />
      <Route path="/add" element={<Add />} />
      <Route path="/sign" element={<Sign />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirm" element={<AddConfirm />} />
      <Route path="/profile1" element={<Profile />} />
      <Route path="/profile" element={<ProfileEdit />} />
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
}
export default App;
