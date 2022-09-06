import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function Popular() {
    return (
        <Box sx={{ background: "#222", color: "common.white" }}>
            <Typography py={3} mx={4} variant="h6">
                Movie Terlaris
            </Typography>
            <Box
                sx={{
                    height: "100%",
                    background: "#222",
                    color: "common.white",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Grid container>
                    <Grid item xs={2} mx={2.5}>
                        <Button variant="contained" sx={{ background: "#2222", display: "flex", flexDirection: "column" }}>
                            <Image src="/../public/0.jpg" width={400} height={400} objectFit="contain" />
                            <Typography fontSize={15} sx={{ position: "relative", my: 2 }}>Jujutsu Kaisen Movie 0</Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={2} mx={2.5}>
                        <Button variant="contained" sx={{ background: "#2222", display: "flex", flexDirection: "column" }}>
                            <Image src="/../public/red.jpg" width={400} height={400} objectFit="contain" />
                            <Typography sx={{ position: "relative", my: 2 }}>One Piece Red Film</Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={2} mx={2.5}>
                        <Button variant="contained" sx={{ background: "#2222", display: "flex", flexDirection: "column" }}>
                            <Image src="/../public/kimi.jpg" width={400} height={400} objectFit="contain" />
                            <Typography sx={{ position: "relative", my: 2 }}>Kimi No Nawa</Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={2} mx={2.5}>
                        <Button variant="contained" sx={{ background: "#2222", display: "flex", flexDirection: "column" }}>
                            <Image src="/../public/narto.jpg" width={400} height={400} objectFit="contain" />
                            <Typography fontSize={14} sx={{ position: "relative", my: 2 }}>Naruto Movie The Last</Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={2} mx={2.5}>
                        <Button variant="contained" sx={{ background: "#2222", display: "flex", flexDirection: "column" }}>
                            <Image src="/../public/stampede.jpg" width={400} height={400} objectFit="contain" />
                            <Typography fontSize={12} sx={{ position: "relative", my: 2 }}>One Piece Movie Stampede</Typography>
                        </Button>
                    </Grid>
                </Grid>

            </Box>
        </Box>
    );
}