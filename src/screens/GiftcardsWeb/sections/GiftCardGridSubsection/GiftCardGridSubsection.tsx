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
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageFit?: "contain" | "cover";
  clickable?: boolean;
  padding?: number;
  outerBorder?: boolean;
  innerShadow?: boolean;
};

const giftCards: GiftCardItem[] = [
  {
    amount: "$1000",
    reward: "4.9%",
    imageSrc: "/img/image-1-3.png",
    imageWidth: 127,
    imageHeight: 60,
    imageFit: "cover",
    clickable: true,
    padding: 8,
    innerShadow: true,
  },
  {
    amount: "$2100",
    reward: "5.5%",
    imageSrc: "/img/image-1-3.png",
    imageWidth: 127,
    imageHeight: 60,
    imageFit: "cover",
    clickable: true,
    padding: 8,
    innerShadow: true,
  },
  {
    amount: "$6000",
    reward: "6.0%",
    imageSrc: "/img/image-1-3.png",
    imageWidth: 127,
    imageHeight: 60,
    imageFit: "cover",
    clickable: false,
    padding: 8,
    innerShadow: true,
  },
  {
    amount: "$750",
    reward: "4.9%",
    imageSrc: "/img/image-2-2.png",
    imageWidth: 111,
    imageHeight: 70,
    clickable: true,
    padding: 8,
  },
  {
    amount: "$2500",
    reward: "5.5%",
    imageSrc: "/img/image-2-2.png",
    imageWidth: 111,
    imageHeight: 70,
    clickable: true,
    padding: 8,
  },
  {
    amount: "$4000",
    reward: "6.0%",
    imageSrc: "/img/image-2-2.png",
    imageWidth: 111,
    imageHeight: 70,
    clickable: true,
    padding: 8,
  },
  {
    amount: "$900",
    reward: "4.9%",
    imageSrc: "/img/image-1-6.png",
    imageWidth: 148,
    imageHeight: 30,
    clickable: true,
    padding: 6,
    outerBorder: true,
  },
  {
    amount: "$1500",
    reward: "5.5%",
    imageSrc: "/img/image-1-6.png",
    imageWidth: 148,
    imageHeight: 30,
    clickable: true,
    padding: 6,
    outerBorder: true,
  },
  {
    amount: "$5000",
    reward: "6.0%",
    imageSrc: "/img/image-1-6.png",
    imageWidth: 148,
    imageHeight: 30,
    clickable: true,
    padding: 6,
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

const GiftCardTile = ({ item }: GiftCardTileProps): JSX.Element => {
  const theme = useTheme();

  const cardContent = (
    <Box
      sx={{
        width: "100%",
        bgcolor: theme.palette.common.white,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 6,
        boxShadow: item.innerShadow
          ? "0px 20px 40px rgba(0, 0, 0, 0.15)"
          : "none",
        p: item.padding ?? 8,
        aspectRatio: "1.52 / 1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <BuyBakMark />
        <Typography
          component="p"
          sx={{
            fontFamily: '"Figtree", Helvetica, Arial, sans-serif',
            fontWeight: 600,
            fontSize: "45px",
            lineHeight: "normal",
            letterSpacing: 0,
            color: theme.palette.text.primary,
            whiteSpace: "nowrap",
          }}
        >
          {item.amount}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Stack spacing={0.25}>
          <Typography
            component="p"
            variant="h4"
            sx={{
              color: theme.palette.brandGreen.dark,
              whiteSpace: "nowrap",
            }}
          >
            {item.reward}
          </Typography>
          <Typography
            component="p"
            variant="caption"
            sx={{
              color: theme.palette.text.secondary,
              whiteSpace: "nowrap",
            }}
          >
            STOCK REWARDS
          </Typography>
        </Stack>
        <Box
          component="img"
          src={item.imageSrc}
          alt=""
          sx={{
            width: item.imageWidth,
            height: item.imageHeight,
            objectFit: item.imageFit ?? "contain",
            display: "block",
            flexShrink: 0,
          }}
        />
      </Stack>
    </Box>
  );

  if (!item.clickable) {
    return (
      <Box
        sx={{
          width: "100%",
          borderRadius: 6,
          overflow: "hidden",
          boxShadow: theme.custom.shadows.card,
          bgcolor: theme.palette.common.white,
        }}
      >
        {cardContent}
      </Box>
    );
  }

  return (
    <MuiLink
      component={RouterLink}
      to="/checkoutpopup"
      underline="none"
      color="inherit"
      aria-label={`Buy gift card ${item.amount}`}
      sx={{
        width: "100%",
        display: "block",
        borderRadius: 6,
        overflow: "hidden",
        bgcolor: theme.palette.common.white,
        border: item.outerBorder
          ? `1px solid ${theme.palette.divider}`
          : "none",
        boxShadow: theme.custom.shadows.card,
      }}
    >
      {cardContent}
    </MuiLink>
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
            key={`${item.amount}-${item.reward}-${item.imageSrc}`}
            size={{ xs: 12, md: 6, lg: 4 }}
          >
            <GiftCardTile item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
