import CardWidget from "../../../../components/CardWidget";
import SharedDonutChart from "../SharedDonutChart";

const DEFAULT_COLORS = {
  success: "#00C853",
  failed: "#FF1744",
  warning: "#FFAB00",
  missed: "#78909C",
};

export default function JobHealthStatusWidget({
  data,
  colors = DEFAULT_COLORS,
  title,
  description,
}) {
  const total = Object.values(data || {}).reduce(
    (acc, val) => acc + (val || 0),
    0,
  );
  const successRate =
    total > 0 ? Math.round(((data?.success ?? 0) / total) * 100) : 0;

  const chartData = [
    {
      id: "success",
      label: `Success (${data?.success ?? 0})`,
      value: data?.success ?? 0,
      color: colors.success,
    },
    {
      id: "failed",
      label: `Failed (${data?.failed ?? 0})`,
      value: data?.failed ?? 0,
      color: colors.failed,
    },
    {
      id: "missed",
      label: `Missed (${data?.missed ?? 0})`,
      value: data?.missed ?? 0,
      color: colors.missed,
    },
    {
      id: "warning",
      label: `Warning (${data?.warning ?? 0})`,
      value: data?.warning ?? 0,
      color: colors.warning,
    },
  ].filter((item) => item.value > 0);

  return (
    <CardWidget title={title} description={description}>
      <SharedDonutChart
        data={chartData}
        centerLabel="Success Rate"
        centerValue={`${successRate}%`}
        centerValueColor={colors.success}
        centerSubtext="Successful Jobs"
      />
    </CardWidget>
  );
}
