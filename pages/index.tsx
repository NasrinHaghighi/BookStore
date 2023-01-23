import type { NextPage } from "next";
import PageWithLayoutType from "../types/layout";
import MainLayout from "../Layout/MainLayout";
import Features from "../components/Features/Features";
import Slider from "../components/Slider/SliderCo";
import CategorySectio from "../components/CategorySection/CategorySectio";
import ReactVerticalTimelineComponentTests from "../components/TimeLine/TimeLine";




const Home: NextPage = () => {
  return (
    <>
    <Slider />
    <CategorySectio />
    <ReactVerticalTimelineComponentTests />
    <Features title='art' /> 
   

    </>
  );
};
(Home as PageWithLayoutType).layout = MainLayout;
export default Home;