import { getTourData } from "@/utils/fetches";
import ToursInDubaiPage from "@/components/pages/tours-in-dubai-page/tours-in-dubai-page";
import ThemeParksPage from "@/components/pages/theme-parks-page/theme-parks-page";
import Index from "@/components/pages/error404";
import { getRequestData } from "@/utils/requestData";

async function ThemeParks({ params }: any) {
  var city = params.city;
  var attraction = params.attraction;

  
  const requestParams = {
    language: "en",
    country: "uae",
    type: "tour",
    city: city,
    attraction: attraction,
    pageNumber: 1,
  };
  // console.log(requestParams,"--fafafa");

  var requestData = getRequestData();
  // console.log(requestData,"-reqq");
  var data = await getTourData(requestData, requestParams);

  // console.log(data);

return <ThemeParksPage params={requestParams} data={data} city={city} />;
}

export default ThemeParks;
