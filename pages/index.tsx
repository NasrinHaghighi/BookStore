import type { NextPage } from "next";
import PageWithLayoutType from "../types/layout";
import MainLayout from "../Layout/MainLayout";
import Features from "../components/Features/Features";




const Home: NextPage = () => {
  return (
    <>
    <Features title='art'/>

    </>
  );
};
(Home as PageWithLayoutType).layout = MainLayout;
export default Home;