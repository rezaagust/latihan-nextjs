import React from "react";
import Image from "next/image";
import { Box, Typography, TextField, Container, Grid, Button } from "@mui/material";

export default function MovieSection() {
    return (
        <Box>
            <Box
                sx={{
                    position: "relative",
                    height: "700px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&::after": {
                        position: "absolute",
                        content: '""',
                        width: "100%",
                        height: "100%",
                        top: "0",
                        left: "0",
                        background: "rgba(0, 0, 0, 0.4)",
                        backgroundColor: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.8) 0,
              rgba(0, 0, 0, 0.1) 60%,
              rgba(0, 0, 0, 0.8) 100%,
            )`,
                    },
                }}
            >
                <Image src="/../public/anime.jpeg" layout="fill" objectFit="cover" alt="Backdrop Netplox" />
                <Container maxWidth="md" sx={{ position: "relative", zIndex: 1000, mx: 40 }}>
                    <Grid container>
                        <Grid container>
                            <Grid item xs="auto" sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <Typography variant="h3" component="h1" color="common.white" fontWeight="600" textAlign="center">
                                    MOVIE ANIME TERPOPULER
                                </Typography>
                                <Typography variant="h6" component="h4" color="common.white" textAlign="center" sx={{ my: 2 }}>
                                    Terlengkap dan terseru
                                </Typography>
                                <TextField
                                    variant="filled"
                                    label="Cari anime kesukaan kamu disini..."
                                    sx={{ background: "white", borderRadius: "10px", textAlign: "center" }}
                                />
                            </Grid>
                            <Grid item xs sx={{ my:1, display: "flex", marginLeft:36 }}>
                                <Button variant="contained" size="large">
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="md" sx={{ position: "relative", zIndex: 1000 }}>
                    <Grid container>

                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}