import Image from "next/image";
import styles from "./feedback-modal-approval.module.scss";
import ApprovalCheckmark from "@/images/logos/icons/green-approval-mark.png";
import Button from "@/components/ui/buttons/button/button";
import { SyntheticEvent } from "react";

interface Props {
  data: {
    name: string;
    des: string;
    buttonClose: string;
  };
  onClose: (() => void) | ((e: SyntheticEvent) => void);
}

function FeedbackModalApproval({ data, onClose }: Props) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.checkmarkImage}
        src={ApprovalCheckmark}
        alt={"approval checkmark"}
        width={140}
        height={140}
      />
      <p className={styles.title}>{data.name}</p>
      <p className={styles.caption}>{data.des}</p>
      <Button
        extraClass={styles.button}
        content={data.buttonClose}
        background="white"
        contentColor="darkBlue"
        onClick={onClose}
      />
    </div>
  );
}

export default FeedbackModalApproval;
