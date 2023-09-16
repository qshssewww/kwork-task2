import styles from "./page.module.scss";
import { getCatalogueData } from "@/utils/fetches";
import { montserrat } from "@/app/fonts";

import WishlistPage from "@/components/pages/wishlist-page/wishlist-page";

export default async function Wishlist() {
  const data = await getCatalogueData();

  return (
    <div className={`${montserrat.variable} ${styles.container}`}>
      <WishlistPage data={data} />
    </div>
  );
}
