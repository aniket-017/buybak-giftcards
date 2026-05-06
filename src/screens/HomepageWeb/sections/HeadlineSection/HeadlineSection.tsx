import { Stack, Typography } from "@mui/material";

const headlineContent = {
  title: "FAQ",
  description: " "
};

export const HeadlineSection = (): JSX.Element => {
  return (
    <Stack component="section" alignItems="center" spacing={2.5} width="100%">
      <Typography
        component="h2"
        variant="h2"
        color="text.primary"
        textAlign="center"
        sx={{ 
            fontFamily: '"Source Serif 4", "Times New Roman", serif',
            fontWeight: 500,
        }}
      >
        {headlineContent.title}
      </Typography>
      <Typography
        component="p"
        variant="body2"
        color="text.secondary"
        textAlign="center"
      >
        {headlineContent.description}
      </Typography>
    </Stack>
  );
};
