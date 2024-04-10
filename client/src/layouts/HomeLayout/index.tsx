import { Header } from "../../components/Header";
import { Footer } from "../footer";

interface homeLayoutInteface {
  children: React.ReactNode;
}

export const HomeLayout = (props: homeLayoutInteface) => {
  const { children } = props;
  return (
    <>
      <Header />
      <div className="container py-4">{children}</div>
      <Footer />
    </>
  );
};
