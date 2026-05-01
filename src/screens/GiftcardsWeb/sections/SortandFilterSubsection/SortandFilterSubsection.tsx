import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";

const brandFilters = ["All Brands", "Lowe's", "Home Depot", "Staples"];

export const SortandFilterSubsection = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        position: "relative",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={{ xs: 3, md: 2 }}
        width="100%"
      >
        <Stack
          direction="row"
          spacing={2.5}
          useFlexGap
          flexWrap="wrap"
          alignItems="center"
        >
          {brandFilters.map((label, index) => {
            const selected = index === 0;

            return (
              <Button
                key={label}
                variant="contained"
                disableElevation
                aria-pressed={selected}
                sx={{
                  minWidth: 0,
                  px: 4,
                  py: 1,
                  borderRadius: "100px",
                  bgcolor: selected
                    ? theme.palette.secondary.dark
                    : theme.palette.divider,
                  color: selected
                    ? theme.palette.secondary.light
                    : theme.palette.secondary.dark,
                  ...theme.typography.body1,
                  lineHeight: "normal",
                  textAlign: "center",
                  "&:hover": {
                    bgcolor: selected
                      ? theme.palette.secondary.dark
                      : theme.palette.divider,
                    boxShadow: "none",
                  },
                }}
              >
                {label}
              </Button>
            );
          })}
        </Stack>
        <Button
          variant="text"
          endIcon={
            <KeyboardArrowDownIcon
              sx={{
                fontSize: 24,
                color: theme.palette.secondary.main,
              }}
            />
          }
          sx={{
            minWidth: 0,
            p: 0,
            alignSelf: { xs: "flex-end", md: "center" },
            color: theme.palette.secondary.main,
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Typography
            component="span"
            variant="subtitle1"
            sx={{
              color: theme.palette.secondary.main,
              textAlign: "center",
            }}
          >
            SORT BY STORE
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
};
