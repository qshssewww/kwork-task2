import { NextPage } from "next";
import styles from "./faq-page.module.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import RoutePath from "@/components/ui/route-path/route-path";
import Accordion from "@/components/ui/accordion/accordion";
import { FC } from "react";

interface Props {
  data: any;
}

const FaqPage: FC<Props> = ({ data: data }) => {
  return (
    <div>
      <Header data={data} colorTheme="light" />
      <main>
        <div className={`${styles.section} ${styles.container}`}>
          {data?.faq.bread && (
            <RoutePath data={data?.faq.bread} colorTheme="grey" />
          )}
          <h1 className={styles.title}>{data.faq.name}</h1>
          <p className={styles.description}>{data.faq.Description}</p>
          {data.faq.event.map((faq:any) => (
            <Accordion
              key={faq.titleEvent}
              summary={faq.titleEvent}
              details={faq.descriptionEvent}
            />
          ))}
        </div>
      </main>
      <Footer data={data} />
    </div>
  );
};

export default FaqPage;
