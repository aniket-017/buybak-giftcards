import { Box, Button, Stack, Typography, useTheme } from "@mui/material";

const actions = [
  { label: "Browse Gift Cards", variant: "contained" as const },
  { label: "Learn More", variant: "outlined" as const },
];

export const HeroFeatureSection = (): JSX.Element => {
  const theme = useTheme();
  const buybakColors = theme.palette.buybak;

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        zIndex: 5,
        borderTop: `1px solid ${theme.palette.divider}`,
        background:
          "linear-gradient(117deg, rgba(240,247,244,1) 0%, rgba(242,248,246,1) 8%, rgba(245,250,248,1) 17%, rgba(247,251,249,1) 25%, rgba(250,252,251,1) 33%, rgba(252,254,253,1) 42%, rgba(255,255,255,1) 50%, rgba(252,253,254,1) 60%, rgba(249,252,253,1) 70%, rgba(246,250,251,1) 80%, rgba(243,249,250,1) 90%, rgba(240,247,249,1) 100%)",
        pt: { xs: 18, md: "200px" },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 18, md: 65 }}
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          spacing={5}
          sx={{
            flex: "0 0 auto",
            alignItems: { xs: "center", md: "flex-start" },
            pb: { xs: 10, md: "200px" },
            maxWidth: { md: 900 },
          }}
        >
          <Typography
            component="h1"
            sx={{
              mt: "-1px",
              fontFamily: '"Source Serif 4", "Times New Roman", serif',
              fontSize: "48px",
              fontWeight: 500,
              lineHeight: "normal",
              letterSpacing: 0,
              color: "transparent",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box component="span" sx={{ color: buybakColors.blueDark }}>
              Spend on supplies. Earn stock rewards.<br />
              See your{" "}
            </Box>
            <Box component="span" sx={{ color: buybakColors.greenAccent }}>
              Buy
            </Box>
            <Box component="span" sx={{ color: buybakColors.blueDeep }}>
              Bak
            </Box>
            <Box component="span" sx={{ color: buybakColors.blueDark }}>
              {" "}
              portfolio grow.
            </Box>
          </Typography>
          <Stack
            direction="row"
            spacing={{ xs: 1.5, md: 2.5 }}
            flexWrap="wrap"
            useFlexGap
          >
            {actions.map((action) => (
              <Button
                key={action.label}
                variant={action.variant}
                color={action.variant === "contained" ? "primary" : "secondary"}
              >
                {action.label}
              </Button>
            ))}
          </Stack>
        </Stack>
        <Box
          component="img"
          src="/img/mobile-app-image.png"
          alt="BuyBak mobile app portfolio screen"
          sx={{
            width: "100%",
            maxWidth: 412,
            height: "auto",
            display: "block",
            filter: "drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.15))",
            alignSelf: { xs: "right", md: "flex-end" },
          }}
        />
      </Stack>
    </Box>
  );
};
