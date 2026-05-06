import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

const GIFT_CARDS_URL = "https://buybak.giftygen.com/";

const actions = [
  {
    label: "Browse Gift Cards",
    variant: "contained" as const,
    color: "primary" as const,
    href: GIFT_CARDS_URL,
  },
  {
    label: "Learn More",
    variant: "outlined" as const,
    color: "secondary" as const,
    to: "/contactpopup",
  },
];

export const ClosingCallToActionSection = (): JSX.Element => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        alignSelf: "stretch",
        bgcolor: "buybak.neutralAlt",
        px: "var(--responsive-sectionpadding)",
        py: "var(--responsive-sectionpadding)",
      }}
    >
      <Stack spacing={5} alignItems="center" justifyContent="center">
        <Typography
          component="h2"
          variant="h2"
          sx={{
            mt: "-1px",
            textAlign: "center",
            color: "buybak.blueDark",
            fontFamily: '"Source Serif 4", "Times New Roman", serif',
            fontWeight: 500,
            fontSize: '40px',
          }}
        >
          Make your money work for you.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing="var(--responsive-gaptertiary)"
          alignItems="center"
          justifyContent="center"
        >
          {actions.map((action) =>
            action.href ? (
              <a
                key={action.label}
                className="inline-flex flex-[0_0_auto] items-center justify-center rounded-[100px] bg-greens-2d-6a-4f px-8 py-2"
                href={action.href}
              >
                <Button
                  variant={action.variant}
                  color={action.color}
                  sx={{
                    minWidth: "auto",
                    px: 8,
                    py: 2,
                  }}
                >
                  {action.label}
                </Button>
              </a>
            ) : (
              <Link
                key={action.label}
                aria-current="page"
                className="inline-flex flex-[0_0_auto] items-center justify-center rounded-[100px] bg-greens-2d-6a-4f px-8 py-2"
                to={action.to}
              >
                <Button
                  variant={action.variant}
                  color={action.color}
                  sx={{
                    minWidth: "auto",
                    px: 8,
                    py: 2,
                  }}
                >
                  {action.label}
                </Button>
              </Link>
            ),
          )}
        </Stack>
      </Stack>
    </Box>
  );
};
