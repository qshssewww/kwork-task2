import { baseUrl } from "@/utils/constants";
import styles from "./button.module.scss";
import clsx from "clsx";

export interface ButtonProps
  extends React.PropsWithChildren<
    Omit<React.HTMLProps<HTMLButtonElement>, "type" | "size" | "htmlType">
  > {
  size?: "small" | "medium" | "large";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit?: React.MouseEventHandler<HTMLButtonElement>;
  extraClass?: string;
  htmlType?: "button" | "submit" | "reset";
  background?: "white" | "grey" | "darkBlue" | "transparent" | 'orange'
  contentColor?: "white" | "grey" | "darkBlue" | "black";
  content: string;
  spanContent?: string;
  border?: "none";
  Icon?: any;
  IconWidth?: number;
  IconHeight?: number;
  iconUrl?: string;
  weight?: "regular" | "medium" | "semiBold";
  iconExtraClass?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  onClick,
  onSubmit,
  extraClass,
  htmlType,
  content,
  spanContent,
  border,
  weight,
  Icon,
  IconWidth,
  IconHeight,
  iconUrl,
  background = "darkBlue",
  contentColor = "white",
  iconExtraClass,
  ...rest
}) => {
  const className = clsx(
    styles.button,
    {
      [styles?.[`button_size_${size}`]]: size,
      [styles?.[`button_weight_${weight}`]]: weight,
      [styles?.[`button_background_${background}`]]: background,
      [styles?.[`button_contentColor_${contentColor}`]]: contentColor,
      [styles?.[`button_border_${border}`]]: border,
    },
    extraClass
  );
  return (
    <button className={className} type={htmlType} onClick={onClick} onSubmit={onSubmit} {...rest}>
      {iconUrl || Icon ? (
        <>
          {iconUrl && (
            iconUrl == `${baseUrl}/upload/icon/menu/white/heart.svg`
            ?
            <img src={`${baseUrl}/upload/icon/categori/hearts.svg`} className={`${styles.icon} ${iconExtraClass}`} />
            :
            <img src={iconUrl} className={`${styles.icon} ${iconExtraClass}`} />
          )}
          {Icon && <Icon width={IconWidth} height={IconHeight} />}
          <p className={styles.content}>{content}</p>
          {spanContent && (
            <span className={styles.spanContent}>{spanContent}</span>
          )}
        </>
      ) : (
        <p className={styles.content}>{content}</p>
      )}
    </button>
  );
};

export default Button;

/* 
пример использования

import Button from "./ui/button/button";
import { ReactComponent as LocationClip } from "../../images/logos/icons/locationClip.svg";
import { ButtonFontWeight, ButtonHtmlType, ButtonStatus } from "../../types/button-states";

<Button
  content="Tour"
  htmlType={ButtonHtmlType.Submit}
  status={ButtonStatus.Active}
  border={false}
  Icon={LocationClip}
  weight={ButtonFontWeight.SemiBold}
></Button>; 
*/
