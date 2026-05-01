import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { BrandTaglineSection } from "./sections/BrandTaglineSection";
import { ClosingCallToActionSection } from "./sections/ClosingCallToActionSection";
import { ContentHeadingSection } from "./sections/ContentHeadingSection";
import { FrequentlyAskedQuestionsSection } from "./sections/FrequentlyAskedQuestionsSection";
import { GiftCardOfferingSection } from "./sections/GiftCardOfferingSection";
import { GiftCardRewardsComparisonSection } from "./sections/GiftCardRewardsComparisonSection";
import { HeadlineSection } from "./sections/HeadlineSection";
import { HeroFeatureSection } from "./sections/HeroFeatureSection";
import { IntroCopySection } from "./sections/IntroCopySection";
import { LegalNoticeSection } from "./sections/LegalNoticeSection";
import { PrimaryNavigationSection } from "./sections/PrimaryNavigationSection";

const legalLinks = ["Terms of Service", "Privacy Policy", "Legal & Compliance"];

const sitemapLinks = ["Home", "About", "Login"];

export const HomepageWeb = (): JSX.Element => {
  const theme = useTheme();
  const buybak = theme.palette.buybak;

  return (
    <Box
      component="main"
      data-model-id="13:700"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      <PrimaryNavigationSection />
      <HeroFeatureSection />
      <Stack
        component="section"
        spacing={10}
        sx={{
          width: "100%",
          px: {
            xs: 3,
            sm: 6,
            md: 10,
            lg: "var(--responsive-sectionpadding)",
          },
          py: {
            xs: 6,
            sm: 8,
            md: 10,
            lg: "var(--responsive-sectionpadding)",
          },
          alignItems: "center",
          justifyContent: "center",
          bgcolor: buybak.white,
          position: "relative",
          zIndex: 4,
        }}
      >
        <ContentHeadingSection />
        <GiftCardOfferingSection />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{
            xs: 2,
            md: "var(--responsive-gapsecondary)",
          }}
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <Typography
            sx={{
              fontFamily: '"Source Serif 4", "Times New Roman", serif',
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "normal",
              letterSpacing: 0,
              color: buybak.blueDeep,
            }}
          >
            COMING SOON:
          </Typography>
          <Box
            component="img"
            src="/img/albertsons.png"
            alt="Albertsons"
            sx={{
              width: 220,
              height: 40,
              objectFit: "contain",
              aspectRatio: "5.5 / 1",
            }}
          />
        </Stack>
      </Stack>
      <Stack
        component="section"
        direction={{ xs: "column", xl: "row" }}
        spacing={{ xs: 6, xl: 8 }}
        sx={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: { xs: "stretch", xl: "center" },
          px: {
            xs: 3,
            sm: 6,
            md: 10,
            lg: "var(--responsive-sectionpadding)",
          },
          py: {
            xs: 6,
            sm: 8,
            md: 10,
            lg: "var(--responsive-sectionpadding)",
          },
          bgcolor: buybak.neutralAlt,
          position: "relative",
          zIndex: 3,
        }}
      >
        <IntroCopySection />
        <GiftCardRewardsComparisonSection />
      </Stack>
      <Stack
        component="section"
        spacing={10}
        sx={{
          width: "100%",
          px: {
            xs: 3,
            sm: 6,
            md: 10,
            lg: "var(--responsive-sectionpadding)",
          },
          py: {
            xs: 6,
            sm: 8,
            md: 10,
            lg: "var(--responsive-sectionpadding)",
          },
          alignItems: "center",
          justifyContent: "center",
          bgcolor: buybak.white,
          position: "relative",
          zIndex: 2,
        }}
      >
        <HeadlineSection />
        <FrequentlyAskedQuestionsSection />
      </Stack>
      <ClosingCallToActionSection />
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
    </Box>
  );
};
