import { NextPage } from "next";
import MainLayout from "../Layout/MainLayout";
import EmptyLayout from "../Layout/EmptyLayout";

type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout };

type PageWithEmptyLayoutType = NextPage & { layout: typeof EmptyLayout };

type PageWithLayoutType = PageWithMainLayoutType | PageWithEmptyLayoutType;

export default PageWithLayoutType;