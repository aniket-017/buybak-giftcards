import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Stack, Tab, Tabs, useTheme } from "@mui/material";
import { FooterSubsection } from "../GiftcardsWeb/sections/FooterSubsection";
import { GiftCardGridSubsection } from "../GiftcardsWeb/sections/GiftCardGridSubsection";
import { HeaderSubsection } from "../GiftcardsWeb/sections/HeaderSubsection";
import { PageTitleWrapperSubsection } from "../GiftcardsWeb/sections/PageTitleWrapperSubsection";
import { SortandFilterSubsection } from "../GiftcardsWeb/sections/SortandFilterSubsection";
import { CtaContinueSubsection } from "./sections/CtaContinueSubsection";
import { DeliveryFormSubsection } from "./sections/DeliveryFormSubsection";
import { GiftCardInfoSubsection } from "./sections/GiftCardInfoSubsection";
import { PageTitleSubsection } from "./sections/PageTitleSubsection";
import { PaymentFormSubsection } from "./sections/PaymentFormSubsection";
import { QuantitySelectorSubsection } from "./sections/QuantitySelectorSubsection";

const checkoutTabs = [
  { label: "PAYMENT DETAILS", value: 0 },
  { label: "REVIEW AND CONFIRM", value: 1 },
];

export const CheckoutPopUpWrapper = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      component="main"
      data-model-id="61:8892"
      sx={{
        width: "100%",
        minWidth: { xs: "100%", md: 671 },
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 8,
        background: theme.custom.gradients.surface,
        boxShadow: theme.custom.shadows.card,
        overflow: "hidden",
      }}
    >
      <Stack spacing={0}>
        <HeaderSubsection />
        <Box sx={{ px: { xs: 3, sm: 5, md: 9 }, pt: { xs: 4, sm: 6, md: 8 } }}>
          <Stack
            direction="row"
            alignItems="flex-start"
            justifyContent="space-between"
            spacing={2}
          >
            <PageTitleWrapperSubsection>
              <PageTitleSubsection />
            </PageTitleWrapperSubsection>
            <IconButton
              aria-label="Close checkout"
              size="large"
              sx={{
                color: theme.palette.brandBlue.main,
                mt: 0.5,
              }}
            >
              <CloseIcon sx={{ fontSize: 38 }} />
            </IconButton>
          </Stack>
        </Box>
        <Box sx={{ px: { xs: 3, sm: 5, md: 9 }, pt: 4 }}>
          <Tabs
            value={0}
            aria-label="Checkout steps"
            TabIndicatorProps={{ style: { display: "none" } }}
            sx={{
              minHeight: "unset",
              "& .MuiTabs-flexContainer": {
                gap: { xs: 3, sm: 5 },
              },
            }}
          >
            {checkoutTabs.map((tab) => (
              <Tab
                key={tab.value}
                disableRipple
                label={tab.label}
                sx={{
                  minHeight: "unset",
                  minWidth: "unset",
                  p: 0,
                  alignItems: "flex-start",
                  color:
                    tab.value === 0
                      ? theme.palette.brandBlue.dark
                      : theme.palette.neutral.main,
                  fontFamily: theme.typography.subtitle1.fontFamily,
                  fontSize: theme.typography.subtitle1.fontSize,
                  fontWeight: 700,
                  lineHeight: theme.typography.subtitle1.lineHeight,
                  letterSpacing: theme.typography.subtitle1.letterSpacing,
                  textTransform: "uppercase",
                  opacity: 1,
                }}
              />
            ))}
          </Tabs>
        </Box>
        <Stack
          spacing={{ xs: 5, sm: 6, md: 8 }}
          sx={{
            px: { xs: 3, sm: 5, md: 9 },
            pt: { xs: 5, sm: 7, md: 8 },
            pb: { xs: 5, sm: 6, md: 8 },
          }}
        >
          <GiftCardGridSubsection />
          <GiftCardInfoSubsection />
          <SortandFilterSubsection />
          <QuantitySelectorSubsection />
          <DeliveryFormSubsection />
          <PaymentFormSubsection />
          <CtaContinueSubsection />
        </Stack>
        <FooterSubsection />
      </Stack>
    </Box>
  );
};
