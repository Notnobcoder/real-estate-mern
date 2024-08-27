import { Link } from "react-router-dom"
import { useCart } from "../../context"
import { MainLayout } from "../../layout/main"

const CartPage = () => {
  const { cart, setCart } = useCart()
  console.log(cart, "ccccc")


  const handleCart = (id: string) => {
    const updatedCart = cart.filter(item => item.id !== id)
    setCart(updatedCart) // Update
  }

  return (
    <MainLayout >

      <div className="p-4 container">
        <h4 className="text-3xl">Cart Items</h4>
        {cart.length > 0 ? (
          <div className="space-y-8 min-h-[50vh] my-4">
            {cart.map((_) => (
              <div key={_.id} className="flex items-center gap-4">
                <div>
                  <img src={_.imageUrl} className="w-[20vh] h-[20vh] rounded-sm object-cover" />
                </div>
                <h4>{_.name}</h4>
                <h4>{_.price}</h4>
                <button onClick={() => handleCart(_.id)} className="bg-red-600 text-white p-2 rounded-lg">Remove</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[50vh]">
            <h4 className="text-7xl ">No Items found</h4>
            <Link to={"/"}>
              <h4>GO Back to shopping</h4>
            </Link>
          </div>
        )}
        <div className="flex items-end justify-end">
          <Link to={"/shipping"} className="bg-slate-700 text-white rounded-sm p-2">Checkout</Link>
        </div>
      </div>

    </MainLayout>
  )
}

export default CartPage
