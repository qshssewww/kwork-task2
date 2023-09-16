import { getBlog } from "@/utils/fetches";
import { montserrat } from "../../fonts";
import BlogPage from "@/components/pages/blog-page/blog-page";
import Index from "@/components/pages/error404";

export default async function Page({ searchParams }: any) {
  const data = await getBlog(
    searchParams?.variant ? searchParams?.variant.toLowerCase() : "all",
    searchParams?.page ? searchParams?.page : 1
  );

  return data ? (
    <div className={`${montserrat.variable}`}>
      <BlogPage data={data} />
    </div>
  ) : <Index/>;
}
