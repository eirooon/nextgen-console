import CardWidget from "../../../../components/CardWidget";
import { green, red } from "@mui/material/colors";
import { Card, Typography, Box, Stack, Grid, Button } from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
export default function SecurityCoverageWidget({ title, description, data }) {
  const metrics = [
    {
      label: "Immutability Coverage",
      value: data?.security ?? 92,
      isPositive: false,
      trend: "20%",
      subtext: "5 gaps found",
    },
    {
      label: "MFA Coverage",
      value: data?.security ?? 85,
      isPositive: false,
      trend: "20%",
      subtext: "2 admins missing MFA",
    },
  ];
  return (
    <CardWidget title={title} description={description}>
      <Grid container columns={12} spacing={3}>
        {metrics.map((metric, index) => (
          <Grid size={{ xs: 12, md: 12, lg: 6, xl: 6 }} spacing={3}>
            <Card
              variant="outlined"
              key={index}
              sx={{ borderRadius: 2, p: 3, width: "100%" }}
            >
              <Stack direction="column" spacing={1}>
                <Box>
                  <Typography variant="body2" fontWeight="600">
                    {metric.label}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.7rem" }}>
                    {metric.sublabel}
                  </Typography>
                </Box>
                <Stack direction="row" spacing={1}>
                  <Typography variant="h4" fontWeight="800">
                    {metric.value}%
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    {metric.trend !== "Stable" &&
                      (metric.isPositive ? (
                        <ArrowUpward sx={{ fontSize: 14, color: green[600] }} />
                      ) : (
                        <ArrowDownward sx={{ fontSize: 14, color: red[600] }} />
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
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" color="secondary">
            Fix Gaps
          </Button>
          <Button variant="outlined" color="secondary">
            Require MFA
          </Button>
          <Button variant="outlined" color="secondary">
            Verify Last Known-good
          </Button>
        </Stack>
      </Grid>
    </CardWidget>
  );
}
