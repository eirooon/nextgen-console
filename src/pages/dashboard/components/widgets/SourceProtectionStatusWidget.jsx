import CardWidget from "../../../../components/CardWidget";
import DonutChart from "../DonutChart";

const DEFAULT_COLORS = {
  success: "#00C853",
  failed: "#FF1744",
  missed: "#FFAB00",
  cancelled: "#6200EA",
  noPlan: "#78909C",
};

export default function SourceProtectionStatusWidget({
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
      id: "cancelled",
      label: `Cancelled (${data?.cancelled ?? 0})`,
      value: data?.cancelled ?? 0,
      color: colors.cancelled,
    },
    {
      id: "noPlan",
      label: `No Plan (${data?.noPlan ?? 0})`,
      value: data?.noPlan ?? 0,
      color: colors.noPlan,
    },
  ].filter((item) => item.value > 0);

  return (
    <CardWidget title={title} description={description}>
      <DonutChart
        data={chartData}
        centerValue={`${successRate}%`}
        centerValueColor={colors.success}
        centerSubtext="last backup successfully"
      />
    </CardWidget>
  );
}
