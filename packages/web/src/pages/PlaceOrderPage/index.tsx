import { MainLayout } from "../../layout/main"

const PlaceOrderPage = () => {
  return (
    <MainLayout>
      <div className="container h-[50vh]">
        <h3 className="font-bold text-4xl">Place Order</h3>
        <div className="grid grid-cols-3 justify-between w-full">
          <div className="col-span-2 my-8 space-y-4">
            <div>
              <h4 className="text-xl">Shipping</h4>
              <p className="text-sm">this is the sample text for shipping Address</p>
            </div>

            <div>
              <h4 className="text-xl">Payment</h4>
              <h4 className="text-sm">Paypal</h4>
            </div>

            <div>
              <h4 className="text-xl">Items</h4>
            </div>
          </div>
          <div>
            <h5 className="text-3xl">Order Summary</h5>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default PlaceOrderPage
