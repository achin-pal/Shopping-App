import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        container
        spacing={{ xs: 4, sm: 6, md: 8 }}
        sx={{
          bgcolor: "black",
          color: "white",
          py: 4,
          textAlign: { xs: "center", md: "left" },
          justifyContent: "center",
        }}
      >
        {/* Company */}
        <Grid item xs={12} sm={6} md={3}>
          <Stack spacing={1.5} alignItems={{ xs: "center", md: "flex-start" }}>
            <Typography variant="h6" sx={{ pb: 1 }}>
              Company
            </Typography>
            <Button color="inherit">About</Button>
            <Button color="inherit">Press</Button>
            <Button color="inherit">Blog</Button>
            <Button color="inherit">Jobs</Button>
            <Button color="inherit">Partners</Button>
          </Stack>
        </Grid>

        {/* Solutions */}
        <Grid item xs={12} sm={6} md={3}>
          <Stack spacing={1.5} alignItems={{ xs: "center", md: "flex-start" }}>
            <Typography variant="h6" sx={{ pb: 1 }}>
              Solutions
            </Typography>
            <Button color="inherit">Marketing</Button>
            <Button color="inherit">Analytics</Button>
            <Button color="inherit">Commerce</Button>
            <Button color="inherit">Insights</Button>
            <Button color="inherit">Support</Button>
          </Stack>
        </Grid>

        {/* Documentation */}
        <Grid item xs={12} sm={6} md={3}>
          <Stack spacing={1.5} alignItems={{ xs: "center", md: "flex-start" }}>
            <Typography variant="h6" sx={{ pb: 1 }}>
              Documentation
            </Typography>
            <Button color="inherit">Guides</Button>
            <Button color="inherit">API Support</Button>
          </Stack>
        </Grid>

        {/* Legal */}
        <Grid item xs={12} sm={6} md={3}>
          <Stack spacing={1.5} alignItems={{ xs: "center", md: "flex-start" }}>
            <Typography variant="h6" sx={{ pb: 1 }}>
              Legal
            </Typography>
            <Button color="inherit">Claims</Button>
            <Button color="inherit">Privacy</Button>
            <Button color="inherit">Terms</Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
