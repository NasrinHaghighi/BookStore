import type { NextPage } from "next";
import PageWithLayoutType from "../types/layout";
import MainLayout from "../Layout/MainLayout";
import Features from "../components/Features/Features";
import Slider from "../components/Slider/SliderCo";




const Home: NextPage = () => {
  return (
    <>
    <Slider />
    <Features title='art' /> 

    </>
  );
};
(Home as PageWithLayoutType).layout = MainLayout;
export default Home;