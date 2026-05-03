import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, Box, Stack, TextField, Typography } from "@mui/material";
import { FooterInfoSection } from "./sections/FooterInfoSection";
import { GiftCardCatalogSection } from "./sections/GiftCardCatalogSection";
import { GiftCardFilterSection } from "./sections/GiftCardFilterSection";
import { HeroTitleSection } from "./sections/HeroTitleSection";
import { TopNavigationSection } from "./sections/TopNavigationSection";

const comingSoonImages = ["/img/image-3.png"];

export const GiftcardsTablet = (): JSX.Element => {
  return (
    <Box
      component="main"
      data-model-id="461:36156"
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "common.white",
        overflow: "hidden",
      }}
    >
      <TopNavigationSection />
      <Box
        component="section"
        sx={{
          width: "100%",
          borderTop: 1,
          borderColor: "divider",
          background:
            "linear-gradient(117deg,rgba(240,247,244,1) 0%,rgba(242,248,246,1) 8%,rgba(245,250,248,1) 17%,rgba(247,251,249,1) 25%,rgba(250,252,251,1) 33%,rgba(252,254,253,1) 42%,rgba(255,255,255,1) 50%,rgba(252,253,254,1) 60%,rgba(249,252,253,1) 70%,rgba(246,250,251,1) 80%,rgba(243,249,250,1) 90%,rgba(240,247,249,1) 100%)",
        }}
      >
        <Stack spacing={10} px={10} py={10}>
          <HeroTitleSection />
          <Autocomplete
            freeSolo
            options={[]}
            disableClearable
            sx={{
              width: "100%",
              zIndex: 3,
              "& .MuiOutlinedInput-root": {
                bgcolor: "grey.50",
                pr: 2.5,
              },
              "& .MuiInputBase-input": {
                textAlign: "left",
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search"
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <SearchIcon
                      sx={{ color: "text.secondary", fontSize: 24, mr: 1 }}
                    />
                  ),
                }}
              />
            )}
          />
          <GiftCardFilterSection />
          <GiftCardCatalogSection />
          <Stack
            direction="row"
            spacing={10}
            alignItems="center"
            justifyContent="center"
            sx={{ width: "100%", flexWrap: "wrap" }}
          >
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Figtree", Helvetica, Arial, sans-serif',
                fontWeight: 700,
                fontSize: 24,
                lineHeight: "normal",
                letterSpacing: 0,
                color: "secondary.main",
              }}
            >
              COMING SOON:
            </Typography>
            {comingSoonImages.map((src) => (
              <Box
                key={src}
                component="img"
                src={src}
                alt="Coming soon"
                sx={{
                  width: 220,
                  height: 40,
                  display: "block",
                  objectFit: "contain",
                }}
              />
            ))}
          </Stack>
        </Stack>
      </Box>
      <FooterInfoSection />
    </Box>
  );
};
