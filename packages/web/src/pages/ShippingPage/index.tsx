import { Link } from "react-router-dom"
import { MainLayout } from "../../layout/main"

const ShippingPage = () => {
  return (
    <MainLayout>
      <div className="container">
        <h3 className="text-3xl">shipping Page</h3>
        <Link to={"/payment-methord"}>
          <h4>Next</h4>
        </Link>
      </div>
    </MainLayout>
  )
}

export default ShippingPage
