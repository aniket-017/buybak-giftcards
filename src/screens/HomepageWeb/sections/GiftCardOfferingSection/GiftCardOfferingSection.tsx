import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

export const GiftCardOfferingSection = (): JSX.Element => {
  const theme = useTheme();

  const cards = [
    {
      amount: "$1000",
      reward: "4.9%",
      rewardLabel: "STOCK REWARDS",
      brandImage: "/img/image-buybak-2.png",
      productImage: "/img/image-1.png",
      productImageAlt: "Gift card illustration",
      productImageWidth: 127,
      productImageHeight: 60,
      cardPadding: 8,
      elevated: true,
      productImageFit: "cover" as const,
    },
    {
      amount: "$2500",
      reward: "5.4%",
      rewardLabel: "STOCK REWARDS",
      brandImage: "/img/image-buybak-2.png",
      productImage: "/img/image-2.png",
      productImageAlt: "Gift card illustration",
      productImageWidth: 111,
      productImageHeight: 70,
      cardPadding: 8,
      elevated: false,
      productImageFit: "contain" as const,
    },
    {
      amount: "$5000",
      reward: "6.0%",
      rewardLabel: "STOCK REWARDS",
      brandImage: "/img/image-buybak-2.png",
      productImage: "/img/image-1-1.png",
      productImageAlt: "Gift card illustration",
      productImageWidth: 148,
      productImageHeight: 30,
      cardPadding: 6,
      elevated: false,
      productImageFit: "contain" as const,
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 2.5, md: 5 }}
        alignItems="stretch"
      >
        {cards.map((card, index) => (
          <Card
            key={`${card.amount}-${index}`}
            elevation={0}
            sx={(theme) => ({
              flex: 1,
              borderRadius: "24px",
              overflow: "hidden",
              border: `1px solid ${theme.palette.divider}`,
              boxShadow: card.elevated
                ? "0px 20px 40px rgba(0, 0, 0, 0.15)"
                : "0px 20px 40px rgba(0, 0, 0, 0.05)",
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
        ))}
      </Stack>
    </Box>
  );
};
