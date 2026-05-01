import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const checkoutSteps = [
  { label: "PAYMENT DETAILS", active: false },
  { label: "REVIEW AND CONFIRM", active: true },
];

const contactDetails = ["Digital Delivery: your@email.com", "(000) 000-0000"];

const orderSummaryRows = [
  { label: "Subtotal", value: "$1000", emphasized: true },
  { label: "Stock Value", value: "$49", emphasized: false },
];

export const CheckoutPopUp = (): JSX.Element => {
  return (
    <Box
      data-model-id="61:9935"
      component="main"
      sx={(theme) => ({
        width: "100%",
        maxWidth: 671,
        minWidth: { xs: "auto", sm: 671 },
        minHeight: 900,
        mx: "auto",
        p: { xs: 4, sm: 5 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 10,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 4,
        background: theme.custom.gradients.surface,
        boxShadow: theme.custom.shadows.card,
      })}
    >
      <Stack component="header" spacing={10}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              component="img"
              src="/img/image-buybak-14.png"
              alt=""
              sx={{
                width: 63.22,
                height: 44,
                opacity: 0.75,
                objectFit: "cover",
                display: "block",
              }}
            />
            <Typography
              component="h1"
              variant="h2"
              sx={(theme) => ({
                color: theme.palette.brandGreen.dark,
              })}
            >
              Checkout
            </Typography>
          </Stack>
          <IconButton
            aria-label="Close checkout"
            sx={(theme) => ({
              width: 40,
              height: 40,
              color: theme.palette.brandBlue.main,
            })}
          >
            <CloseIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={5} alignItems="center">
          {checkoutSteps.map((step) => (
            <Typography
              key={step.label}
              variant="subtitle1"
              component="p"
              sx={(theme) => ({
                color: step.active
                  ? theme.palette.brandBlue.main
                  : theme.palette.neutral.main,
              })}
            >
              {step.label}
            </Typography>
          ))}
        </Stack>
      </Stack>
      <Stack component="section" spacing={5}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Typography
            component="h2"
            variant="h3"
            sx={(theme) => ({
              color: theme.palette.brandBlue.main,
            })}
          >
            John Smith
          </Typography>
          <Typography
            variant="subtitle1"
            component="button"
            type="button"
            sx={(theme) => ({
              color: theme.palette.text.secondary,
              background: "none",
              border: 0,
              p: 0,
              cursor: "pointer",
            })}
          >
            EDIT
          </Typography>
        </Stack>
        {contactDetails.map((detail) => (
          <Typography
            key={detail}
            variant="body1"
            component="p"
            sx={(theme) => ({
              color: theme.palette.brandBlue.main,
            })}
          >
            {detail}
          </Typography>
        ))}
      </Stack>
      <Stack component="section" spacing={5}>
        <Typography
          component="h2"
          variant="h3"
          sx={(theme) => ({
            color: theme.palette.brandBlue.main,
          })}
        >
          $1000 Lowe&apos;s Gift Card (with stock) x1
        </Typography>
        {orderSummaryRows.map((row) => (
          <Stack
            key={row.label}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="body1"
              component="p"
              sx={(theme) => ({
                color: theme.palette.brandBlue.main,
                fontWeight: row.emphasized ? 600 : 400,
              })}
            >
              {row.label}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={(theme) => ({
                color: theme.palette.brandBlue.main,
                fontWeight: row.emphasized ? 600 : 400,
              })}
            >
              {row.value}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Stack component="footer" spacing={10}>
        <Button
          component={RouterLink}
          to="/checkoutpopup3"
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            minHeight: 54,
            borderRadius: "100px",
          }}
        >
          Confirm and Pay $1000
        </Button>
        <Link
          component={RouterLink}
          to="/checkoutpopup"
          underline="none"
          sx={(theme) => ({
            alignSelf: "center",
            ...theme.typography.subtitle1,
            color: theme.palette.primary.main,
          })}
        >
          GO BACK
        </Link>
      </Stack>
    </Box>
  );
};
