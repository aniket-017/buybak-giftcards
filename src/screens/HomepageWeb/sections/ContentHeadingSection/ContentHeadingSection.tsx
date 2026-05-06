import { Box, Link, Stack, Typography } from "@mui/material";
import { ArrowOutwardIcon } from "@mui/icons-material/ArrowOutward";

const headingContent = {
  title: "Gift Cards with Loyalty Stock",
  description: " ",
  actionLabel: "View All",
};

export const ContentHeadingSection = (): JSX.Element => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 15, md: 65 }}
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          component="header"
          spacing="var(--responsive-gaptertiary)"
          sx={{
            flex: "1 1 auto",
            minWidth: 0,
          }}
        >
          <Typography
            component="h2"
            sx={{
              mt: "-1px",
              color: "text.primary",
              fontFamily: '"Source Serif 4", "Times New Roman", serif',
              fontSize: "40px",
              fontWeight: 500,
              lineHeight: "normal",
              letterSpacing: "0px",
            }}

          >
            {headingContent.title}
          </Typography>
          <Typography
            component="p"
            sx={{
              color: (theme) => theme.palette.buybak.neutralMuted,
              fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "normal",
              letterSpacing: "0px",
            }}
          >
            {headingContent.description}
          </Typography>
        </Stack>
        <Link
          href="#"
          underline="none"
          aria-label={headingContent.actionLabel}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            borderRadius: "100px",
            color: (theme) => theme.palette.buybak.greenPrimary,
            flexShrink: 0,
          }}
        >
          <Typography
            component="span"
            sx={{
              color: "inherit",
              fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "normal",
              letterSpacing: "0px",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            {headingContent.actionLabel}
          </Typography>
        </Link>
      </Stack>
    </Box>
  );
};
