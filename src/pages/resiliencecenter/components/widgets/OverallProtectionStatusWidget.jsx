import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { green, red, orange } from "@mui/material/colors";
import { PieChart } from "@mui/x-charts/PieChart";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

/** Measure element size (for responsive chart width/height) */
function useMeasure() {
  const ref = React.useRef(null);
  const [rect, setRect] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    if (!ref.current) return;

    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setRect({ width, height });
    });

    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, rect];
}

export default function OverallProtectionStatusWidget({ data }) {
  const trendData =
    data?.trend && Array.isArray(data.trend)
      ? data.trend
      : [0, 0, 0, 0, 0, 0, 0];

  const protectedVal = data?.protected ?? 0;
  const atRiskVal = data?.atrisk ?? 0;
  const unprotectedVal = data?.unprotected ?? 0;

  const chartData = [
    { id: 0, value: protectedVal, label: "Protected", color: green[500] },
    { id: 1, value: atRiskVal, label: "At-Risk", color: red[500] },
    { id: 2, value: unprotectedVal, label: "Unprotected", color: orange[500] },
  ];

  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  // Measure left & right panels so charts can fill 100% of each column
  const [leftRef, leftRect] = useMeasure();
  const [rightRef, rightRect] = useMeasure();

  // Donut size: fit within left panel (square), with sane min/max
  const donutSize = Math.max(
    160,
    Math.min(
      240,
      Math.floor(Math.min(leftRect.width || 0, leftRect.height || 0))
    )
  );

  const outerRadius = Math.floor(donutSize * 0.46);
  const innerRadius = Math.floor(donutSize * 0.35);

  // Sparkline width: fill the right panel exactly (no “unused” right space)
  const sparkWidth = Math.max(1, Math.floor(rightRect.width || 1));

  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        minHeight: 340,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        title={
          <Typography variant="h6" fontWeight="bold">
            Overall Protection Status
          </Typography>
        }
        sx={{ pb: 0.5 }}
      />

      <CardContent
        sx={{
          pt: 1.5,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          // CardContent has its own padding; we keep it,
          // but remove any extra internal gutters from layout by not using Grid spacing.
          gap: 2,
        }}
      >
        {/* TOP AREA */}
        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            // This is the only “gap” between columns; no side paddings/gutters are introduced.
            gap: { xs: 2, md: 14 },
          }}
        >
          {/* LEFT COLUMN */}
          <Box
            ref={leftRef}
            sx={{
              flex: 1,
              minWidth: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // give it a stable height so donut can compute size (esp. on first render)
              minHeight: { xs: 220, md: 220 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: donutSize,
                height: donutSize,
              }}
            >
              <PieChart
                series={[
                  {
                    data: chartData,
                    innerRadius,
                    outerRadius,
                    paddingAngle: 2,
                    cornerRadius: 4,
                    arcLabel: null,
                    // Force the donut center to be exact
                    cx: donutSize / 2,
                    cy: donutSize / 2,
                  },
                ]}
                width={donutSize}
                height={donutSize}
                margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
              />

              {/* Always centered */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                  }}
                >
                  HEALTHY
                </Typography>
                <Typography
                  variant={upMd ? "h3" : "h4"}
                  sx={{
                    color: green[600],
                    fontWeight: 800,
                    lineHeight: 1,
                    mt: 0.5,
                  }}
                >
                  {protectedVal}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* RIGHT COLUMN */}
          <Box
            ref={rightRef}
            sx={{
              flex: 1,
              minWidth: 0,
              display: "flex",
              alignItems: "center",
              // Border divider only on md+
              borderLeft: { xs: "none", md: "1px solid" },
              borderColor: { md: "divider" },
              pl: { xs: 0, md: 3 },
              pt: { xs: 0, md: 0 },
            }}
          >
            <Stack spacing={3} sx={{ width: "100%" }}>
              <Box>
                <Typography
                  variant="subtitle2"
                  color="error"
                  fontWeight="bold"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      bgcolor: red[500],
                      borderRadius: "50%",
                    }}
                  />
                  {atRiskVal} CRITICAL ITEMS
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Need attention to meet recovery targets.
                </Typography>
              </Box>

              <Box sx={{ width: "100%" }}>
                <Typography
                  variant="caption"
                  fontWeight="bold"
                  color="text.secondary"
                >
                  7-DAY AT-RISK TREND
                </Typography>

                {/* Fill the column width exactly */}
                <Box sx={{ mt: 1, width: "100%" }}>
                  <SparkLineChart
                    data={trendData}
                    width={sparkWidth}
                    height={80}
                    colors={[red[400]]}
                    area
                  />
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }} gap={1} p={1}>
          <Button size="small" variant="contained">
            Review Critical Items
          </Button>
          <Button size="small" variant="outlined" color="secondary">
            Fix Top Issues
          </Button>
          <Button size="small" variant="outlined" color="secondary">
            More Actions
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
