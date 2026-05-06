import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import buybakLogo from "../../../../assets/images/buybak_logo.png";

const navItems = [
  { label: "Benefits", href: "#benefits" },
  { label: "Gift Cards", href: "#gift-cards" },
  { label: "Contact Us", to: "/contactpopup", variant: "outline" as const },
  { label: "Pre-register", to: "/preregister", variant: "solid" as const },
];

export const PrimaryNavigationSection = (): JSX.Element => {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      component="header"
      sx={{
        backgroundColor: "background.paper",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: 120,
          px: 10,
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          href="#"
          underline="none"
          color="inherit"
          sx={{ flexShrink: 0 }}
        >
          <Box
            component="img"
            src={buybakLogo}
            alt="BuyBak logo"
            sx={{
              width: 63.22,
              height: 44,
              objectFit: "cover",
            }}
          />
          <Typography
            component="span"
            sx={{
              fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
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
        <Stack
          direction="row"
          spacing={8}
          alignItems="center"
          href="#"
          underline="none"
          color="inherit"
          sx={{ flexShrink: 0 }}
        >
          {navItems.map((item) => {
			  const isActive = location.pathname === item.to;

			  if (item.variant === "solid") {
				return (
				  <Link
					key={item.label}
					aria-current={isActive ? "page" : undefined}
					className="inline-flex flex-[0_0_auto] items-center justify-center rounded-[100px] bg-greens-2d-6a-4f px-8 py-2"
					to={item.to}
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
					  {item.label}
          		  </Button>
				  </Link>
				);
			  }

			  if (item.variant === "outline") {
				return (
				  <Link
					key={item.label}
					aria-current={isActive ? "page" : undefined}
					className="inline-flex flex-[0_0_auto] items-center justify-center rounded-[100px] border border-solid border-greens-5-2a-788 bg-neutralsfafbfa px-8 py-2"
					to={item.to}
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
					  	{item.label}
					  </Button>
				  </Link>
				);
			  }

			  return (
				<Link
				  key={item.label}
				  aria-current={isActive ? "page" : undefined}
				  className="inline-flex flex-[0_0_auto] items-center justify-center gap-2.5"
				  to={item.to}
				>
				  <span className="relative mt-[-1.00px] w-fit whitespace-nowrap text-center font-web-body text-[25px] text-[length:var(--web-body-font-size)] font-[number:var(--web-body-font-weight)] leading-[var(--web-body-line-height)] tracking-[var(--web-body-letter-spacing)] text-neutrals-7a-8a-85 [font-style:var(--web-body-font-style)]">
					{item.label}
				  </span>
				</Link>
			  );
          })}
		</Stack>
      </Toolbar>
    </AppBar>
  );
};
