import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { green, red, orange } from "@mui/material/colors";

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

export default function OverallProtectionStatusWidget({ data }) {
  return (
    <Card variant="outlined">
      <CardHeader title="Overall Protection Status"></CardHeader>
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={4}>
            <StatTile
              label="PROTECTED"
              value={data.protected}
              color={green[700]}
            />
          </Grid>
          <Grid size={4}>
            <StatTile label="AT-RISK" value={data.atrisk} color={red[700]} />
          </Grid>
          <Grid size={4}>
            <StatTile
              label="UNPROTECTED"
              value={data.unprotected}
              color={orange[700]}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
