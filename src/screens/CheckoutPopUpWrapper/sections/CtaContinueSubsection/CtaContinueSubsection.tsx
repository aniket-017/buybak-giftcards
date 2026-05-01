import { Button, Link as MuiLink, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const actions = {
  primary: {
    label: "Review",
    to: "/checkoutpopup2",
  },
  secondary: {
    label: "GO BACK",
  },
};

export const CtaContinueSubsection = (): JSX.Element => {
  return (
    <Stack
      component="section"
      spacing={10}
      width="100%"
      sx={{
        mb: "-80px",
      }}
    >
      <Button
        component={RouterLink}
        to={actions.primary.to}
        fullWidth
        variant="contained"
        color="primary"
        disableElevation
        sx={{
          minHeight: 80,
          borderRadius: "100px",
          px: 10,
          py: 5,
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.main",
          },
        }}
      >
        <Typography
          variant="button"
          component="span"
          color="common.white"
          textAlign="center"
          whiteSpace="nowrap"
        >
          {actions.primary.label}
        </Typography>
      </Button>
      <MuiLink
        component="button"
        type="button"
        underline="none"
        color="primary.main"
        sx={{
          alignSelf: "stretch",
        }}
      >
        <Typography
          variant="caption"
          component="span"
          color="primary.main"
          textAlign="center"
          display="block"
        >
          {actions.secondary.label}
        </Typography>
      </MuiLink>
    </Stack>
  );
};
