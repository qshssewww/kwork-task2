import styles from "./map-marker.module.scss";
import clsx from "clsx";
import LocationClip from "@/images/logos/icons/location-clip.svg";

interface Props {
  innerText?: string | number;
  Icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  lat?: number;
  lng?: number;
  size?: "big" | "small";
  dataLength: number;
  extraClass?: string;
  index: number;
  marker?: boolean;
}
function MapMarker({ index, size = "small", dataLength, extraClass }: Props) {
  const className = clsx(
    styles.marker,
    [
      styles?.[
        `marker_color_${
          index === 0 || index === dataLength - 1 ? "darkBlue" : "lightBlue"
        }`
      ],
    ],
    {
      [styles?.[`marker_size_${size}`]]: size,
    },
    extraClass
  );

  return (
    <div className={className}>
      {index === 0 && (
        <LocationClip
          width={size === "big" ? 17 : 12}
          height={size === "big" ? 19 : 12}
        />
      )}
      {index > 0 && index < dataLength - 1 && (
        <p className={styles.innerText}>{index}</p>
      )}
      {index === dataLength - 1 && <></>}
    </div>
  );
  {
  }
}

export default MapMarker;
