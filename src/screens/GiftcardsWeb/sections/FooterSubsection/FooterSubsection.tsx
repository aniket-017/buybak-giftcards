import {
  Box,
  Button,
  Divider,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

const legalLinks = ["Terms of Service", "Privacy Policy", "Legal & Compliance"];
const sitemapLinks = ["Home", "About", "Login"];

export const FooterSubsection = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        zIndex: 0,
        width: "100%",
        bgcolor: theme.palette.brandGreen.dark,
        px: { xs: 4, sm: 6, md: 10 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Stack spacing={{ xs: 6, md: 10 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 1fr) auto auto auto",
            },
            gap: { xs: 5, md: 6 },
            alignItems: "start",
          }}
        >
          <Stack spacing={3} sx={{ maxWidth: 650 }}>
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              sx={{ minHeight: 44 }}
            >
              <Box
                aria-hidden="true"
                sx={{
                  width: 57,
                  height: 40,
                  flexShrink: 0,
                  opacity: 0.9,
                  backgroundImage: "url('/img/imagelogo-1.png')",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
              <Typography
                component="div"
                sx={{
                  fontFamily: '"Figtree", Helvetica, Arial, sans-serif',
                  fontSize: 24,
                  fontWeight: 400,
                  lineHeight: "32px",
                  letterSpacing: "-0.6px",
                  color: "rgba(212, 233, 226, 1)",
                  whiteSpace: "nowrap",
                }}
              >
                <Box
                  component="span"
                  sx={{ fontWeight: 600, letterSpacing: "-0.14px" }}
                >
                  Buy
                </Box>
                <Box
                  component="span"
                  sx={{ fontWeight: 700, letterSpacing: "-0.14px" }}
                >
                  Bak
                </Box>
              </Typography>
            </Stack>
            <Typography
              component="p"
              sx={{
                maxWidth: 343,
                fontFamily: '"Inter", Helvetica, Arial, sans-serif',
                fontSize: 16,
                fontWeight: 400,
                lineHeight: "26px",
                color: "rgba(168, 211, 197, 1)",
              }}
            >
              Make Money as You Spend Money
            </Typography>
          </Stack>
          <Stack component="nav" spacing={1.25} aria-label="Legal">
            <Typography
              component="h2"
              sx={{
                ...theme.typography.body1,
                color: "rgba(235, 243, 250, 1)",
                whiteSpace: "nowrap",
              }}
            >
              Legal
            </Typography>
            {legalLinks.map((item) => (
              <Link
                key={item}
                href="#"
                color="inherit"
                underline="none"
                sx={{
                  ...theme.typography.body1,
                  color: "rgba(168, 211, 197, 1)",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
              </Link>
            ))}
          </Stack>
          <Stack component="nav" spacing={1.25} aria-label="Sitemap">
            <Typography
              component="h2"
              sx={{
                ...theme.typography.body1,
                color: "rgba(235, 243, 250, 1)",
                whiteSpace: "nowrap",
              }}
            >
              Sitemap
            </Typography>
            {sitemapLinks.map((item) => (
              <Link
                key={item}
                href="#"
                color="inherit"
                underline="none"
                sx={{
                  ...theme.typography.body1,
                  color: "rgba(168, 211, 197, 1)",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
              </Link>
            ))}
          </Stack>
          <Box>
            <Button
              variant="contained"
              color="success"
              sx={{
                bgcolor: theme.palette.success.main,
                color: theme.palette.common.white,
                px: 5,
                py: 2,
                borderRadius: "16777200px",
                minWidth: "auto",
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
        <Divider sx={{ borderColor: "rgba(45, 106, 79, 1)" }} />
        <Stack
          spacing={{ xs: 1.5, md: "var(--responsive-gaptertiary)" }}
          alignItems="center"
        >
          <Typography
            component="p"
            sx={{
              ...theme.typography.caption,
              color: "rgba(168, 211, 197, 1)",
              textAlign: "center",
              width: "100%",
              maxWidth: 1001,
            }}
          >
            © 2026 BUYBAK. ALL RIGHTS RESERVED.
          </Typography>
          <Typography
            component="address"
            sx={{
              ...theme.typography.body1,
              color: "rgba(168, 211, 197, 1)",
              textAlign: "center",
              width: "100%",
              maxWidth: 1001,
              fontStyle: "normal",
            }}
          >
            123 Construction Way, Suite 500, Building City, BC 12345
          </Typography>
          <Typography
            component="p"
            sx={{
              ...theme.typography.body1,
              color: "rgba(168, 211, 197, 1)",
              textAlign: "center",
              width: "100%",
              maxWidth: 1001,
            }}
          >
            Gift card purchases and fractional stock offerings are subject to
            availability and terms. All investing involves risk. Please consult
            with a financial advisor regarding investment decisions.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
