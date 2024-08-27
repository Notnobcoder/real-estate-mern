import { Link } from "react-router-dom";
import { LoginForm } from "../../forms/login";
import { MainLayout } from "../../layout/main";


export default function LoginPage() {

  return (
    <MainLayout >
      <div className="container space-y-8 h-[50vh]">
        <h4 className="text-3xl font-bold">Login Page</h4>
        <LoginForm />
        <h4>Do Not have a account <Link to={"/register"}>Register Now</Link> </h4>
      </div>
    </MainLayout>
  )
}
