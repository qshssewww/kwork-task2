import Button from "@/components/ui/buttons/button/button";
import styles from "./feedback-modal-content.module.scss";
import { FormEvent, SyntheticEvent, useEffect, useState } from "react";
import StarRatingProgressBar from "@/components/ui/progress-bars/star-rating-progress-bar/star-rating-progress-bar";
import { sendFeedback } from "@/utils/fetches";
import { IStringObj } from "@/utils/types";

interface Props {
  data: any;
  tourId: string;
}

function FeedbackModalContent({ data, tourId }: Props) {
  const [value, setValue] = useState<{ [key: string]: number }>({
    transfer: 0,
    price: 0,
    service: 0,
    organization: 0,
  });

  const [inputsData, setInputsData] = useState<IStringObj>({
    transport: "",
    price_quality: "",
    service: "",
    organization: "",
    text: "",
    tour_id: "8",
    user_id: "1",
  });

  const [picture, setPicture] = useState<{
    asUrl: string[];
    asFile: File[];
  }>({
    asUrl: [],
    asFile: [],
  });

  useEffect(() => {
    setInputsData({ ...inputsData, tour_id: tourId });
  }, []);

  const onChange = (
    newValue: number | null,
    valueKey: string,
    inputsDataKey: string
  ) => {
    if (newValue !== null) {
      setValue({ ...value, [valueKey]: newValue });
      setInputsData({
        ...inputsData,
        [inputsDataKey]: newValue.toString(),
      });
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var formData = new FormData(e.target as any);

    /*picture.asFile.map((el) => {
      formData.append("images", el);
    });

    const inputsDataKeys = Object.keys(inputsData);
    const inputsDataLength = inputsDataKeys.length;

    for (let i = 0; i < inputsDataLength; i++) {
      const key = inputsDataKeys[i];
      formData.append(key, JSON.stringify(inputsData[key]));
    }
*/
    Object.keys(inputsData).forEach((val) => {
      formData.append(val, inputsData[val]);
    })
    sendFeedback(formData);
  };

  function handlePhotosChange(e: SyntheticEvent) {
    const target = e.target as HTMLInputElement;

    const files = target.files;

    files &&
      Array.from(files).forEach((el) => {
        setPicture((prevState) => ({
          ...prevState,
          asUrl: prevState.asUrl.concat(URL.createObjectURL(el)),
          asFile: prevState.asFile.concat(el),
        }));
      });
  }

  return (
    <div>
      <h2 className={styles.title}>{data.feedback.name}</h2>
      <p className={styles.caption}>{data.feedback.des}</p>

      <ul className={styles.feedbackList}>
        <li className={styles.feedbackItem}>
          <p className={styles.feedbackItemTitle}>
            {data.feedback.starFeedback[0].name}
          </p>
          <StarRatingProgressBar
            starsAmount={5}
            isReadonly={false}
            value={value.transfer}
            onChange={(event: any, newValue: number) => {
              onChange(newValue, "transfer", "transport");
            }}
          />
        </li>
        <li className={styles.feedbackItem}>
          <p className={styles.feedbackItemTitle}>
            {data.feedback.starFeedback[1].name}
          </p>
          <StarRatingProgressBar
            starsAmount={5}
            value={value.price && value.price}
            isReadonly={false}
            onChange={(event: any, newValue: number) => {
              onChange(newValue, "price", "price_quality");
            }}
          />
        </li>
        <li className={styles.feedbackItem}>
          <p className={styles.feedbackItemTitle}>
            {" "}
            {data.feedback.starFeedback[2].name}
          </p>
          <StarRatingProgressBar
            starsAmount={5}
            value={value.service}
            isReadonly={false}
            onChange={(event: any, newValue: number) => {
              onChange(newValue, "service", "service");
            }}
          />
        </li>
        <li className={styles.feedbackItem}>
          <p className={styles.feedbackItemTitle}>
            {" "}
            {data.feedback.starFeedback[3].name}
          </p>
          <StarRatingProgressBar
            starsAmount={5}
            value={value.organization}
            isReadonly={false}
            onChange={(event: any, newValue: number) => {
              onChange(newValue, "organization", "organization");
            }}
          ></StarRatingProgressBar>
        </li>
      </ul>
      <form onSubmit={(e) => onSubmit(e)}>
      <div className={styles.inputsContainer}>
        <label className={`${styles.inputLabel}`} htmlFor="feedback">
          <input
            className={`${styles.input}`}
            placeholder={`${data.feedback.inputDes}*`}
            type="textarea"
            name="text"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              setInputsData({ ...inputsData, text: target.value });
            }}
          />
        </label>
      </div>

        <div className={styles.photosContainer}>
          <div className={styles.photosTitleContainer}>
            <p className={styles.photosTitle}>{data.feedback.inputPhoto}</p>

            <label htmlFor="" className={styles.attachPhotoLabel}>
              {data.feedback.buttonPhoto}
              <input
                  name="images"
                type="file"
                className={styles.attachPhotoInput}
                multiple
                onChange={(e) => handlePhotosChange(e)}
              />
            </label>
          </div>

          <ul className={styles.feedbackPhotosList}>
            {picture.asUrl
              ? picture.asUrl.map((el: any, index: number) => {
                  return (
                    <li key={index} className={styles.feedbackPhotosItem}>
                      <img
                        className={styles.feedbackPhoto}
                        src={el}
                        alt="feedback-photo"
                        width={82}
                        height={82}
                      />
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
        <Button
          extraClass={styles.submitButton}
          htmlType="submit"
          content={data.feedback.buttonNext}
        />
      </form>
    </div>
  );
}

export default FeedbackModalContent;
