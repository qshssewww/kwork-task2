import React from "react";
import { montserrat } from "../../../fonts";
import GuideCity from "@/components/pages/guideCity-page/guideCity-page";
import { getRequestData } from "@/utils/requestData";
import { getGuidCity } from "@/utils/fetches";

export default async function guide() {
  var requestData = await getRequestData();
  const data = await getGuidCity(requestData);

  return (
    <div className={`${montserrat.variable}`}>
      <GuideCity requestData={data} />
    </div>
  );
}
