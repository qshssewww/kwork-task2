import { getBlogDetails } from "@/utils/fetches";
import { montserrat } from "@/app/fonts";
import BlogDetails from "@/components/pages/blog-details/blog-details";
import { getRequestData } from "@/utils/requestData";

export default async function Page(props: any) {
  // console.log(props.params.id,"--hel")
  var requestData = getRequestData();
  const data = await getBlogDetails(requestData);
  // console.log(data);

  return (
    <div className={`${montserrat.variable}`}>
      <BlogDetails data={data} />
    </div>
  );
}
