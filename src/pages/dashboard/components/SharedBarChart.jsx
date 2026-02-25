import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

export default function SharedBarChart({
  xLabels,
  series,
  height,
  yAxisLabel,
  showLegend,
  valueFormatter,
  tooltipValueFormatter,
  margin,
  sx,
}) {
  const finalX = xLabels?.length ? xLabels : DEFAULT_MONTHS;

  const isFn = (v) => typeof v === "function";

  const normalizedSeries = (series || []).map((s) => {
    const vf = isFn(s.valueFormatter)
      ? s.valueFormatter
      : isFn(valueFormatter)
        ? valueFormatter
        : undefined;

    const next = {
      ...s,
      data: normalizeToLength(s.data, finalX.length),
    };

    // Only attach if it's a function (prevents crash in tooltip)
    if (vf) next.valueFormatter = vf;

    return next;
  });

  const safeTooltipFormatter =
    tooltipValueFormatter ||
    ((v) => {
      if (typeof valueFormatter === "function") return valueFormatter(v);
      if (typeof v === "number") return `${v}`;
      return `${v ?? ""}`;
    });

  return (
    <Box sx={{ width: "100%", ...sx }}>
      <BarChart
        height={height}
        margin={margin}
        xAxis={[
          {
            id: "x",
            data: finalX,
            scaleType: "band",
          },
        ]}
        yAxis={[
          {
            label: yAxisLabel || undefined,
          },
        ]}
        series={normalizedSeries}
        slotProps={{
          tooltip: {
            trigger: "item",
            valueFormatter: safeTooltipFormatter,
          },
        }}
        hideLegend={!showLegend}
      />
    </Box>
  );
}

const DEFAULT_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function normalizeToLength(arr, len) {
  const a = Array.isArray(arr) ? arr.slice(0, len) : [];
  while (a.length < len) a.push(null);
  return a;
}

SharedBarChart.propTypes = {
  xLabels: PropTypes.arrayOf(PropTypes.string),
  series: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.number),
      color: PropTypes.string,
      valueFormatter: PropTypes.func,
    }),
  ).isRequired,
  height: PropTypes.number,
  yAxisLabel: PropTypes.string,
  showLegend: PropTypes.bool,
  valueFormatter: PropTypes.func,
  tooltipValueFormatter: PropTypes.func,
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }),
  sx: PropTypes.object,
};

SharedBarChart.defaultProps = {
  xLabels: DEFAULT_MONTHS,
  height: 300,
  yAxisLabel: "",
  showLegend: false,
  valueFormatter: undefined,
  tooltipValueFormatter: undefined,
  margin: { top: 10, right: 10, bottom: 40, left: 40 },
  sx: {},
};
