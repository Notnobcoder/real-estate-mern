import { Link } from "react-router-dom"
import { MainLayout } from "../../layout/main"

const PaymentMethordPage = () => {
  return (
    <MainLayout>
      <div className="container">
        <h3 className="text-xl">Payment Methord Page</h3>
        <input
          placeholder="Paypal"
          name="check"
          type="radio"
        />

        <input
          placeholder="Stripe"
          name="check"
          type="radio"
        />

        <Link to={"/place-order"}>
          <h4>Next</h4>
        </Link>
      </div>

    </MainLayout>
  )
}

export default PaymentMethordPage 
