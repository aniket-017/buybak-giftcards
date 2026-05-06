import { Box, Link, Stack, Typography, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const GiftCardInfoSubsection = (): JSX.Element => {
  const theme = useTheme();

  const rewardsSummary = {
    label: "You'll earn:",
    value: "$49 in stock rewards",
  };

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 2, md: 2.5 }}
      alignItems="stretch"
      justifyContent="center"
      width="100%"
      component="section"
      aria-label="Gift card information"
    >
      <Link
        component={RouterLink}
        to="/checkoutpopup"
        underline="none"
        color="inherit"
        sx={{
          display: "flex",
          flex: 1,
          minWidth: 0,
          maxWidth: { xs: "100%", md: 470 },
          borderRadius: 6,
        }}
        aria-label="$1000 gift card details"
      >
        <Box
          component="article"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p: 4,
            width: "100%",
            bgcolor: theme.palette.common.white,
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 6,
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)",
            aspectRatio: "1.52 / 1",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              component="img"
              src="/img/image-buybak-14.png"
              alt="BuyBack logo"
              sx={{
                width: 63.22,
                height: 44,
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
            <Typography
              component="p"
              sx={{
                fontFamily: '"Figtree", Helvetica, Arial, sans-serif',
                fontWeight: 600,
                fontSize: 45,
                lineHeight: "normal",
                letterSpacing: 0,
                color: theme.palette.text.primary,
                whiteSpace: "nowrap",
              }}
            >
              $1000
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack spacing={0.5}>
              <Typography
                component="p"
                sx={{
                  ...theme.typography.h4,
                  color: theme.palette.success.main,
                  whiteSpace: "nowrap",
                }}
              >
                4.9%
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontFamily: '"Figtree", Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: "normal",
                  letterSpacing: 0,
                  color: theme.palette.text.secondary,
                  whiteSpace: "nowrap",
                }}
              >
                STOCK REWARDS
              </Typography>
            </Stack>
            <Box
              component="img"
              src="/img/image-1-3.png"
              alt="Lowe's gift card"
              sx={{
                width: 127,
                height: 60,
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          </Stack>
        </Box>
      </Link>
      <Stack
        component="aside"
        spacing={1.5}
        alignItems="center"
        justifyContent="center"
        sx={{
          width: { xs: "100%", md: 200 },
          minWidth: { md: 200 },
          px: 3,
          py: 2,
          alignSelf: "stretch",
          borderRadius: 4,
          border: `1px solid ${theme.palette.neutral.main}`,
          background: theme.custom.gradients.surface,
        }}
        aria-label="Stock rewards summary"
      >
        <Box
          sx={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src="/img/vector-11.svg"
            alt=""
            aria-hidden="true"
            sx={{
              position: "absolute",
              width: "91.67%",
              height: "70.83%",
              top: "29.17%",
              left: "8.33%",
            }}
          />
          <Box
            component="img"
            src="/img/vector-12.svg"
            alt=""
            aria-hidden="true"
            sx={{
              position: "absolute",
              width: "33.33%",
              height: "70.83%",
              top: "29.17%",
              left: "66.67%",
            }}
          />
        </Box>
        <Typography
          component="p"
          align="center"
          sx={{
            ...theme.typography.body1,
            color: theme.palette.text.primary,
          }}
        >
          {rewardsSummary.label}
        </Typography>
        <Typography
          component="p"
          align="center"
          sx={{
            ...theme.typography.h6,
            color: theme.palette.text.primary,
          }}
        >
          {rewardsSummary.value}
        </Typography>
      </Stack>
    </Stack>
  );
};
