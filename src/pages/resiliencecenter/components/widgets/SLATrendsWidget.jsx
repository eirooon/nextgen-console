import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { green, red } from "@mui/material/colors";

export default function SLATrendsWidget({ data }) {
  // data expected: Array of { date: Date, compliant: number, breach: number }
  const chartData = data?.length
    ? data
    : [
        { date: new Date(2025, 10, 1), compliant: 55, breach: 2 },
        { date: new Date(2025, 10, 5), compliant: 60, breach: 5 },
        { date: new Date(2025, 10, 10), compliant: 40, breach: 15 }, // Spot the dip
        { date: new Date(2025, 10, 15), compliant: 65, breach: 1 },
        { date: new Date(2025, 10, 20), compliant: 58, breach: 2 },
      ];

  return (
    <Card variant="outlined">
      <CardHeader
        title={
          <Typography variant="h6" fontWeight="bold">
            SLA Trends
          </Typography>
        }
        subheader="Daily compliance vs. breach volume"
      />
      <CardContent>
        <Box sx={{ width: "100%", height: 324 }}>
          <LineChart
            dataset={chartData}
            xAxis={[
              {
                dataKey: "date",
                scaleType: "utc",
                valueFormatter: (date) =>
                  date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  }),
              },
            ]}
            series={[
              {
                dataKey: "compliant",
                label: "Compliant",
                area: true,
                stack: "total",
                color: green[600],
                showMark: false,
              },
              {
                dataKey: "breach",
                label: "SLA Breach",
                area: true,
                stack: "total",
                color: red[600],
                showMark: (params) => params.value > 10, // Highlight major spikes
              },
            ]}
            height={324}
            margin={{ top: 10, bottom: 10, left: 5, right: 5 }}
            slotProps={{
              legend: {
                direction: "row",
                position: { vertical: "bottom", horizontal: "middle" },
                padding: 0,
              },
            }}
          />
        </Box>

        <Stack direction="row" spacing={3} sx={{ mt: 6 }}>
          <Box
            textAlign="center"
            sx={{ display: "flex", alignItems: "center" }}
            gap={1}
          >
            <Typography variant="body1" fontWeight="bold">
              94.2%
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Avg. Compliance
            </Typography>
          </Box>
          <Box
            textAlign="center"
            sx={{ display: "flex", alignItems: "center" }}
            gap={1}
          >
            <Typography variant="h6" fontWeight="bold" color="error.main">
              12
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Major Spikes
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
