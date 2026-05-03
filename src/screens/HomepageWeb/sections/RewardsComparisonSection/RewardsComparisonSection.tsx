import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const traditionalRewardsItems = [
  "$25 in cash savings",
  "Points that expire",
  "$0 return",
];

const buybakItems = [
  "$25 in stock",
  "Stock you own forever",
  "Growing stock earnings",
];

export const RewardsComparisonSection = (): JSX.Element => {
  return (
    <TableContainer
      component={Paper}
      elevation={3}
      sx={{
        maxWidth: 800,
        margin: "40px auto",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <Table>
        <TableHead>
          <TableRow
            sx={{
              background: "linear-gradient(90deg, #293E7C, #6BCB7F)",
            }}
          >
            <TableCell align="center">
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: 600 }}
              >
                Traditional Rewards
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: 600 }}
              >
                BuyBak
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {traditionalRewardsItems.map((item, index) => (
            <TableRow
              key={index}
              sx={{
                "&:nth-of-type(even)": {
                  backgroundColor: "#f9fafb",
                },
                "&:hover": {
                  backgroundColor: "#f1f5ff",
                },
              }}
            >
              <TableCell align="center">
                <Typography
                  sx={{
                    color: "#d9534f",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </Typography>
              </TableCell>

              <TableCell align="center">
                <Typography
                  sx={{
                    color: "#2e7d32",
                    fontWeight: 600,
                  }}
                >
                  {buybakItems[index]}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
