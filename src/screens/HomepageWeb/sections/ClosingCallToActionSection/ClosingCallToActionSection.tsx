import { Box, Button, Stack, Typography } from "@mui/material";

const actions = [
  {
    label: "Browse Gift Cards",
    variant: "contained" as const,
    color: "primary" as const,
  },
  {
    label: "Learn More",
    variant: "outlined" as const,
    color: "secondary" as const,
  },
];

export const ClosingCallToActionSection = (): JSX.Element => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        alignSelf: "stretch",
        bgcolor: "buybak.neutralAlt",
        px: "var(--responsive-sectionpadding)",
        py: "var(--responsive-sectionpadding)",
      }}
    >
      <Stack spacing={5} alignItems="center" justifyContent="center">
        <Typography
          component="h2"
          variant="h2"
          sx={{
            mt: "-1px",
            textAlign: "center",
            color: "buybak.blueDark",
            fontFamily: '"Source Serif 4", "Times New Roman", serif',
            fontWeight: 500,
          }}
        >
          Make your money work for you.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing="var(--responsive-gaptertiary)"
          alignItems="center"
          justifyContent="center"
        >
          {actions.map((action) => (
            <Button
              key={action.label}
              variant={action.variant}
              color={action.color}
            >
              {action.label}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};
