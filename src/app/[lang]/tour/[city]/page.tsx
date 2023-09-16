import { getTourData } from "@/utils/fetches";
import { useParams } from "next/navigation";
import ToursInDubaiPage from "@/components/pages/tours-in-dubai-page/tours-in-dubai-page";
import Index from "@/components/pages/error404";
import {getRequestData} from "@/utils/requestData";

async function ToursInDubai({params}: any) {
  const city = params.city;

  const requestParams = {
    language: "en",
    country: "uae",
    type: "tour",
    city: city,
    pageNumber: 1,
  };

  var requestData = getRequestData();

  var data = await getTourData(requestData, requestParams);

  return (
    data ? (
      <ToursInDubaiPage data={data} city={city} params={requestParams} />
    ) : <Index/>
  );
}

export default ToursInDubai;
