import SearchIcon from "@mui/icons-material/Search";
import {
  Autocomplete,
  Box,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CtaContinueSubsection } from "../CheckoutPopUpWrapper/sections/CtaContinueSubsection";
import { DeliveryFormSubsection } from "../CheckoutPopUpWrapper/sections/DeliveryFormSubsection";
import { GiftCardInfoSubsection } from "../CheckoutPopUpWrapper/sections/GiftCardInfoSubsection";
import { PageTitleSubsection } from "../CheckoutPopUpWrapper/sections/PageTitleSubsection";
import { PaymentFormSubsection } from "../CheckoutPopUpWrapper/sections/PaymentFormSubsection";
import { QuantitySelectorSubsection } from "../CheckoutPopUpWrapper/sections/QuantitySelectorSubsection";
import { FooterSubsection } from "./sections/FooterSubsection";
import { GiftCardGridSubsection } from "./sections/GiftCardGridSubsection";
import { HeaderSubsection } from "./sections/HeaderSubsection";
import { PageTitleWrapperSubsection } from "./sections/PageTitleWrapperSubsection";
import { SortandFilterSubsection } from "./sections/SortandFilterSubsection";

const searchOptions: string[] = [];

export const GiftcardsWeb = (): JSX.Element => {
  return (
    <Box
      component="main"
      data-model-id="27:2905"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "background.default",
        overflow: "hidden",
      }}
    >
      <HeaderSubsection />
      <Box
        component="section"
        sx={{
          borderTop: 1,
          borderColor: "divider",
          background: (theme) => theme.custom.gradients.surface,
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 3, sm: 5, md: 10 } }}>
          <Stack spacing={{ xs: 5, md: 10 }}>
            <PageTitleWrapperSubsection />
            <PageTitleSubsection />
            <GiftCardInfoSubsection />
            <Autocomplete
              freeSolo
              options={searchOptions}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "100px",
                  bgcolor: "background.paper",
                  px: 1,
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search"
                  aria-label="Search gift cards"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
                    ),
                  }}
                />
              )}
            />
            <SortandFilterSubsection />
            <GiftCardGridSubsection />
            <QuantitySelectorSubsection />
            <DeliveryFormSubsection />
            <PaymentFormSubsection />
            <CtaContinueSubsection />
            <Stack
              component="section"
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2, md: 5 }}
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                component="h2"
                sx={{
                  fontFamily: '"Figtree", Helvetica, Arial, sans-serif',
                  fontWeight: 700,
                  fontSize: 24,
                  lineHeight: "normal",
                  color: "secondary.dark",
                }}
              >
                COMING SOON:
              </Typography>
              <Box
                component="img"
                src="/img/image-3.png"
                alt="Coming soon brand"
                sx={{
                  width: 220,
                  height: 40,
                  objectFit: "contain",
                  maxWidth: "100%",
                }}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>
      <FooterSubsection />
    </Box>
  );
};
