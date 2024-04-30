import { useQuery } from "react-query";
import * as apiClient from "../../api-client"
import { ProductsD } from "../../types/home";
import { HomeLayout } from "../../layouts/HomeLayout";
import { Navigation } from "../../components/Navigation/Navigation";

const HomePage = () => {

  debugger
  const { data: hotels } = useQuery<ProductsD>("fetchQuery", () =>
    apiClient.fetchHotels()
  );

  const topRowHotels = hotels?.products?.slice(0, 2) || [];
  const bottomRowHotels = hotels?.products.slice(2) || [];

  return (
    <div className="space-y-3">
      <HomeLayout>

        <Navigation />
        <h2 className="text-3xl font-bold">Latest Destinations</h2>
        <p>Most recent desinations added by our hosts</p>

        <div className="grid gap-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {topRowHotels.map((hotel) => (
              <h4>{hotel?.title}</h4>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {bottomRowHotels.map((hotel) => (
              <h4>{hotel?.title}</h4>
            ))}
          </div>
        </div>
      </HomeLayout>

    </div>
  );
};

export default HomePage;
