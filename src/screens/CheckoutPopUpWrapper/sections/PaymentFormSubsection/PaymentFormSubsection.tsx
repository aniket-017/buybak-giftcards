import { Grid, Stack, TextField, Typography } from "@mui/material";

const paymentFields = [
  {
    label: "CARD NUMBER",
    placeholder: "**** **** **** ****",
    xs: 12,
  },
  {
    label: "EXPIRATION",
    placeholder: "MM/YY",
    xs: 12,
    sm: 6,
  },
  {
    label: "SECURITY CODE",
    placeholder: "****",
    xs: 12,
    sm: 6,
  },
  {
    label: "ZIP CODE",
    placeholder: "00000",
    xs: 12,
  },
];

export const PaymentFormSubsection = (): JSX.Element => {
  return (
    <Stack
      component="section"
      spacing={5}
      width="100%"
      mb="-80px"
      aria-labelledby="payment-method-heading"
    >
      <Typography id="payment-method-heading" variant="h3" color="text.primary">
        Payment Method
      </Typography>
      <Grid container spacing={5}>
        {paymentFields.map((field) => (
          <Grid key={field.label} item xs={field.xs} sm={field.sm}>
            <Stack spacing={1}>
              <Typography variant="subtitle1" color="text.primary">
                {field.label}
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value=""
                placeholder={field.placeholder}
                inputProps={{
                  "aria-label": field.label,
                  readOnly: true,
                }}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
