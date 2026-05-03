import {
  Box,
  Grid,
  Link as MuiLink,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type GiftCardItem = {
  amount: string;
  reward: string;
  brandImage: string;
  productImage: string;
  productImageWidth: number;
  productImageHeight: number;
  productImageFit?: "contain" | "cover";
  clickable?: boolean;
  padding?: number;
  outerBorder?: boolean;
  innerShadow?: boolean;
};

const giftCards: GiftCardItem[] = [
  {
    amount: "$1000",
    reward: "4.9%",
    brandImage: "/img/image-buybak-2.png",
    productImage: "/img/image-1-3.png",
    productImageWidth: 127,
    productImageHeight: 60,
    productImageFit: "cover",
    clickable: true,
    padding: 8,
    innerShadow: true,
  },
  {
    amount: "$2100",
    reward: "5.5%",
    brandImage: "/img/image-buybak-2.png",
    productImage: "/img/image-1-3.png",
    productImageWidth: 127,
    productImageHeight: 60,
    productImageFit: "cover",
    clickable: true,
    padding: 8,
    innerShadow: true,
  },
  {
    amount: "$6000",
    reward: "6.0%",
    brandImage: "/img/image-buybak-2.png",
    productImage: "/img/image-1-3.png",
    productImageWidth: 127,
    productImageHeight: 60,
    productImageFit: "cover",
    clickable: false,
    padding: 8,
    innerShadow: true,
  },
  {
    amount: "$750",
    reward: "4.9%",
    brandImage: "/img/image-buybak-2.png",
    productImage: "/img/image-2-2.png",
    productImageWidth: 111,
    productImageHeight: 70,
    clickable: true,
    padding: 8,
  },
  {
    amount: "$2500",
    reward: "5.5%",
    brandImage: "/img/image-buybak-2.png",
    productImage: "/img/image-2-2.png",
    productImageWidth: 111,
    productImageHeight: 70,
    clickable: true,
    padding: 8,
  },
  {
    amount: "$4000",
    reward: "6.0%",
    brandImage: "/img/image-buybak-2.png",
    productImage: "/img/image-2-2.png",
    productImageWidth: 111,
    productImageHeight: 70,
    clickable: true,
    padding: 8,
  },
  {
    amount: "$900",
    reward: "4.9%",
    brandImage: "/img/image-buybak-2.png",
    productImage: "/img/image-1-6.png",
    productImageWidth: 148,
    productImageHeight: 30,
    clickable: true,
    padding: 8,
    outerBorder: true,
  },
  {
    amount: "$1500",
    reward: "5.5%",
    brandImage: "/img/image-buybak-2.png",
    productImage: "/img/image-1-6.png",
    productImageWidth: 148,
    productImageHeight: 30,
    clickable: true,
    padding: 8,
    outerBorder: true,
  },
  {
    amount: "$5000",
    reward: "6.0%",
    brandImage: "/img/image-buybak-2.png",
    productImage: "/img/image-1-6.png",
    productImageWidth: 148,
    productImageHeight: 30,
    clickable: true,
    padding: 8,
    outerBorder: true,
  },
];

const BuyBakMark = () => (
  <Box
    component="img"
    src="/img/image-buybak-14.png"
    alt="BuyBak"
    sx={{
      width: 63.22,
      height: 44,
      objectFit: "cover",
      display: "block",
      flexShrink: 0,
    }}
  />
);

type GiftCardTileProps = {
  item: GiftCardItem;
};

const GiftCardTile = ({ card }: GiftCardTileProps): JSX.Element => {
  const theme = useTheme();


  return (
          <Card
            key={`${card.amount}-${index}`}
            elevation={0}
            sx={(theme) => ({
              flex: 1,
              overflow: "hidden",
              border: `1px solid ${theme.palette.divider}`,
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)",
              bgcolor: theme.palette.background.paper,
              '&:hover': {
                    bgcolor: '#FAFBFA'
                    // or use a specific hex code: backgroundColor: '#303f9f'
                },
            })}
          >
            <Link
                aria-label="Close preregistration"
                className="flex h-10 w-10 items-center justify-center"
                to="/preregister"
            >
            <CardContent
              sx={{
                p: card.cardPadding,
                "&:last-child": { pb: card.cardPadding },
              }}
            >
              <Box
                sx={{
                  aspectRatio: "1.52",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box
                    component="img"
                    src={card.brandImage}
                    alt="Buyback logo"
                    sx={{
                      width: "63.22px",
                      height: "44px",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    component="p"
                    variant="h1"
                    sx={{
                      color: theme.palette.text.primary,
                      whiteSpace: "nowrap",
                      fontSize: '70px',
                    }}
                  >
                    {card.amount}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Stack spacing={0.25} justifyContent="center">
                    <Typography
                      component="p"
                      variant="h4"
                      sx={{
                        color: theme.palette.buybak.greenPrimary,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {card.reward}
                    </Typography>
                    <Typography
                      component="p"
                      variant="caption"
                      sx={{
                        color: theme.palette.text.secondary,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {card.rewardLabel}
                    </Typography>
                  </Stack>
                  <Box
                    component="img"
                    src={card.productImage}
                    alt={card.productImageAlt}
                    sx={{
                      width: `${card.productImageWidth}px`,
                      height: `${card.productImageHeight}px`,
                      objectFit: card.productImageFit,
                      flexShrink: 0,
                    }}
                  />
                </Stack>
              </Box>
            </CardContent>
            </Link>
          </Card>
  );
};

export const GiftCardGridSubsection = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{ width: "100%", position: "relative", zIndex: 1 }}
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          display: "none",
        }}
      >
        Gift cards grid
      </Typography>
      <Grid
        container
        rowSpacing={10}
        columnSpacing={
          theme.custom.responsiveGaps.primary.desktop === "80px" ? 10 : 10
        }
      >
        {giftCards.map((item) => (
          <Grid
            key={`${item.amount}-${item.reward}-${item.productImage}`}
            size={{ xs: 12, md: 6, lg: 4 }}
          >
            <GiftCardTile item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
