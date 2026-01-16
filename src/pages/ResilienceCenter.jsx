import React from "react";
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import { green, red, orange } from "@mui/material/colors";
import { AutoAwesomeRounded } from "@mui/icons-material";

const ArcGeniusInsights = (
  <React.Fragment>
    <CardHeader
      title="ArcGenius Insights"
      avatar={
        <Avatar
          sx={{ bgcolor: "transparent", width: 24, height: 24 }}
          aria-label="recipe"
        >
          <AutoAwesomeRounded sx={{ color: "primary.main" }} />
        </Avatar>
      }
    ></CardHeader>
    <CardContent>
      <Typography gutterBottom sx={{ fontSize: 14 }}>
        Most issues today are caused by agent connectivity. Updating agents and
        restarting 1 service will restore fulls protection
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          pt: 2,
        }}
      >
        <Button variant="outlined" size="small" color="secondary">
          Resolve Issues with ArcGenius
        </Button>
        <Button variant="outlined" size="small" color="secondary">
          Ask ArcGenius about my environment.
        </Button>
      </Box>
    </CardContent>
  </React.Fragment>
);

function StatTile({ label, value, color, subtleLabel }) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 2,
        height: "100%",
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Typography
          sx={{
            fontSize: 10,
            fontWeight: 600,
            color: color,
          }}
        >
          {label}
        </Typography>

        <Typography sx={{ fontSize: 34, fontWeight: 800, color: color }}>
          {value}
        </Typography>

        {subtleLabel ? (
          <Typography sx={{ fontSize: 12, color: "text.secondary", mt: 0.25 }}>
            {subtleLabel}
          </Typography>
        ) : null}
      </CardContent>
    </Card>
  );
}

const EnvironmentProtectionStatus = (
  <React.Fragment>
    <CardHeader
      title={
        <Grid
          container
          spacing={0.5}
          alignItems="baseline"
          sx={{ justifyContent: "space-between" }}
        >
          {/* Left: Title */}
          <Grid item xs={16} sm={16}>
            <Typography sx={{ fontWeight: 600, fontSize: 20 }}>
              Your environment is{" "}
              <Box component="span" sx={{ color: green[700], fontWeight: 700 }}>
                protected
              </Box>
              .
            </Typography>
          </Grid>

          {/* Right: Subheader (right-aligned on sm+, below on xs) */}
          <Grid
            item
            xs={16}
            sm={16}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", sm: "flex-end" },
            }}
          >
            <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
              Last verified: 12 minutes ago
            </Typography>
          </Grid>
        </Grid>
      }
    ></CardHeader>
    <CardContent>
      <Grid container spacing={2}>
        <Grid size={4}>
          <StatTile label="PROTECTED" value="92%" color={green[700]} />
        </Grid>
        <Grid size={4}>
          <StatTile label="AT-RISK" value="6%" color={red[700]} />
        </Grid>
        <Grid size={4}>
          <StatTile label="UNPROTECTED" value="3%" color={orange[700]} />
        </Grid>
      </Grid>
    </CardContent>
  </React.Fragment>
);

const ProtectionTrends = (
  <React.Fragment>
    <CardHeader title="Protection Trends"></CardHeader>
    <CardContent>
      <Typography gutterBottom sx={{ fontSize: 14 }}>
        Content here
      </Typography>
    </CardContent>
  </React.Fragment>
);

const NeedsAttention = (
  <React.Fragment>
    <CardHeader title="Needs Attention"></CardHeader>
    <CardContent>
      <Typography gutterBottom sx={{ fontSize: 14 }}>
        Content here
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function Home() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2} columns={16}>
        <Typography sx={{ fontSize: 14 }}>
          Know what’s protected, what’s at risk, and what to fix next—based on
          proven recovery signals.
        </Typography>
        <Grid size={16}>
          <Card variant="outlined">{ArcGeniusInsights}</Card>
        </Grid>
        <Grid size={{ xs: 16, md: 10, lg: 10 }}>
          <Grid container spacing={2}>
            <Grid size={16}>
              <Card variant="outlined">{EnvironmentProtectionStatus}</Card>
            </Grid>
            <Grid size={16}>
              <Card variant="outlined">{ProtectionTrends}</Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 16, md: 6, lg: 6 }}>
          <Card variant="outlined">{NeedsAttention}</Card>
        </Grid>
      </Grid>
    </Box>
  );
}
