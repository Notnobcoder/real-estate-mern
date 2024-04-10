import { ReactNode } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../footer";
import { HeroSection } from "../../components/HeroSection";

export interface HomeLayoutHeroProps {
  children: ReactNode;
}

export const HomeLayoutHero = (props: HomeLayoutHeroProps) => {
  const { children } = props;
  return (
    <>
      <Header />
      <HeroSection />
      <div className="container py-4">{children}</div>
      <Footer />
    </>
  );
};
