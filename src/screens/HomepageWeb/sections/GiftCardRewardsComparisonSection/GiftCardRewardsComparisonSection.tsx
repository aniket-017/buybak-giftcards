import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";

export const GiftCardRewardsComparisonSection = (): JSX.Element => {
  const theme = useTheme();

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

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        sx={{
          alignItems: "stretch",
          width: "100%",
          maxWidth: 560,
          bgcolor: theme.palette.common.white,
        }}
      >
        <Stack
          component="article"
          spacing={5}
          alignItems="center"
          sx={{
            flex: "0 1 260px",
            px: 0,
            py: 5,
            background: '#eee'
          }}
        >
          <Typography
            component="h3"
            sx={{
              width: 237,
              mt: "-1px",
              fontFamily: '"Figtree","Helvetica","Arial",sans-serif',
              fontSize: "41px",
              fontWeight: 400,
              lineHeight: "normal",
              letterSpacing: "-0.6px",
              textAlign: "center",
              color: theme.palette.buybak.greenPrimary,
            }}
          >
            Traditional
            <br />
            Rewards
          </Typography>
          {traditionalRewardsItems.map((item, index) => (
            <Stack key={item} spacing={5} alignItems="center" width="100%">
              <Divider flexItem />
              <Typography
                component={index === 2 ? "p" : "div"}
                sx={{
                  fontFamily: '"Figtree","Helvetica","Arial",sans-serif',
                  fontSize: "28px",
                  fontWeight: 400,
                  lineHeight: "normal",
                  letterSpacing: "0px",
                  whiteSpace: "nowrap",
                  color: theme.palette.text.secondary,
                }}
              >
                {item}
              </Typography>
            </Stack>
          ))}
        </Stack>
        <Stack
          component="article"
          spacing={5}
          alignItems="center"
          sx={{
            flex: "0 1 300px",
            px: 0,
            py: 5,
            bgcolor: "background.paper",
          }}
        >
          <Stack spacing={2.5} alignItems="center" justifyContent="center">
            <Box
              component="img"
              src="/img/image-buybak-3.png"
              alt="BuyBak logo mark"
              sx={{
                width: 73.22,
                height: 54,
                objectFit: "cover",
              }}
            />
            <Typography
              component="h3"
              sx={{
                fontFamily: '"Figtree","Helvetica","Arial",sans-serif',
                fontSize: "41px",
                fontWeight: 400,
                lineHeight: "32px",
                letterSpacing: "-0.6px",
                whiteSpace: "nowrap",
              }}
            >
              <Box
                component="span"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.buybak.greenAccent,
                  letterSpacing: "-0.24px",
                }}
              >
                Buy
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.buybak.blueDeep,
                  letterSpacing: "-0.24px",
                }}
              >
                Bak
              </Box>
            </Typography>
          </Stack>
          {buybakItems.map((item) => (
            <Stack key={item} spacing={5} alignItems="center" width="100%">
              <Divider flexItem />
              <Typography
                sx={{
                  fontFamily: '"Figtree","Helvetica","Arial",sans-serif',
                  fontSize: "28px",
                  fontWeight: 400,
                  lineHeight: "normal",
                  letterSpacing: "0px",
                  whiteSpace: "nowrap",
                  color: theme.palette.buybak.blueDark,
                }}
              >
                {item}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};
