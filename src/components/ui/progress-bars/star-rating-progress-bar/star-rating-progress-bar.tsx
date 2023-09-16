"use client";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

interface Props {
  value: number;
  size?: string;
  starsAmount: number;
  onChange?: any;
  isReadonly?: boolean;
}

function StarRatingProgressBar({
  value,
  size = "24px",
  starsAmount = 5,
  onChange,
  isReadonly = true,
}: Props) {
  const customStyle = {
    "& .MuiRating-icon": {
      color: "#ddd",
      width: size,
      height: size,
      fontSize: size,
    },
    "& .MuiRating-iconFilled": {
      color: "#F2994A",
      width: size,
      height: size,
      fontSize: size,
    },
    "& .MuiRating-iconDecimal": {
      color: "#ddd",
      width: size,
      height: size,
      fontSize: size,
    },
    "& .MuiRating-iconEmpty": {
      color: "#ddd",
      width: size,
      height: size,
      fontSize: size,
    },
  };

  return (
    <Rating
      sx={customStyle}
      precision={0.5}
      readOnly={isReadonly}
      emptyIcon={<StarIcon style={{ width: size, height: size }} />}
      max={starsAmount}
      value={value}
      onChange={onChange}
    />
  );
}

export default StarRatingProgressBar;
