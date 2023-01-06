import type { NextPage } from "next";
import PageWithLayoutType from "../types/layout";
import MainLayout from "../Layout/MainLayout";




const Home: NextPage = () => {
  return (
    <>
   

    </>
  );
};
(Home as PageWithLayoutType).layout = MainLayout;
export default Home;