import { Link, useLocation } from "react-router-dom";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";

const navigationItems = ["Benefits", "Gift Cards"];

export const TopNavigationSection = (): JSX.Element => {
  return (
    <AppBar position="static" component="header" color="default">
      <Toolbar
        disableGutters
        sx={{
          minHeight: "72px",
          px: 5,
          py: 2.5,
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            component="img"
            src="/img/imagelogo.png"
            alt="BuyBak logo"
            sx={{
              width: "63.22px",
              height: 44,
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              flexShrink: 0,
            }}
          />
          <Typography
            component="div"
            sx={{
              fontFamily: '"Figtree", Helvetica, Arial, sans-serif',
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: "32px",
              letterSpacing: "-0.6px",
              whiteSpace: "nowrap",
            }}
          >
            <Box
              component="span"
              sx={{
                color: "#52A788",
                fontWeight: 600,
                letterSpacing: "-0.14px",
              }}
            >
              Buy
            </Box>
            <Box
              component="span"
              sx={{
                color: "#2E6099",
                fontWeight: 700,
                letterSpacing: "-0.14px",
              }}
            >
              Bak
            </Box>
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2.5} alignItems="center">
          {navigationItems.map((item) => (
            <Button
              key={item}
              variant="text"
              color="inherit"
              sx={{
                p: 0,
                minWidth: "auto",
                borderRadius: 0,
                color: "text.secondary",
                typography: "body1",
                lineHeight: "normal",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              {item}
            </Button>
          ))}

                  <Link
                    key="Contactpopup"
                    aria-current="page"
                    className="inline-flex flex-[0_0_auto] items-center justify-center rounded-[100px] border border-solid border-greens-5-2a-788 bg-neutralsfafbfa px-8 py-2"
                    to="/contactpopup"
                  >
                      <Button
                        variant="outlined"
                        color="secondary"
                        href="#contact-us"
                        sx={{
                          minWidth: "auto",
                          px: 8,
                          py: 2,
                        }}
                      >
                        Contact Us
                      </Button>
                  </Link>

                  <Link
                    key="Pre-register"
                    aria-current="page"
                    className="inline-flex flex-[0_0_auto] items-center justify-center rounded-[100px] bg-greens-2d-6a-4f px-8 py-2"
                    to="/preregister"
                  >
					  <Button
						variant="contained"
						color="primary"
						href="#pre-register"
						sx={{
						  minWidth: "auto",
						  px: 8,
						  py: 2,
						}}
					  >
						  Pre-register
					  </Button>
                  </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
