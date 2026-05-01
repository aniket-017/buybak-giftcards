import { Box, Stack, TextField, Typography } from "@mui/material";

const deliveryFields = [
  {
    label: "FULL NAME*",
    value: "John Smith",
    placeholder: "John Smith",
    type: "text",
    disabled: true,
    id: "delivery-full-name",
  },
  {
    label: "EMAIL*",
    value: "",
    placeholder: "your@email.com",
    type: "email",
    disabled: false,
    id: "delivery-email",
  },
  {
    label: "PHONE NUMBER",
    value: "(000) 000-0000",
    placeholder: "(000) 000-0000",
    type: "tel",
    disabled: true,
    id: "delivery-phone-number",
  },
];

export const DeliveryFormSubsection = (): JSX.Element => {
  return (
    <Box component="section" sx={{ width: "100%", mb: "-80px" }}>
      <Stack spacing={5}>
        <Typography variant="h3" component="h2" color="text.primary">
          Delivery Details
        </Typography>
        <Stack spacing={5}>
          {deliveryFields.map((field) => (
            <Stack key={field.id} spacing={1}>
              <Typography
                component="label"
                htmlFor={field.id}
                variant="subtitle1"
                color="text.primary"
              >
                {field.label}
              </Typography>
              <TextField
                id={field.id}
                type={field.type}
                value={field.value}
                placeholder={field.placeholder}
                disabled={field.disabled}
                fullWidth
                variant="outlined"
                InputLabelProps={{ shrink: false }}
                inputProps={{
                  "aria-label": field.label,
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "background.paper",
                  },
                  "& .MuiOutlinedInput-input": {
                    textAlign: "center",
                    color: "text.secondary",
                    whiteSpace: "nowrap",
                  },
                  "& .Mui-disabled": {
                    WebkitTextFillColor: (theme) =>
                      theme.palette.text.secondary,
                  },
                  "& .MuiOutlinedInput-root.Mui-disabled": {
                    bgcolor: "background.paper",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "text.secondary",
                  },
                }}
              />
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};
