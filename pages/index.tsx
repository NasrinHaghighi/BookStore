import type { NextPage } from "next";
import React, {useEffect,useRef} from "react";
import PageWithLayoutType from "../types/layout";
import MainLayout from "../Layout/MainLayout";
import Features from "../components/Features/Features";
import Slider from "../components/Slider/SliderCo";
import CategorySectio from "../components/CategorySection/CategorySectio";
import ReactVerticalTimelineComponentTests from "../components/TimeLine/TimeLine";
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import Discount from '../components/Discount/Discount'

const Home: NextPage = () => {
const tag=useAppSelector(state=>state.tag.tag)
console.log(tag)
const scollToRef = useRef<HTMLDivElement>(null);


  // useEffect(() => {
  //   scollToRef?.current?.scrollIntoView()
  // }, [tag])


  return (
    <>
     <Slider />
    <CategorySectio />
    <ReactVerticalTimelineComponentTests />
    <Features title='art'/> 
  <Discount />
    <div >authors</div>

    </>
  );
};
(Home as PageWithLayoutType).layout = MainLayout;
export default Home;