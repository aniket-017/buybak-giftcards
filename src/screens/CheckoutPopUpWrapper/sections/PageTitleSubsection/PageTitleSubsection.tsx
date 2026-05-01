import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Stack, Typography } from "@mui/material";

const steps = [
  { label: "PAYMENT DETAILS", active: false },
  { label: "REVIEW AND CONFIRM", active: true },
];

export const PageTitleSubsection = (): JSX.Element => {
  return (
    <Stack
      component="section"
      spacing={5}
      sx={{ width: "100%" }}
      aria-label="Checkout header"
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        component="header"
        sx={{ width: "100%" }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            component="img"
            src="/img/image-buybak-14.png"
            alt=""
            aria-hidden="true"
            sx={{
              width: 63.22,
              height: 44,
              opacity: 0.75,
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              flexShrink: 0,
            }}
          />
          <Typography
            component="h2"
            variant="h2"
            sx={{
              color: "primary.dark",
              lineHeight: "normal",
            }}
          >
            Checkout
          </Typography>
        </Stack>
        <IconButton
          aria-label="Close checkout"
          size="large"
          sx={{
            color: "text.primary",
            p: 1,
          }}
        >
          <CloseIcon sx={{ fontSize: 28 }} />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        spacing={5}
        alignItems="center"
        component="nav"
        aria-label="Checkout steps"
      >
        {steps.map((step) => (
          <Typography
            key={step.label}
            variant="subtitle1"
            component="button"
            type="button"
            sx={{
              p: 0,
              border: 0,
              backgroundColor: "transparent",
              cursor: "pointer",
              color: step.active ? "text.primary" : "neutral.main",
              whiteSpace: "nowrap",
              textAlign: "left",
              font: "inherit",
            }}
          >
            {step.label}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};
