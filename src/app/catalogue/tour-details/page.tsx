import styles from "./page.module.scss";
import { getTourDetails } from "@/utils/fetches";
import { montserrat } from "@/app/fonts";
import TourDetailsPage from "@/components/pages/tour-details-page/tour-details-page";
import { getRequestData } from "@/utils/requestData";

export default async function TourDetails() {
  var requestData = getRequestData();
  const data = await getTourDetails(requestData);

  return (
    <div className={`${montserrat.variable} ${styles.container}`}>
      <TourDetailsPage data={data} />
    </div>
  );
}