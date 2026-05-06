import {
  Box,
  Card,
  CardActionArea,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

type GiftCardItem = {
  amount: string;
  reward: string;
  brandImage: string;
  brandAlt: string;
  brandWidth: number;
  brandHeight: number;
  cardPadding: number;
  elevated?: boolean;
  outerBorder?: boolean;
};

const giftCardItems: GiftCardItem[] = [
  {
    amount: "$1000",
    reward: "4.9%",
    brandImage: "/img/image-1-2.png",
    brandAlt: "Lowe's",
    brandWidth: 127,
    brandHeight: 60,
    cardPadding: 32,
    elevated: true,
  },
  {
    amount: "$2500",
    reward: "5.5%",
    brandImage: "/img/image-1-2.png",
    brandAlt: "Lowe's",
    brandWidth: 127,
    brandHeight: 60,
    cardPadding: 32,
    elevated: true,
  },
  {
    amount: "$4000",
    reward: "6.0%",
    brandImage: "/img/image-1-2.png",
    brandAlt: "Lowe's",
    brandWidth: 127,
    brandHeight: 60,
    cardPadding: 32,
    elevated: true,
  },
  {
    amount: "$1000",
    reward: "4.9%",
    brandImage: "/img/image-2-2.png",
    brandAlt: "The Home Depot",
    brandWidth: 111,
    brandHeight: 70,
    cardPadding: 32,
  },
  {
    amount: "$2500",
    reward: "5.5%",
    brandImage: "/img/image-2-2.png",
    brandAlt: "The Home Depot",
    brandWidth: 111,
    brandHeight: 70,
    cardPadding: 32,
  },
  {
    amount: "$4000",
    reward: "6.0%",
    brandImage: "/img/image-2-2.png",
    brandAlt: "The Home Depot",
    brandWidth: 111,
    brandHeight: 70,
    cardPadding: 32,
  },
  {
    amount: "$1000",
    reward: "4.9%",
    brandImage: "/img/image-1-5.png",
    brandAlt: "Brand",
    brandWidth: 148,
    brandHeight: 30,
    cardPadding: 24,
    outerBorder: true,
  },
  {
    amount: "$2500",
    reward: "5.5%",
    brandImage: "/img/image-1-5.png",
    brandAlt: "Brand",
    brandWidth: 148,
    brandHeight: 30,
    cardPadding: 24,
    outerBorder: true,
  },
  {
    amount: "$4000",
    reward: "6.0%",
    brandImage: "/img/image-1-5.png",
    brandAlt: "Brand",
    brandWidth: 148,
    brandHeight: 30,
    cardPadding: 24,
    outerBorder: true,
  },
];

const stockIconStyles = {
  width: 63.22,
  height: 44,
  backgroundImage: "url(/img/image-buybak-8.png)",
  backgroundPosition: "50% 50%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  flexShrink: 0,
};

export const GiftCardCatalogSection = (): JSX.Element => {
  const theme = useTheme();

  console.log({theme});

  return (
    <Box component="section" sx={{ width: "100%", position: "relative" }}>
      <Grid container padding={2} spacing={2} columnSpacing={3.5} rowSpacing={4}>
        {giftCardItems.map((item, index) => (
          <Grid
            key={`${item.amount}-${item.reward}-${index}`}
            size={{ xs: 12, sm: 8, lg: 6 }}
            padding={4} spacing={4}
          >
            <Card
              elevation={0}
              sx={{
                width: "100%",
                borderRadius: 1,
                overflow: "hidden",
                border: item.outerBorder
                  ? `1px solid ${theme.palette.divider}`
                  : "none",
                boxShadow: item.elevated
                  ? theme.shadows[22]
                  : theme.shadows[11],
                bgcolor: "background.paper",
              }}
            >
              <CardActionArea
                sx={{
                  borderRadius: 1,
                  display: "block",
                }}
              >
                <Stack
                  justifyContent="space-between"
                  sx={{
                    width: "100%",
                    aspectRatio: "1.52",
                    minHeight: 211,
                    p: `${item.cardPadding}px`,
                    borderRadius: 1,
                    border: `1px solid ${theme.palette.divider}`,
                    bgcolor: "background.paper",
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box aria-hidden="true" sx={stockIconStyles} />
                    <Typography
                      component="h3"
                      sx={{
                        ...theme.typography.h4,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {item.amount}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="flex-end"
                    justifyContent="space-between"
                  >
                    <Stack spacing={0.5}>
                      <Typography
                        sx={{
                          ...theme.typography.h5,
                          color: theme.custom.greens1b4332,
                        }}
                      >
                        {item.reward}
                      </Typography>
                      <Typography
                        sx={{
                          ...theme.typography.subtitle2,
                          color: theme.palette.text.secondary,
                        }}
                      >
                        STOCK REWARDS
                      </Typography>
                    </Stack>
                    <Box
                      component="img"
                      src={item.brandImage}
                      alt={item.brandAlt}
                      sx={{
                        width: item.brandWidth,
                        height: item.brandHeight,
                        objectFit: "contain",
                        objectPosition: "center",
                        flexShrink: 0,
                      }}
                    />
                  </Stack>
                </Stack>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
