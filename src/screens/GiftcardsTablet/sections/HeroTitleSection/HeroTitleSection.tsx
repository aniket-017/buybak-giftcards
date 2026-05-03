import { Stack, Typography } from "@mui/material";

const heroContent = {
  title: "Gift Cards with Loyalty Stock",
  subtitle: "Guaranteed cards. Instant delivery. Real stock.",
};

export const HeroTitleSection = (): JSX.Element => {
  return (
    <Stack
      component="section"
      spacing={1.5}
      width="100%"
      alignItems="flex-start"
      position="relative"
      zIndex={4}
    >
      <Typography
        component="h1"
        color="text.primary"
        sx={{
          fontFamily: '"Source Serif 4", Georgia, serif',
          fontSize: "50px",
          fontWeight: 500,
          lineHeight: "normal",
          letterSpacing: 0,
        }}
      >
        {heroContent.title}
      </Typography>
      <Typography
        component="p"
        color="text.secondary"
        sx={{
          fontFamily: '"Source Serif 4", Georgia, serif',
          fontSize: "24px",
          fontWeight: 400,
          lineHeight: "normal",
          letterSpacing: 0,
        }}
      >
        {heroContent.subtitle}
      </Typography>
    </Stack>
  );
};
