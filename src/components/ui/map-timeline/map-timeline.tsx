import styles from "./map-timeline.module.scss";
import MapMarker from "../map-marker/map-marker";

interface Props {
  children?: React.ReactNode;
  data: any;
}

function MapTimeline({ data }: Props) {
  return (
    <div className={styles.container}>
      <ul className={styles.timelineList}>
        {data?.map((el: any, index: number) => {
          return (
            <li key={index} className={styles.timelineItem}>
              <MapMarker
                extraClass={styles.marker}
                key={el.id}
                size="big"
                dataLength={data.length}
                index={index}
              />
              <div key={index} className={styles.descriptionItem}>
                <p className={styles.descriptionItemTitle}>{el.name}</p>
                <p className={styles.descriptionItemContent}>{el.address}</p>
                <p className={styles.descriptionItemContent}>
                  {el.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MapTimeline;
