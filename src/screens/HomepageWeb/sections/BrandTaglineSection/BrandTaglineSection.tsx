import { Box, Stack, Typography, useTheme } from "@mui/material";

import buybakLogo from "../../../../assets/images/buybak_logo.png";

export const BrandTaglineSection = (): JSX.Element => {
  const theme = useTheme();

  const brandParts = [
    { text: "Buy", fontWeight: 600 },
    { text: "Bak", fontWeight: 700 },
  ] as const;

  return (
    <Box component="section" sx={{ width: "100%", maxWidth: 650 }}>
      <Stack spacing={1.5} alignItems="flex-start">
        <Stack direction="row" spacing={1.5} alignItems="center" minHeight={44}>
          <Box
            component="img"
            src={buybakLogo}
            alt="BuyBak logo"
            sx={{
              width: 57,
              height: 40,
              aspectRatio: "57 / 40",
              opacity: 0.9,
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: 0,
              flexShrink: 0,
            }}
          />
          <Typography
            component="h2"
            sx={{
              fontFamily: '"Figtree","Helvetica","Arial",sans-serif',
              fontSize: "24px",
              fontWeight: 400,
              color: theme.palette.buybak.greenLight,
              letterSpacing: "-0.6px",
              lineHeight: "32px",
              whiteSpace: "nowrap",
            }}
          >
            {brandParts.map((part) => (
              <Box
                key={part.text}
                component="span"
                sx={{ fontWeight: part.fontWeight, letterSpacing: "-0.14px" }}
              >
                {part.text}
              </Box>
            ))}
          </Typography>
        </Stack>
        <Typography
          component="p"
          sx={{
            maxWidth: 343,
            fontFamily: '"Source Serif 4", "Times New Roman", serif',
            fontSize: "16px",
            fontWeight: 500,
            color: theme.palette.buybak.greenMuted,
            letterSpacing: 0,
            lineHeight: "26px",
          }}
        >
          Make Money as You Spend Money
        </Typography>
      </Stack>
    </Box>
  );
};
