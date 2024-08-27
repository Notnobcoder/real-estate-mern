import { Link, Route, Routes } from "react-router-dom";
import BrandAdd from "./AddBrand";
import { ShowBrand } from "./ShowBrands";


// BrandProducts.js

// BrandPage.js
const BrandPage = () => {
  // const { data } = useQuery<BrandType>(ApiClient.GET_Brand)
  //
  // console.log(data)

  return (
    <div className="p-4">
      <Link to={"/"}>
        <h1>Brand Page</h1>
      </Link>
      <nav>
        <ul className="flex items-center gap-4 font-bold">
          <li><Link to="/brand">Add Brand</Link></li>
          <li><Link to="products">Show Brands</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<BrandAdd />} />
        <Route path="products" element={<ShowBrand />} />
      </Routes>
    </div>
  );
};

export default BrandPage;
