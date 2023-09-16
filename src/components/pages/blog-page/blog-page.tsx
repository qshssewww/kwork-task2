"use client";
import { FC, useEffect, useState } from "react";
import styles from "./blog-page.module.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import RoutePath from "@/components/ui/route-path/route-path";
import BlogCard from "@/components/ui/cards/blog-card/blog-card";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

interface Props {
  data: any;
}

const BlogPage: FC<Props> = ({ data: data }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [pagination, setPagination] = useState(
    Number(searchParams.get("page")) ? Number(searchParams.get("page")) - 1 : 0
  );

  useEffect(() => {
    if (!searchParams.get("variant")) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("variant", "All");
      if (!searchParams.get("page")) {
        searchParams.set("page", "1");
      }
      const newPathname = `${
        window.location.pathname
      }?${searchParams.toString()}`;

      router.push(newPathname);
    }
  }, []);

  const handleSearch = (variant:any) => {
    updateSearchParams(variant);
  };

  const updateSearchParams = (variant: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    if (variant) {
      searchParams.set("variant", variant);
    }
    if (pagination) {
      searchParams.set("page", "1");
      setPagination(1);
    }
    // Generate the new pathname with the updated search parameters
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  const updatePaginationSearchParams = (page: number) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    if (page) {
      searchParams.set("page", String(page));
    }
    // Generate the new pathname with the updated search parameters
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  const blogCount = +data.blogCount;

  return (
    <div>
      <Header data={data} colorTheme="light" />
      <main className={`${styles.section} ${styles.container}`}>
        <div className={styles.contentContainer}>
          {data?.Bread && <RoutePath data={data?.Bread} colorTheme="grey" />}
          <h1 className={styles.title}>Blog</h1>
          <ul className={styles.tabList}>
            {data?.Tab.map((tab:any) => (
              <li key={tab.name} className={styles.tabItem}>
                <button
                  onClick={() => handleSearch(tab.name)}
                  className={`${styles.button} ${
                    tab.name !== searchParams.get("variant") &&
                    styles.buttonInactive
                  }`}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.productList}>
            {data.Product.length
              ? data.Product.map((el: any, index: number) => {
                  return (
                    <BlogCard
                      key={index}
                      name={el.name}
                      image={el?.image}
                      description={el.description}
                      tab={el?.tab}
                      date={el?.date}
                      url={el?.url}
                    />
                  );
                })
              : "Nothing found!"}
          </div>
          {blogCount > 35 && (
            <ul className={styles.paginationList}>
              {new Array(Math.ceil(blogCount / 35)).fill(1).map((pag, i) => (
                <li key={pag}>
                  <button
                    onClick={() => {
                      setPagination(i + 1);
                      updatePaginationSearchParams(i + 1);
                    }}
                    className={`${styles.paginationItem} ${
                      Number(searchParams.get("page")) == i + 1
                        ? styles.paginationItemActive
                        : null
                    }`}
                  ></button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <Footer data={data} />
    </div>
  );
};

export default BlogPage;
