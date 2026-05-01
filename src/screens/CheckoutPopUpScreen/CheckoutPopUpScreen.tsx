import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  IconButton,
  Link as MuiLink,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const deliveryEmail = "your@email.com";

export const CheckoutPopUpScreen = (): JSX.Element => {
  return (
    <Paper
      component="section"
      data-model-id="61:10069"
      elevation={0}
      sx={(theme) => ({
        minWidth: { xs: "100%", sm: 671 },
        minHeight: 900,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: { xs: 4, sm: 10 },
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 6,
        background: theme.custom.gradients.surface,
        boxShadow: theme.custom.shadows.card,
      })}
    >
      <Stack spacing={10} sx={{ flex: 1 }}>
        <Stack
          component="header"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography
              component="span"
              aria-hidden="true"
              sx={{
                width: 63.22,
                height: 44,
                opacity: 0.75,
                display: "inline-block",
                backgroundImage: "url('/img/image-buybak-14.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                flexShrink: 0,
              }}
            />
            <Typography
              component="h1"
              variant="h2"
              color="primary.dark"
              sx={{ mt: "-1px" }}
            >
              Payment Confirmed
            </Typography>
          </Stack>
          <IconButton
            aria-label="Close"
            size="large"
            sx={{
              color: "text.primary",
              alignSelf: "flex-start",
            }}
          >
            <CloseIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Stack>
        <Stack component="main" spacing={2.5}>
          <Typography
            component="p"
            variant="h3"
            color="text.primary"
            sx={{ maxWidth: 540 }}
          >
            Your gift card will be delivered to you at{" "}
            <Typography
              component="span"
              variant="h3"
              color="text.primary"
              sx={{ fontWeight: 600 }}
            >
              {deliveryEmail}
            </Typography>
          </Typography>
          <Typography component="p" variant="body1" color="text.primary">
            If you don&apos;t receive an email within 24 hours, please{" "}
            <MuiLink
              component="button"
              type="button"
              underline="always"
              color="text.primary"
              sx={{
                typography: "body1",
                verticalAlign: "baseline",
              }}
            >
              contact us.
            </MuiLink>
          </Typography>
        </Stack>
      </Stack>
      <Stack component="footer" spacing={2.5}>
        <Button
          component={RouterLink}
          to="/giftcardsu47web"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            minHeight: 53,
            borderRadius: "100px",
            px: 10,
            py: 2.5,
          }}
        >
          Continue Browsing
        </Button>
        <MuiLink
          component={RouterLink}
          to="/"
          variant="caption"
          color="primary"
          underline="none"
          sx={{
            textAlign: "center",
            display: "block",
          }}
        >
          BACK TO HOME
        </MuiLink>
      </Stack>
    </Paper>
  );
};
