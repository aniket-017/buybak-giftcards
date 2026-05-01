import {
  CssBaseline,
  createTheme,
  GlobalStyles,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

const colors = {
  blueDark: "rgba(13, 33, 55, 1)",
  blueDeep: "rgba(26, 58, 92, 1)",
  blueSoft: "rgba(235, 243, 250, 1)",
  greenFooter: "rgba(27, 67, 50, 1)",
  greenPrimary: "rgba(45, 106, 79, 1)",
  greenAccent: "rgba(82, 167, 136, 1)",
  greenMuted: "rgba(168, 211, 197, 1)",
  greenLight: "rgba(212, 233, 226, 1)",
  neutralBody: "rgba(90, 102, 98, 1)",
  neutralMuted: "rgba(122, 138, 133, 1)",
  neutralSoft: "rgba(168, 176, 173, 1)",
  neutralBorder: "rgba(232, 235, 233, 1)",
  neutralAlt: "rgba(250, 251, 250, 1)",
  white: "rgba(255, 255, 255, 1)",
};

const appTheme = createTheme({
  palette: {
    primary: {
      main: colors.greenPrimary,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.greenAccent,
      contrastText: colors.greenPrimary,
    },
    text: {
      primary: colors.blueDark,
      secondary: colors.neutralMuted,
    },
    background: {
      default: colors.white,
      paper: colors.white,
    },
    divider: colors.neutralBorder,
    success: {
      main: colors.greenAccent,
    },
    common: {
      white: colors.white,
    },
    neutral: {
      main: "rgba(168, 176, 173, 1)",
      light: "rgba(232, 235, 233, 1)",
      dark: "rgba(122, 138, 133, 1)",
      contrastText: "rgba(13, 33, 55, 1)",
    },
    brandBlue: {
      main: "rgba(13, 33, 55, 1)",
      dark: "rgba(26, 58, 92, 1)",
      light: "rgba(46, 96, 153, 1)",
      pale: "rgba(235, 243, 250, 1)",
    },
    brandGreen: {
      main: "rgba(27, 67, 50, 1)",
      dark: "rgba(27, 67, 50, 1)",
      medium: "rgba(45, 106, 79, 1)",
      light: "rgba(82, 167, 136, 1)",
      pale: "rgba(168, 211, 197, 1)",
      soft: "rgba(212, 233, 226, 1)",
    },
    buybak: {
      blueDark: colors.blueDark,
      blueDeep: colors.blueDeep,
      blueSoft: colors.blueSoft,
      greenFooter: colors.greenFooter,
      greenPrimary: colors.greenPrimary,
      greenAccent: colors.greenAccent,
      greenMuted: colors.greenMuted,
      greenLight: colors.greenLight,
      neutralBody: colors.neutralBody,
      neutralMuted: colors.neutralMuted,
      neutralSoft: colors.neutralSoft,
      neutralBorder: colors.neutralBorder,
      neutralAlt: colors.neutralAlt,
      white: colors.white,
    },
  },
  typography: {
    fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Source Serif 4", "Times New Roman", serif',
      fontSize: "48px",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "0px",
      color: colors.blueDark,
    },
    h2: {
      fontFamily: '"Source Serif 4", "Times New Roman", serif',
      fontSize: "48px",
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: "0px",
      color: colors.blueDark,
    },
    h4: {
      fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
      fontSize: "31px",
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: "0px",
      color: colors.blueDark,
    },
    h5: {
      fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
      fontSize: "25px",
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: "0px",
      color: colors.blueDark,
    },
    subtitle1: {
      fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: "0px",
    },
    body1: {
      fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: "0px",
      color: colors.neutralBody,
    },
    body2: {
      fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: "0px",
      color: colors.neutralMuted,
    },
    button: {
      fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: "0px",
      textTransform: "none",
    },
    caption: {
      fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: "0px",
      color: colors.neutralMuted,
    },
  },
  shape: {
    borderRadius: 20,
  },
  spacing: 4,
  custom: {
    gradients: {
      surface:
        "linear-gradient(117deg, rgba(240,247,244,1) 0%, rgba(242,248,246,1) 8%, rgba(245,250,248,1) 17%, rgba(247,251,249,1) 25%, rgba(250,252,251,1) 33%, rgba(252,254,253,1) 42%, rgba(255,255,255,1) 50%, rgba(252,253,254,1) 60%, rgba(249,252,253,1) 70%, rgba(246,250,251,1) 80%, rgba(243,249,250,1) 90%, rgba(240,247,249,1) 100%)",
    },
    shadows: {
      card: "0px 20px 40px 0px rgba(0, 0, 0, 0.05)",
    },
    responsiveGaps: {
      primary: {
        desktop: "80px",
        tablet: "60px",
        mobile: "40px",
      },
      tertiary: {
        desktop: "20px",
        tablet: "12px",
        mobile: "12px",
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@import url("https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;700&family=Inter:wght@400&family=Source+Serif+4:wght@500;600&display=swap")':
          {},
        ":root": {
          "--responsive-deviceheight": "1117px",
          "--responsive-devicewidth": "1728px",
          "--responsive-gapsecondary": "40px",
          "--responsive-gaptertiary": "20px",
          "--responsive-sectionpadding": "200px",
        },
        '[data-responsive-mode="desktop"]': {
          "--responsive-deviceheight": "1117px",
          "--responsive-devicewidth": "1728px",
          "--responsive-gapsecondary": "40px",
          "--responsive-gaptertiary": "20px",
        },
        '[data-responsive-mode="tablet"]': {
          "--responsive-deviceheight": "852px",
          "--responsive-devicewidth": "834px",
          "--responsive-gapsecondary": "40px",
          "--responsive-gaptertiary": "12px",
        },
        '[data-responsive-mode="mobile"]': {
          "--responsive-deviceheight": "1194px",
          "--responsive-devicewidth": "393px",
          "--responsive-gapsecondary": "20px",
          "--responsive-gaptertiary": "12px",
        },
        body: {
          margin: 0,
          backgroundColor: colors.white,
          color: colors.blueDark,
          fontFamily: '"Figtree", "Helvetica", "Arial", sans-serif',
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        "*": {
          boxSizing: "border-box",
        },
        img: {
          display: "block",
          maxWidth: "100%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 100,
          padding: "20px 40px",
          boxShadow: "none",
          fontSize: "20px",
          fontWeight: 400,
          lineHeight: 1,
        },
        containedPrimary: {
          backgroundColor: colors.greenPrimary,
          color: colors.white,
          "&:hover": {
            backgroundColor: colors.greenPrimary,
            boxShadow: "none",
          },
        },
        outlinedSecondary: {
          borderColor: colors.greenAccent,
          color: colors.greenPrimary,
          backgroundColor: colors.neutralAlt,
          "&:hover": {
            borderColor: colors.greenAccent,
            backgroundColor: colors.neutralAlt,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          border: `1px solid ${colors.neutralBorder}`,
          backgroundColor: colors.white,
          boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 20,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: `1px solid ${colors.neutralBorder}`,
          boxShadow: "none",
          overflow: "hidden",
          backgroundColor: colors.white,
          "&:before": {
            display: "none",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: 104,
          padding: "0 40px",
        },
        content: ({ theme }) => ({
          ...theme.typography.body1,
          color: colors.blueDark,
          margin: "0",
        }),
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.body1,
          color: colors.blueDark,
          padding: "0 40px 40px",
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "inherit",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "none",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: colors.neutralBorder,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--blues-0d-2137": "rgba(13, 33, 55, 1)",
            "--blues-1a-3a-5c": "rgba(26, 58, 92, 1)",
            "--blues-2e-6099": "rgba(46, 96, 153, 1)",
            "--bluesebf-3fa": "rgba(235, 243, 250, 1)",
            "--card-shadow": "0px 20px 40px 0px rgba(0, 0, 0, 0.05)",
            "--greens-1b-4332": "rgba(27, 67, 50, 1)",
            "--greens-2d-6a-4f": "rgba(45, 106, 79, 1)",
            "--greens-5-2a-788": "rgba(82, 167, 136, 1)",
            "--greensa-8d-3c-5": "rgba(168, 211, 197, 1)",
            "--greensd-4e-9e-2": "rgba(212, 233, 226, 1)",
            "--neutrals-7a-8a-85": "rgba(122, 138, 133, 1)",
            "--neutralsa-8b-0ad": "rgba(168, 176, 173, 1)",
            "--neutralse-8ebe-9": "rgba(232, 235, 233, 1)",
            "--neutralsfafbfa": "rgba(250, 251, 250, 1)",
            "--neutralsffffff": "rgba(255, 255, 255, 1)",
            "--responsive-gapprimary":
              theme.custom.responsiveGaps.primary.desktop,
            "--responsive-gaptertiary":
              theme.custom.responsiveGaps.tertiary.desktop,
            "--web-body-font-family": '"Figtree", Helvetica, Arial, sans-serif',
            "--web-body-font-size": "20px",
            "--web-body-font-style": "normal",
            "--web-body-font-weight": 400,
            "--web-body-letter-spacing": "0px",
            "--web-body-line-height": "normal",
            "--web-h1-font-family": '"Source Serif 4", Helvetica, serif',
            "--web-h1-font-size": "61px",
            "--web-h1-font-style": "normal",
            "--web-h1-font-weight": 500,
            "--web-h1-letter-spacing": "0px",
            "--web-h1-line-height": "normal",
            "--web-h2-font-family": '"Source Serif 4", Helvetica, serif',
            "--web-h2-font-size": "48px",
            "--web-h2-font-style": "normal",
            "--web-h2-font-weight": 600,
            "--web-h2-letter-spacing": "0px",
            "--web-h2-line-height": "normal",
            "--web-h3-font-family": '"Source Serif 4", Helvetica, serif',
            "--web-h3-font-size": "39px",
            "--web-h3-font-style": "normal",
            "--web-h3-font-weight": 600,
            "--web-h3-letter-spacing": "0px",
            "--web-h3-line-height": "normal",
            "--web-h4-font-family": '"Figtree", Helvetica, Arial, sans-serif',
            "--web-h4-font-size": "31px",
            "--web-h4-font-style": "normal",
            "--web-h4-font-weight": 600,
            "--web-h4-letter-spacing": "0px",
            "--web-h4-line-height": "normal",
            "--web-h6-font-family": '"Figtree", Helvetica, Arial, sans-serif',
            "--web-h6-font-size": "20px",
            "--web-h6-font-style": "normal",
            "--web-h6-font-weight": 600,
            "--web-h6-letter-spacing": "0px",
            "--web-h6-line-height": "normal",
            "--web-small-font-family":
              '"Figtree", Helvetica, Arial, sans-serif',
            "--web-small-font-size": "16px",
            "--web-small-font-style": "normal",
            "--web-small-font-weight": 600,
            "--web-small-letter-spacing": "0px",
            "--web-small-line-height": "normal",
            "--animate-spin": "spin 1s linear infinite",
          },
          "[data-responsive-mode='desktop']": {
            "--responsive-gapprimary":
              theme.custom.responsiveGaps.primary.desktop,
            "--responsive-gaptertiary":
              theme.custom.responsiveGaps.tertiary.desktop,
          },
          "[data-responsive-mode='tablet']": {
            "--responsive-gapprimary":
              theme.custom.responsiveGaps.primary.tablet,
            "--responsive-gaptertiary":
              theme.custom.responsiveGaps.tertiary.tablet,
          },
          "[data-responsive-mode='mobile']": {
            "--responsive-gapprimary":
              theme.custom.responsiveGaps.primary.mobile,
            "--responsive-gaptertiary":
              theme.custom.responsiveGaps.tertiary.mobile,
          },
          ".animate-fade-in": {
            animation: "fade-in 1s var(--animation-delay, 0s) ease forwards",
          },
          ".animate-fade-up": {
            animation: "fade-up 1s var(--animation-delay, 0s) ease forwards",
          },
          ".animate-marquee": {
            animation: "marquee var(--duration) infinite linear",
          },
          ".animate-marquee-vertical": {
            animation: "marquee-vertical var(--duration) linear infinite",
          },
          ".animate-shimmer": {
            animation: "shimmer 8s infinite",
          },
          ".animate-spin": {
            animation: "var(--animate-spin)",
          },
          "@keyframes spin": {
            to: {
              transform: "rotate(1turn)",
            },
          },
          "@keyframes image-glow": {
            "0%": {
              opacity: 0,
              animationTimingFunction: "cubic-bezier(0.74, 0.25, 0.76, 1)",
            },
            "10%": {
              opacity: 0.7,
              animationTimingFunction: "cubic-bezier(0.12, 0.01, 0.08, 0.99)",
            },
            "100%": {
              opacity: 0.4,
            },
          },
          "@keyframes fade-in": {
            "0%": {
              opacity: 0,
              transform: "translateY(-10px)",
            },
            "100%": {
              opacity: 1,
              transform: "none",
            },
          },
          "@keyframes fade-up": {
            "0%": {
              opacity: 0,
              transform: "translateY(20px)",
            },
            "100%": {
              opacity: 1,
              transform: "none",
            },
          },
          "@keyframes shimmer": {
            "0%, 90%, 100%": {
              backgroundPosition: "calc(-100% - var(--shimmer-width)) 0",
            },
            "30%, 60%": {
              backgroundPosition: "calc(100% + var(--shimmer-width)) 0",
            },
          },
          "@keyframes marquee": {
            "0%": {
              transform: "translate(0)",
            },
            "100%": {
              transform: "translateX(calc(-100% - var(--gap)))",
            },
          },
          "@keyframes marquee-vertical": {
            "0%": {
              transform: "translateY(0)",
            },
            "100%": {
              transform: "translateY(calc(-100% - var(--gap)))",
            },
          },
          body: {
            margin: 0,
            fontFamily: theme.typography.fontFamily,
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          },
          "*": {
            boxSizing: "border-box",
          },
        })}
      />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
