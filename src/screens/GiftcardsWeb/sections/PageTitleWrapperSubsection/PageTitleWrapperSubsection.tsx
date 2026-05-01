import { Stack, Typography } from "@mui/material";

export const PageTitleWrapperSubsection = (): JSX.Element => {
  return (
    <Stack
      component="section"
      spacing={1.5}
      width="100%"
      alignItems="flex-start"
      position="relative"
      zIndex={4}
    >
      <Typography
        component="h1"
        variant="h1"
        color="text.primary"
        sx={{ mt: "-1px" }}
      >
        Gift Sameer Cards with Loyalty Stock
      </Typography>
      <Typography component="p" variant="body1" color="text.secondary">
        Guaranteed cards. Instant delivery. Real stock.
      </Typography>
    </Stack>
  );
};
