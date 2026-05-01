import { useState } from "react";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

export const QuantitySelectorSubsection = (): JSX.Element => {
  const theme = useTheme();
  const [quantity, setQuantity] = useState(1);

  const availableQuantity = 50;

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => Math.min(availableQuantity, prev + 1));
  };

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
      }}
    >
<Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: "100%",
          spacing: 5
        }}
      >
<Stack spacing={1.5} sx={{ flex: 1, minWidth: 0 }}>
<Typography
            component="h2"
            variant="subtitle1"
            sx={{
              color: theme.palette.text.primary,
              whiteSpace: "nowrap",
            }}
          >
SELECT QUANTITY
          </Typography>
<Typography
            component="p"
            variant="subtitle1"
            sx={{
              color: theme.palette.text.secondary,
              whiteSpace: "nowrap",
            }}
          >
{availableQuantity} AVAILABLE
          </Typography>
</Stack>
<Stack
          direction="row"
          alignItems="center"
          spacing={5}
          sx={{
            flexShrink: 0,
          }}
        >
<IconButton
            aria-label="Decrease quantity"
            onClick={handleDecrease}
            disabled={quantity <= 1}
            sx={{
              width: 40,
              height: 40,
              bgcolor: theme.palette.success.light,
              color: theme.palette.brandGreen.dark,
              "&:hover": {
                bgcolor: theme.palette.success.light,
              },
              "&.Mui-disabled": {
                bgcolor: theme.palette.success.light,
                color: theme.palette.brandGreen.dark,
                opacity: 0.5,
              },
            }}
          >
<Remove sx={{ fontSize: 24 }} />
</IconButton>
<Typography
            component="output"
            variant="h4"
            aria-live="polite"
            sx={{
              color: theme.palette.text.primary,
              minWidth: "1ch",
              textAlign: "center",
            }}
          >
{quantity}
          </Typography>
<IconButton
            aria-label="Increase quantity"
            onClick={handleIncrease}
            disabled={quantity >= availableQuantity}
            sx={{
              width: 40,
              height: 40,
              bgcolor: theme.palette.success.light,
              color: theme.palette.brandGreen.dark,
              "&:hover": {
                bgcolor: theme.palette.success.light,
              },
              "&.Mui-disabled": {
                bgcolor: theme.palette.success.light,
                color: theme.palette.brandGreen.dark,
                opacity: 0.5,
              },
            }}
          >
<Add sx={{ fontSize: 24 }} />
</IconButton>
</Stack>
</Stack>
</Box>
);
};
