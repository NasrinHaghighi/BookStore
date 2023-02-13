import type { NextPage } from "next";
import React, {useEffect,useRef} from "react";
import PageWithLayoutType from "../types/layout";
import MainLayout from "../Layout/MainLayout";
import Features from "../components/Features/Features";
import Slider from "../components/Slider/SliderCo";
import CategorySectio from "../components/CategorySection/CategorySectio";
import ReactVerticalTimelineComponentTests from "../components/TimeLine/TimeLine";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import Aduio from "../components/Aduio/Aduio";
import Discount from '../components/Discount/Discount'
import MovingBanner from "../components/MovingBanner/MovingBanner";

import handleViewport from 'react-in-viewport';




const Home: NextPage = () => {

  return (
    <>
     <Slider />
    <CategorySectio />
    
    <Features id='feat'/> 
    <Discount id='discont'/>
    <MovingBanner />
    <Aduio />
    <ReactVerticalTimelineComponentTests />

    </>
  );
};
(Home as PageWithLayoutType).layout = MainLayout;
export default Home;