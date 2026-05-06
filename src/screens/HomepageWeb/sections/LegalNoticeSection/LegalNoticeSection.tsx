import { Stack, Typography, useTheme } from "@mui/material";

const legalNoticeItems = [
  {
    text: "© 2026 BUYBAK. ALL RIGHTS RESERVED. Subject to availability & terms. All investing involves risk. Please consult with a financial advisor",
    variant: "subtitle1" as const,
    sx: {
      color: "buybak.greenMuted",
      textAlign: "center",
      lineHeight: "normal",
    },
  },
];

export const LegalNoticeSection = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Stack
      component="section"
      spacing={{ xs: 1.5, md: 2.5 }}
      alignItems="left"
      justifyContent="left"
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 1501,
        mx: "auto",
      }}
    >
      {legalNoticeItems.map((item) => (
        <Typography
          key={item.text}
          component="p"
          variant={item.variant}
          sx={{
            ...item.sx,
            width: "100%",
            mt: 0,
            mb: 0,
            [theme.breakpoints.down("sm")]: {
              fontSize: item.variant === "subtitle1" ? "16px" : "20px",
            },
          }}
        >
          {item.text}
        </Typography>
      ))}
    </Stack>
  );
};
