import CloseIcon from "@mui/icons-material/Close";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const formFields = [
  {
    id: "input-1",
    label: "EMAIL*",
    placeholder: "your@email.com",
    type: "email",
  },
  {
    id: "input-2",
    label: "INVITE YOUR FRIENDS",
    placeholder: "friend1@email.com, friend2@email.com",
    type: "email",
  },
];

export const PreRegisterPopUp = (): JSX.Element => {
  return (
    <Paper
      data-model-id="259:28630"
      component="section"
      elevation={0}
      sx={(theme) => ({
        width: "100%",
        maxWidth: 671,
        minHeight: 742,
        mx: "auto",
        px: { xs: 4, sm: 8, md: 10 },
        py: { xs: 4, sm: 7, md: 8 },
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 6,
        background: theme.custom.gradients.surface,
        boxShadow: theme.custom.shadows.card,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      })}
    >
      <Stack spacing={{ xs: 6, md: 10 }}>
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt=""
              sx={{
                width: 63.22,
                height: 44,
                opacity: 0,
                display: "block",
              }}
            />
            <Box
              aria-hidden="true"
              sx={{
                width: 48,
                height: 34,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "success.main",
                fontFamily: '"Source Serif 4", Helvetica, serif',
                fontSize: 32,
                lineHeight: 1,
                fontWeight: 600,
              }}
            >
              ♜
            </Box>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: "primary.dark",
                fontSize: { xs: "40px", md: "48px" },
              }}
            >
              Join the Club
            </Typography>
          </Stack>
          <IconButton
            aria-label="Close"
            sx={{
              color: "primary.dark",
              p: 0,
              mt: 1,
              mr: 0.5,
            }}
          >
            <CloseIcon sx={{ fontSize: 36 }} />
          </IconButton>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <Stack spacing={4}>
          {formFields.map((field) => (
            <Stack key={field.id} spacing={1} component="form">
              <Typography
                component="label"
                htmlFor={field.id}
                variant="subtitle1"
                sx={{ color: "primary.dark" }}
              >
                {field.label}
              </Typography>
              <TextField
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon
                        sx={{
                          color: "text.secondary",
                          fontSize: 26,
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    minHeight: 54,
                    borderRadius: 5,
                  },
                  "& .MuiOutlinedInput-input": {
                    py: 1.5,
                    px: 0,
                  },
                }}
              />
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Box sx={{ pt: { xs: 6, md: 10 } }}>
        <Button
          component={RouterLink}
          to="/preregistersuccesspopup"
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            minHeight: 52,
            borderRadius: 999,
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
        >
          Pre-Register Now
        </Button>
      </Box>
    </Paper>
  );
};
