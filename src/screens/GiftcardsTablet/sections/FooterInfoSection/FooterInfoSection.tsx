import { Box, Button, Divider, Link, Stack, Typography, useTheme } from "@mui/material";

import { BrandTaglineSection } from "../BrandTaglineSection";
import { LegalNoticeSection } from "../LegalNoticeSection";

const legalLinks = ["Terms of Service", "Privacy Policy", "Legal & Compliance"];
const sitemapLinks = ["Home", "About", "Login"];

export const FooterInfoSection = (): JSX.Element => {

    const theme = useTheme();
    const buybak = theme.palette.buybak;

    console.log({theme});

  return (
      <Box
        component="footer"
        sx={{
          width: "100%",
          bgcolor: buybak.greenFooter,
          px: { xs: 3, sm: 5, md: 6, lg: 10 },
          py: { xs: 5, md: 6, lg: 10 },
        }}
      >
        <Stack spacing={8} sx={{ width: "100%" }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 4, md: 6, lg: 8 }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "flex-start" }}
            sx={{ width: "100%" }}
          >
            <BrandTaglineSection />
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 4, sm: 8 }}
            >
              <Stack spacing={2.25}>
                <Typography
                  sx={{
                    ...theme.typography.body1,
                    color: buybak.blueSoft,
                    whiteSpace: "nowrap",
                  }}
                >
                  Legal
                </Typography>
                {legalLinks.map((label) => (
                  <Typography
                    key={label}
                    href="#"
                    underline="none"
                    color="inherit"
                    sx={{
                      ...theme.typography.body1,
                      color: buybak.greenMuted,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                  </Typography>
                ))}
              </Stack>
              <Stack />
              <Stack />
              <Stack />
              <Stack />
              <Stack />
              <Stack spacing={2.25}>
                <Typography
                  sx={{
                    ...theme.typography.body1,
                    color: buybak.blueSoft,
                    whiteSpace: "nowrap",
                  }}
                >
                  Sitemap
                </Typography>
                {sitemapLinks.map((label) => (
                  <Typography
                    key={label}
                    href="#"
                    underline="none"
                    color="inherit"
                    sx={{
                      ...theme.typography.body1,
                      color: buybak.greenMuted,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                  </Typography>
                ))}
              </Stack>
            </Stack>
            <Link
                key="contactus"
                className="inline-flex flex-[0_0_auto] items-center justify-center rounded-[100px] bg-greens-2d-6a-4f px-8 py-2"
                to="/contactpopup"
            >
            <Button
              variant="contained"
              color="secondary"
              sx={{
                px: 5,
                py: 1,
                minWidth: "auto",
                borderRadius: "16777200px",
                bgcolor: buybak.greenAccent,
                color: buybak.white,
                "&:hover": {
                  bgcolor: buybak.greenAccent,
                  boxShadow: "none",
                },
              }}
            >
              Contact Us
            </Button>
            </Link>
          </Stack>
          <Divider
            sx={{
              width: "100%",
              borderColor: buybak.greenPrimary,
            }}
          />
          <LegalNoticeSection />
        </Stack>
      </Box>
  );
};
