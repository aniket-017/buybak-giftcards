import { Grid, Stack, Typography } from "@mui/material";

const headingParts = [
  { text: "Same supplies. Same stores. ", component: "div", color: "text.primary" },
  { text: "Better ", component: "span", color: "secondary.main" },
  { text: "Deal.", component: "span", color: "buybak.blueDeep" },
];

const bodyParts = [
  {
    text: "Quietly building a passive portfolio",
    color: "buybak.neutralBody",
  },
  {
    text: ".",
    color: "buybak.neutralBody",
  },
];

export const IntroCopySection = (): JSX.Element => {
  return (
    <Stack
      component="section"
      spacing={5}
      alignItems="flex-start"
      sx={{
        width: "100%",
        maxWidth: 750,
      }}
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          mt: "-1px",
          color: "transparent",
        }}
      >
        {headingParts.map((part) => (
          <Typography
            key={part.text}
            component={part.component}
            variant="inherit"
            sx={{ 
                color: part.color,
                fontSize: '40px',
                fontFamily: '"Source Serif 4", "Times New Roman", serif',
                fontWeight: 500
            }}
          >
            {part.text}
          </Typography>
        ))}
      </Typography>
      <Grid />
      <Typography
        component="p"
        variant="b1"
        sx={{
          width: "100%",
          color: "buybak.neutralBody",
        }}
      >
        {bodyParts.map((part) => (
          <Typography
            key={part.text}
            component="span"
            variant="inherit"
            sx={{ 
                color: part.color, 
                fontFamily: '"Source Serif 4", "Times New Roman", serif',
                fontWeight: 500,
                fontSize: '21px'
            }}
          >
            {part.text}
          </Typography>
        ))}
      </Typography>
    </Stack>
  );
};
