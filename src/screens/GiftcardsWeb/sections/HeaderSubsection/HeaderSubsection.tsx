import { Box, Button, Link as MuiLink, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const navItems = [
  { label: "Benefits" },
  { label: "Gift Cards", to: "/giftcardsu47web" },
];

const actionItems = [
  {
    label: "Contact Us",
    to: "/contactpopup",
    variant: "outlined" as const,
  },
  {
    label: "Pre-register",
    to: "/preregisterpopup",
    variant: "contained" as const,
  },
];

export const HeaderSubsection = (): JSX.Element => {
  return (
    <Box
      component="header"
      sx={(theme) => ({
        width: "100%",
        bgcolor: theme.palette.common.white,
        borderBottom: `1px solid ${theme.palette.divider}`,
        position: "relative",
        zIndex: 2,
        px: 10,
        py: 3,
      })}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Stack direction="row" spacing={3} alignItems="center" minHeight={44}>
          <Box
            aria-label="BuyBak logo"
            component="img"
            src="https://buybak.com/wp-content/uploads/2023/09/BuyBak-logo.png"
            alt="BuyBak"
            sx={{
              width: 63.22,
              height: 44,
              objectFit: "contain",
              display: "block",
            }}
          />
          <Typography
            component="p"
            sx={{
              fontFamily: '"Figtree", Helvetica, Arial, sans-serif',
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "32px",
              letterSpacing: "-0.6px",
              whiteSpace: "nowrap",
            }}
          >
            <Box
              component="span"
              sx={{
                color: "#52A788",
                fontWeight: 600,
                letterSpacing: "-0.14px",
              }}
            >
              Buy
            </Box>
            <Box
              component="span"
              sx={{
                color: "#2E6099",
                fontWeight: 700,
                letterSpacing: "-0.14px",
              }}
            >
              Bak
            </Box>
          </Typography>
        </Stack>
        <Stack direction="row" spacing={8} alignItems="center" minHeight={44}>
          {navItems.map((item) =>
            item.to ? (
              <MuiLink
                key={item.label}
                component={RouterLink}
                to={item.to}
                color="text.secondary"
                underline="none"
                sx={(theme) => ({
                  ...theme.typography.body1,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                })}
              >
                {item.label}
              </MuiLink>
            ) : (
              <Typography
                key={item.label}
                component="span"
                color="text.secondary"
                sx={(theme) => ({
                  ...theme.typography.body1,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                })}
              >
                {item.label}
              </Typography>
            ),
          )}

          {actionItems.map((item) => (
            <Button
              key={item.label}
              component={RouterLink}
              to={item.to}
              variant={item.variant}
              disableElevation
              sx={(theme) => ({
                minWidth: "auto",
                px: 8,
                py: 2,
                borderRadius: "100px",
                whiteSpace: "nowrap",
                ...(item.variant === "outlined"
                  ? {
                      bgcolor: theme.palette.background.paper,
                      color: theme.palette.primary.main,
                      borderColor: theme.palette.success.main,
                      "&:hover": {
                        bgcolor: theme.palette.background.paper,
                        borderColor: theme.palette.success.main,
                      },
                    }
                  : {
                      bgcolor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                      "&:hover": {
                        bgcolor: theme.palette.primary.main,
                      },
                    }),
              })}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};
