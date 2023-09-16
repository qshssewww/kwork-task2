import { montserrat } from "../fonts";
import styles from "../page.module.scss";
import React from "react";
import MainPage from "@/components/pages/main-page/main-page";
import { getHomeData } from "@/utils/fetches";
import {getRequestData} from "@/utils/requestData";



export default async function Home({params}: any) {
    // console.log(params,"---coon");
    var requestData = getRequestData();
    const data = await getHomeData(requestData);
    // console.log(data,"---home")
    return (
        <div className={`${montserrat.variable} ${styles.container}`}>
            <MainPage data={data} />
        </div>
    );
}