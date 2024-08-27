import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HomePage from "../HomePage"
import SocketPage from "../SocketPage"
import LoginPage from "../LoginPage"
import { RegisterPage } from "../RegisterPage"
import ProductPage from "../ProductPage"
import SellPage from "../SellPage"
import BrandPage from "../BrandPage"
import CartPage from "../CartPage"
import ShippingPage from "../ShippingPage"
import PaymentMethordPage from "../PaymentMethordPage"
import PlaceOrderPage from "../PlaceOrderPage"
import { useUserAuthStore } from "../../store"
import SearchPage from "../Search"

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useUserAuthStore()

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }


  return (
    <>
      {children}
    </>
  )
}

const RedirectAuth = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useUserAuthStore()

  if (isAuthenticated) {
    return <Navigate to='/' replace />;
  }

  return (
    <>
      {children}
    </>
  )
}


export const Application = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />

        <Route path="/search" element={
          <SearchPage />
        } />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/socket" element={<SocketPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={
          <RedirectAuth>
            <LoginPage />
          </RedirectAuth>
        } />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/brand/*" element={<BrandPage />} />
        <Route path="/register" element={
          <RedirectAuth>
            <RegisterPage />
          </RedirectAuth>
        } />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/payment-methord" element={<PaymentMethordPage />} />
        <Route path="/place-order" element={<PlaceOrderPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}
