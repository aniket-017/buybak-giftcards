import { Box, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import * as React from "react";

export const GiftCardFilterSection = (): JSX.Element => {
  const filters = ["All Brands", "Lowe's", "Home Depot", "Staples"];
  const [selectedFilter, setSelectedFilter] =
    React.useState<string>("All Brands");

  const handleFilterChange = (
    _event: React.MouseEvent<HTMLElement>,
    newFilter: string | null,
  ) => {
    if (newFilter !== null) {
      setSelectedFilter(newFilter);
    }
  };

  return (
    <Box
      component="section"
      sx={{ width: "100%", position: "relative", zIndex: 2 }}
    >
      <Stack direction="row" spacing={0} sx={{ width: "100%" }}>
        <ToggleButtonGroup
          exclusive
          value={selectedFilter}
          onChange={handleFilterChange}
          aria-label="Gift card brand filters"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            "& .MuiToggleButtonGroup-grouped": {
              margin: 0,
              border: 0,
              borderRadius: "100px !important",
            },
          }}
        >
          {filters.map((filter) => {
            const isSelected = selectedFilter === filter;

            return (
              <ToggleButton
                key={filter}
                value={filter}
                aria-label={filter}
                disableRipple
                sx={{
                  px: 4,
                  py: 1,
                  minHeight: 40,
                  bgcolor: isSelected ? "secondary.main" : "grey.100",
                  color: isSelected ? "secondary.light" : "secondary.main",
                  ...(theme) => theme.typography.body2,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  "&:hover": {
                    bgcolor: isSelected ? "secondary.main" : "grey.100",
                  },
                  "&.Mui-selected": {
                    bgcolor: "secondary.main",
                    color: "secondary.light",
                  },
                  "&.Mui-selected:hover": {
                    bgcolor: "secondary.main",
                  },
                }}
              >
                {filter}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </Stack>
    </Box>
  );
};
