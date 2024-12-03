import Image from "next/image";
import Toolbar from "./components/toolbar";
import Menu from "./components/menu";
import Services from "./components/services";
import Footer from "./components/footer";
import Offer from "./components/offer";
import NewProducts from "./components/new-products";
import Category from "./components/category";
import Slider from "./components/slider";
import Banner1 from "./components/banner1";
import BestSells from "./components/best-sell";
import Banner2 from "./components/banner2";

export default function Home() {
  return (
    <>
      <Toolbar />
      <Menu />
      <Slider />
      <Category />
      <Offer />
      <NewProducts />
      <Banner1 />
      <BestSells />
      <Banner2 />
      <Services />

    </>
  );
}
