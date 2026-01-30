import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Stack,
  Grid,
  Button,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

export default function TodaysRiskSummaryWidget({ data }) {
  // Data derived from dashboard design
  const metrics = [
    {
      label: "RPO at Risk (next 24 hours)",
      value: data?.security ?? 11,
      isPositive: false,
      trend: "20%",
      // subtext: "workloads likely to miss RPO",
      subtext: "6 workloads (RPO = 12h, last backup > 18h)",
    },
    {
      label: "Backup Failures (last 24 hours)",
      value: data?.security ?? 4,
      isPositive: false,
      trend: "20%",
      // subtext: "failed jobs",
      subtext: "Top cause: Repository unreachable",
    },
    {
      label: "SLA Breaches (last 24 hours)",
      value: data?.security ?? 4,
      isPositive: false,
      trend: "20%",
      // subtext: "missed SLA events",
      subtext: "2 critical, 3 warning",
    },
    {
      label: "Capacity Days Remaining (Critical)",
      value: data?.security ?? 23,
      isPositive: false,
      trend: "20%",
      // subtext: "repos below threshold (7 days)",
      subtext: "Nearest full: Wasabi-1 (4.8 days)",
    },
  ];

  return (
    <Card variant="outlined">
      <CardHeader
        title={
          <Typography variant="h6" fontWeight="bold">
            Today's Risk Summary
          </Typography>
        }
        subheader="Snapshot of today’s highest-impact risks and active breaches."
        action={
          <Button variant="text" color="secondary">
            View all details
          </Button>
        }
      />
      <CardContent>
        <Grid container columns={12} spacing={3}>
          {metrics.map((metric, index) => (
            <Grid size={{ xs: 12, md: 12, lg: 3, xl: 3 }} spacing={3}>
              <Card
                variant="outlined"
                key={index}
                sx={{ borderRadius: 2, p: 3, width: "100%" }}
              >
                <Stack direction="column" spacing={1}>
                  <Typography variant="body2" fontWeight="600">
                    {metric.label}
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Typography variant="h4" fontWeight="800">
                      {metric.value}%
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      {metric.trend !== "Stable" &&
                        (metric.isPositive ? (
                          <ArrowDownward
                            sx={{ fontSize: 14, color: green[600] }}
                          />
                        ) : (
                          <ArrowUpward sx={{ fontSize: 14, color: red[600] }} />
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
                  <Typography
                    variant="caption"
                    fontWeight="500"
                    color="text.secondary"
                  >
                    {metric.subtext}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
