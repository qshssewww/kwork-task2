"use client";

import styles from "./route-path.module.scss";
import Link from "next/link";
import ArrowRight from "@/images/logos/icons/arrow-right.svg";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface Props {
  data: any;
  colorTheme?: "white" | "grey" | "dark";
  position?: "left" | "center";
  extraClass?: string;
}

function RoutePath({
  data,
  colorTheme = "white",
  position = "left",
  extraClass,
}: Props) {
  const listClassName = clsx(
    styles.list,
    {
      [styles?.[`list_colorTheme_${colorTheme}`]]: colorTheme,
      [styles?.[`list_position_${position}`]]: position,
    },
    extraClass
  );

  const pathName = usePathname();
  return (
    <ul className={listClassName}>
      {data.map((el: { name: string }, index: number) => {
        const { name } = el;
        const loweredName = name.toLowerCase();
        const nameIndex = pathName.indexOf(loweredName);
        const prevRoute = pathName.slice(0, nameIndex + name.length);

        return (
          <li key={index} className={styles.item}>
            {index === 0 ? (
              <Link href="/" className={styles.link}>
                <p className={styles.itemName}>{name}</p>
              </Link>
            ) : (
              <>
                <ArrowRight className={styles.arrow} width={16} height={16} />
                {index === data.length - 1 ? (
                  <p className={styles.itemName}>{name}</p>
                ) : (
                  <Link href={prevRoute} className={styles.link}>
                    <p className={styles.itemName}>{name}</p>
                  </Link>
                )}
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default RoutePath;
