import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import type { JSX } from "react";

const content = {
  title: "You're #457 on the list",
  description:
    "You'll be the first to know when you can start earning with BuyBak.",
};

export const PreRegisterSuccess = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      data-model-id="259:28694"
      sx={{
        position: "relative",
        width: "100%",
        minWidth: 671,
        minHeight: 900,
        px: { xs: 3, sm: 6, md: 10 },
        py: { xs: 4, sm: 6, md: 10 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 5,
        background: theme.custom.gradients.surface,
        boxShadow: theme.custom.shadows.card,
        overflow: "hidden",
      }}
    >
      <IconButton
        aria-label="Close"
        sx={{
          position: "absolute",
          top: { xs: 24, sm: 32, md: 64 },
          right: { xs: 24, sm: 32, md: 64 },
          color: theme.palette.brandGreen.dark,
        }}
      >
        <CloseIcon sx={{ fontSize: 36 }} />
      </IconButton>
      <Stack
        component="article"
        spacing={2.5}
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "100%",
          maxWidth: 511,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: 65,
            height: 65,
            borderRadius: "50%",
            bgcolor: theme.palette.brandGreen.soft,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2.5,
          }}
        >
          <PersonOutlineOutlinedIcon
            sx={{
              fontSize: 28,
              color: theme.palette.brandGreen.dark,
            }}
          />
        </Box>
        <Typography
          component="h1"
          variant="h2"
          sx={{
            color: theme.palette.brandGreen.dark,
          }}
        >
          {content.title}
        </Typography>
        <Typography
          component="p"
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            maxWidth: 511,
          }}
        >
          {content.description}
        </Typography>
      </Stack>
    </Box>
  );
};
