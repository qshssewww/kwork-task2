"use client";

import {
  AccordionDetails,
  AccordionSummary,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MIUAccordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { BorderBottom } from "@mui/icons-material";

interface Props {
  summary: string;
  details: string;
}

function Accordion({ summary, details }: Props) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const isXs = useMediaQuery("(max-width:800px)");

  const theme = createTheme({
    typography: {
      subtitle1: {
        fontWeight: 500,
        fontSize: !isXs ? "25px" : "16px",
        lineHeight: !isXs ? "30px" : "20px",
        color: "#222",
      },
      subtitle2: {
        fontSize: !isXs ? "16px" : "14px",
        lineHeight: "150%",
        fontWeight: "400",
        color: "#222",
      },
      fontFamily: [
        "Montserrat",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      fontSize: 20,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <MIUAccordion
        disableGutters
        elevation={0}
        onChange={handleChange("panel1")}
        sx={{
          marginTop: "12px",

          ":before": {
            display: "none",
            webkitBoxShadow: "none",
            mozBoxShadow: "none",
            boxShadow: "none !important",
            borderRadius: "5px",
            minHeight: "none",
            height: "none",
            maxHeight: "none",
          },

          "&:first-of-type": {
            marginTop: "0",
          },

          "& .MuiButtonBase-root .MuiAccordionSummary-root .Mui-expanded": {
            minHeight: "none",
            height: "none",
            maxHeight: "none",
            border: "1px solid red",
          },

          "& .MuiButtonBase-root": {
            border: "1px solid #ddd",
            padding: "11px 14px",
            background: "#f4f4f4",
            borderRadius: "5px",
            minHeight: "0",
          },

          "& .Mui-expanded": {
            marginBottom: 0,
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
            background: "white",
            borderBottom: "none",
          },
        }}
      >
        <AccordionSummary
          sx={{
            "& .MuiAccordionSummary-content": {
              margin: 0,
              borderRadius: "5px",
            },

            "& .MuiAccordionSummary-content.Mui-expanded": {
              margin: 0,
              minHeight: "none !important",
            },
          }}
          expandIcon={<ExpandMoreIcon style={{ color: "#222" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle1">{summary}</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            "&.MuiCollapse-root": {
              borderWidth: 1,
              borderColor: "red",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              border: "solid",
            },
            "&.MuiAccordionDetails-root": {
              margin: 0,
              paddingBottom: "13px",
              paddingTop: 0,
              paddingLeft: "21px",
              paddingRight: "25px",
              // background: "#f4f4f4",
              background: "#fff",

              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              border: "1px solid #ddd",
              borderTop: "none",
            },
          }}
        >
          <Typography variant="subtitle2">{details}</Typography>
        </AccordionDetails>
      </MIUAccordion>
    </ThemeProvider>
  );
}

export default Accordion;
