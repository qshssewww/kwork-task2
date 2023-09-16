import { NextPage } from "next";
import styles from "./policy-page.module.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import RoutePath from "@/components/ui/route-path/route-path";
import { FC } from "react";

interface Props {
  data: any;
}

const PolicyPage: FC<Props> = ({ data: data }) => {
  console.log(data);
  const { name, Description } = data.Contact.Text;

  return (
    <div>
      <Header data={data} colorTheme="light" />
      <main>
        <div className={`${styles.section} ${styles.container}`}>
          {data?.Contact.Text.Bread && (
            <RoutePath data={data?.Contact.Text.Bread} colorTheme="grey" />
          )}
          <h1 className={styles.title}>{name}</h1>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: Description }}
          />
        </div>
      </main>
      <Footer data={data} />
    </div>
  );
};

export default PolicyPage;
