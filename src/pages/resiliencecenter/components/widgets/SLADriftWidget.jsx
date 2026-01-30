import * as React from "react";
import { Card, Box, Typography, CardHeader, Button } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

function toMinutes(value) {
  if (value == null) return 0;
  if (typeof value === "number") return value;

  const s = String(value).toLowerCase().trim();
  const hourMatch = s.match(/(\d+)\s*(h|hr|hrs|hour|hours)\b/);
  const minMatch = s.match(/(\d+)\s*(m|min|mins|minute|minutes)\b/);

  const hours = hourMatch ? parseInt(hourMatch[1], 10) : 0;
  const mins = minMatch ? parseInt(minMatch[1], 10) : 0;

  if (!hourMatch && !minMatch) {
    const n = parseFloat(s);
    return Number.isFinite(n) ? n : 0;
  }

  return hours * 60 + mins;
}

export default function SLADriftWidget({ data }) {
  const rows = React.useMemo(() => {
    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.rows)) return data.rows;
    if (Array.isArray(data?.items)) return data.items;
    if (Array.isArray(data?.results)) return data.results;
    return [];
  }, [data]);

  const dataset = React.useMemo(() => {
    const mapped = rows.map((r) => ({
      source: r.source ?? r.Source ?? r.name ?? "Unknown",
      minutesPastRpo: toMinutes(
        r.timePastRpo ?? r.time_past_rpo ?? r.TimePastRpo
      ),
      primaryCause: r.primaryCause ?? r.PrimaryCause ?? r.primary_cause ?? "—",
    }));

    mapped.sort((a, b) => b.minutesPastRpo - a.minutesPastRpo);
    return mapped;
  }, [rows]);

  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardHeader
        title={
          <Typography variant="h6" fontWeight="bold">
            SLA Drift: RPO Risks
          </Typography>
        }
        subheader="Workloads at risk of missing RPO targets and the top causes."
      />

      {dataset.length === 0 ? (
        <Typography sx={{ fontSize: 12, color: "rgba(0,0,0,0.55)", mt: 1 }}>
          No data available.
        </Typography>
      ) : (
        <Box sx={{ height: 300 }}>
          <BarChart
            dataset={dataset}
            layout="horizontal"
            yAxis={[
              {
                scaleType: "band",
                dataKey: "source",
                width: 100,
              },
            ]}
            xAxis={[
              {
                label: "Minutes past RPO",
                min: 0,
              },
            ]}
            series={[
              {
                dataKey: "minutesPastRpo",
                label: "Minutes past RPO",
                // ✅ This controls the tooltip value line for the series
                valueFormatter: (v, context) => {
                  const row = dataset?.[context?.dataIndex];
                  const cause = row?.primaryCause ?? "—";
                  return `${v} min • ${cause}`;
                },
              },
            ]}
            margin={{ left: 10, right: 40, top: 10, bottom: 0 }}
          />
        </Box>
      )}
      <Box sx={{ display: "flex", mt: 0 }} gap={1} p={2}>
        <Button size="small" variant="contained">
          Fix Top Issues
        </Button>
        <Button size="small" variant="outlined" color="secondary">
          See Full Report
        </Button>
      </Box>
    </Card>
  );
}
