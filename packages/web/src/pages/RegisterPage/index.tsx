import { Link } from "react-router-dom"
import RegisterForm from "../../forms/Register"
import { MainLayout } from "../../layout/main"

export const RegisterPage = () => {
  return (
    <MainLayout>
      <div className="container space-y-4">
        <h4 className="text-3xl font-bold">Register Page</h4>
        <RegisterForm />
        <h4>Do Not have a account <Link to={"/login"}>Login Now</Link> </h4>
      </div>
    </MainLayout>
  )
}
