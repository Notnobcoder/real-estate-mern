import { MainLayout } from "../../layout/main";
import { Details } from "./details";

export default function HomePage() {
  return (
    <MainLayout>
      <div className="container">
        {/* <Design /> */}
        {/* <Home /> */}
        {/* <DialogC /> */}
        <Details />
      </div>
    </MainLayout>
  )
}
