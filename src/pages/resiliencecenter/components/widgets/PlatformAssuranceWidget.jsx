import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Stack,
  LinearProgress,
  Grid,
  Button,
} from "@mui/material";
import { green, red, blue } from "@mui/material/colors";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function PlatformAssuranceWidget({ data }) {
  // Data derived from dashboard design
  const metrics = [
    {
      label: "Security Controls",
      value: data?.security ?? 92,
      trend: "+2%",
      isPositive: true,
      color: blue[600],
      subtext: "Immutability, MFA, least privilege",
    },
    {
      label: "Recovery Health",
      value: data?.recovery ?? 100,
      trend: "Stable",
      isPositive: true,
      color: green[600],
      subtext: "Restore verification, Integrity checks",
    },
    {
      label: "Protection Coverage",
      value: data?.coverage ?? 89,
      trend: "-4%",
      isPositive: false,
      color: red[600],
      subtext: "Workloads meeting policy",
    },
    {
      label: "Immutable Coverage",
      value: data?.immutable ?? 93,
      trend: "Stable",
      isPositive: true,
      color: green[400],
      subtext: "Protected restore points",
    },
  ];

  return (
    <Card variant="outlined">
      <CardHeader
        title={
          <Typography variant="h6" fontWeight="bold">
            Platform Assurance
          </Typography>
        }
        subheader="Coverage and controls summary: recovery health, protection, and immutability."
      />
      <CardContent>
        <Grid container columns={12} spacing={3}>
          {metrics.map((metric, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 3, xl: 6 }} spacing={3}>
              <Card
                variant="outlined"
                key={index}
                sx={{ borderRadius: 2, p: 3, width: "100%" }}
              >
                <Stack direction="column" spacing={2}>
                  <Box>
                    <Typography variant="body2" fontWeight="600">
                      {metric.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "0.7rem" }}
                    >
                      {metric.subtext}
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={2}>
                    <Typography variant="h4" fontWeight="800">
                      {metric.value}%
                    </Typography>
                    <Stack
                      direction="columns"
                      alignItems="center"
                      spacing={0.5}
                    >
                      {metric.trend !== "Stable" &&
                        (metric.isPositive ? (
                          <ArrowUpwardIcon
                            sx={{ fontSize: 14, color: green[600] }}
                          />
                        ) : (
                          <ArrowDownwardIcon
                            sx={{ fontSize: 14, color: red[600] }}
                          />
                        ))}
                      <Typography
                        variant="caption"
                        fontWeight="500"
                        color={
                          metric.trend === "Stable"
                            ? green[800]
                            : metric.isPositive
                              ? green[600]
                              : red[600]
                        }
                      >
                        {metric.trend}{" "}
                        {metric.trend !== "Stable" && "last 7 days"}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>

                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  sx={{ mt: 2 }}
                >
                  Take Action
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
