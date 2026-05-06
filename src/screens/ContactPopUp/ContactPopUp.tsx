import { FormEvent, useId, useState } from "react";
import { Link } from "react-router-dom";
import buybakLogo from "../../assets/images/buybak_logo.png";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

export const ContactPopUp = (): JSX.Element => {
  const emailId = useId();
  const inviteId = useId();

  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [tel, setTel] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Box >
      <Stack
		spacing={2}
        sx={{
          position: 'relative', 
          top: '-102px', 
          margin: 0, // Prevents default margin interference
          width: "80%",
          px: {
            xs: 0,
            sm: 6,
            md: 50,
            lg: "var(--responsive-sectionpadding)",
          },
          py: {
            xs: 6,
            sm: 8,
            md: 10,
            lg: "var(--responsive-sectionpadding)",
          },
          alignItems: "center",
          justifyContent: "center",
          bgcolor: 'white',
          zIndex: 4,
        }}
      >
              <Box
                sx={(theme) => ({
                  aspectRatio: "1.52",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 1,
                  background: theme.custom.gradients.surface,
                  boxShadow: theme.custom.shadows.card,
                })}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                <Grid container flexDirection="row" spacing={1.0}>
                
                    <Grid item xs={12} padding={10} spacing={5} alignItems="center" />
                    <Grid item xs={2.5} padding={5} spacing={5} alignItems="center" />
                    <Grid item xs={1.5} padding={5} spacing={5} alignItems="center" >
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
                    </Grid>
                    <Grid item xs={7} alignItems="center">
                        <Typography
                            component="h3"
                            sx={{
                              fontFamily: '"Source Serif 4", "Times New Roman", serif',
                              fontSize: "40px",
                              fontWeight: 500,
                              lineHeight: "normal",
                              letterSpacing: 0,
                              color: "text.primary",
                            }}
                        >
                            Contact Us
                        </Typography>
                    </Grid>

                    <Grid item xs={1} alignItems="center">
                          <Link
                            aria-label="Close preregistration"
                            className="flex h-10 w-10 items-center justify-center"
                            to="/"
                          >
                            <img
                              alt=""
                              aria-hidden="true"
                              className="relative h-10 w-10 aspect-[1]"
                              src="https://c.animaapp.com/lRTzVt0W/img/iconamoon-close-3.svg"
                            />
                          </Link>
                    </Grid>
                    <Grid item xs={12} padding={5} spacing={5}/>

                            <Grid item xs={3} spacing={2} alignItems="center" />
                            <Grid item xs={6} alignItems="center">
                                Fullname*
                            </Grid>
                            <Grid item xs={3} spacing={2} alignItems="center" />
                            <Grid item padding={2} xs={12} />
                            <Grid item xs={3} spacing={2} alignItems="center" />
                            <Grid item xs={6} spacing={2} alignItems="center">
                                <TextField
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput': {
                                          borderRadius: '0px', // Adjust the radius as needed
                                        },
                                        width: '400px',
                                    }}
                                  name="fullname"
                                  placeholder="John Smith"
                                  type="text"
                                  value={fullname}
                                  onChange={(event) => setEmail(event.target.value)}
                                />
                            </Grid>
                            <Grid item xs={3} spacing={2} alignItems="center"/>
                            <Grid item padding={5} xs={12} />
                            <Grid item xs={3} spacing={2} alignItems="center" />
                            <Grid item xs={6} alignItems="center">
                                Email*
                            </Grid>
                            <Grid item xs={3} spacing={2} alignItems="center" />
                            <Grid item padding={2} xs={12} />
                            <Grid item xs={3} spacing={2} alignItems="center" />
                            <Grid item xs={6} spacing={2} alignItems="center">
                                <TextField
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput': {
                                          borderRadius: '0px', // Adjust the radius as needed
                                        },
                                        width: '400px',
                                    }}
                                  name="email"
                                  placeholder="her@email.com"
                                  type="email"
                                  value={email}
                                  onChange={(event) => setEmail(event.target.value)}
                                />
                            </Grid>
                            <Grid item xs={3} spacing={2} alignItems="center"/>
                            <Grid item padding={5} xs={12} />
                            <Grid item xs={3} spacing={2} alignItems="center" />
                            <Grid item xs={6} alignItems="center">
                                Mobile*
                            </Grid>
                            <Grid item xs={3} spacing={2} alignItems="center" />
                            <Grid item padding={2} xs={12} />
                            <Grid item xs={3} spacing={2} alignItems="center" />
                            <Grid item xs={6} spacing={2} alignItems="center">
                                <TextField
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput': {
                                          borderRadius: '0px', // Adjust the radius as needed
                                        },
                                        width: '400px',
                                    }}
                                  name="tel"
                                  placeholder="(555) - 555 - 5555"
                                  type="tel"
                                  value={tel}
                                  onChange={(event) => setEmail(event.target.value)}
                                />
                            </Grid>
                            <Grid item xs={3} spacing={2} alignItems="center"/>
                            <Grid item padding={5} xs={12} />
                            <Grid item xs={3} spacing={2} alignItems="center"/>
                            <Grid item xs={6} alignItems="center">
                                Company Name
                            </Grid>
                            <Grid item xs={3} spacing={2} alignItems="center"/>
                            <Grid item xs={3} alignItems="center"/>
                            <Grid item xs={6} spacing={2} alignItems="center" >
                                <TextField
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput': {
                                          borderRadius: '0px', // Adjust the radius as needed
                                        },
                                        width: '400px',
                                    }}
                                  name="company"
                                  placeholder="ABC Inc."
                                  type="text"
                                  value={company}
                                  onChange={(event) => setFriends(event.target.value)}
                                />
                            </Grid>
                            <Grid item xs={3} alignItems="center"/>
                            <Grid item padding={5} xs={12} />
                            <Grid item xs={4} alignItems="center"/>
                            <Grid item xs={8} spacing={2} alignItems="center">
                            <Link
                              className="flex w-full flex-[0_0_auto] items-center justify-center self-stretch rounded-[100px] bg-greens-2d-6a-4f px-10 py-5"
                              to="/preregisteru47success"
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href="#pre-register"
                                    sx={{
                                      minWidth: "auto",
                                      px: 8,
                                      py: 4,
                                    }}
                                >
                                      {"Submit"}
                                </Button>
                            </Link>
                            </Grid>
                            <Grid item xs={2} alignItems="center"/>
                            <Grid item xs={12} padding={1} spacing={5} alignItems="center"/>
                    </Grid>
                </Stack>
              </Box>
      </Stack>
    </Box>
  );
};
