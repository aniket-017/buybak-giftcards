import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const faqItems = [
  {
    question: "How does BuyBak work?",
    answer:
      "BuyBak allows you to purchase discounted gift cards for major construction and home improvement retailers. With qualifying purchases, you also earn fractional shares of stock as a loyalty reward, helping your business save money today while building assets for tomorrow.",
  },
  {
    question: "How do I receive my gift cards?",
    answer:
      "Digital gift cards are delivered via email immediately after purchase. You can use them online or present them in-store at participating retailers. Your fractional stock rewards are automatically added to your BuyBak portfolio.",
  },
  {
    question: "Are the gift cards guaranteed?",
    answer: "Lorem ipsum dolor sit amet consecteur",
  },
  {
    question: "How do I receive my stocks?",
    answer: "Lorem ipsum dolor sit amet consecteur",
  },
  {
    question: "Is my money safe?",
    answer: "Lorem ipsum dolor sit amet consecteur",
  },
];

export const FrequentlyAskedQuestionsSection = (): JSX.Element => {
  const [expanded, setExpanded] = useState<string | false>("panel-0");

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Stack component="section" spacing={2.5} width="100%">
      {faqItems.map((item, index) => {
        const panelId = `panel-${index}`;
        const isExpanded = expanded === panelId;

        return (
          <Accordion
            key={item.question}
            expanded={isExpanded}
            onChange={handleChange(panelId)}
            disableGutters
            square={false}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "text.primary",
                    fontSize: 24,
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease-in-out",
                  }}
                />
              }
              aria-controls={`${panelId}-content`}
              id={`${panelId}-header`}
              sx={{
                alignItems: "center",
                "& .MuiAccordionSummary-content": {
                  margin: 0,
                  minWidth: 0,
                },
                "& .MuiAccordionSummary-expandIconWrapper": {
                  transform: "none",
                },
              }}
            >
              <Typography
                component="h3"
                sx={{
                  fontFamily: '"Source Serif 4", "Times New Roman", serif',
                  fontSize: "30px",
                  fontWeight: 500,
                  lineHeight: "normal",
                  letterSpacing: 0,
                  color: "text.primary",
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                component="p"
                sx={{
                  fontFamily: '"Source Serif 4", "Times New Roman", serif',
                  fontSize: "23px",
                  fontWeight: 200,
                  lineHeight: "normal",
                  letterSpacing: 0,
                  color: "text.primary",
                }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Stack>
  );
};
