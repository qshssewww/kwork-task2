import styles from "./page.module.scss";
import { getTourData } from "@/utils/fetches";
import { montserrat } from "@/app/fonts";
import TourPage from "@/components/pages/tour-page/tour-page";
import {getRequestData} from "@/utils/requestData";

export default async function TourDetails() {
  const params = {
    language: "en",
    country: "uae",
    type: "tour",
    pageNumber: 1,
  };
  var requestData = getRequestData();
  const data = await getTourData(requestData, params);

  return (
    <div className={`${montserrat.variable} ${styles.container}`}>
      <TourPage data={data} params={params} />
    </div>
  );
}
