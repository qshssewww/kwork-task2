"use client";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

interface Props {
  value: number;
}

export default function LinearProgressBar({ value }: Props) {
  const percentageValue = (value * 100) / 5;
  return (
    <Box
      sx={{
        width: "100px",
        "& .MuiLinearProgress-root": {
          background: "#d3d3d3",
          height: "6.5px",
          borderRadius: "4px",
        },
        "& .MuiLinearProgress-barColorPrimary": {
          background: "#F2994A",
        },
      }}
    >
      <LinearProgress variant="determinate" value={percentageValue} />
    </Box>
  );
}
