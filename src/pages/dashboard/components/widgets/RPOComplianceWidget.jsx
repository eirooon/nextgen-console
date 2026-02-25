import CardWidget from "../../../../components/CardWidget";
import SharedDonutChart from "../SharedDonutChart";

const DEFAULT_COLORS = {
  compliant: "#00C853",
  notCompliant: "#FF1744",
};

export default function RPOComplianceWidget({
  data,
  colors = DEFAULT_COLORS,
  title,
  description,
}) {
  const total = Object.values(data || {}).reduce(
    (acc, val) => acc + (val || 0),
    0,
  );
  const complianceRate =
    total > 0 ? Math.round(((data?.compliant ?? 0) / total) * 100) : 0;

  const chartData = [
    {
      id: "compliant",
      label: `Compliant (${data?.compliant ?? 0})`,
      value: data?.compliant ?? 0,
      color: colors.compliant,
    },
    {
      id: "notCompliant",
      label: `Not Compliant (${data?.notCompliant ?? 0})`,
      value: data?.notCompliant ?? 0,
      color: colors.notCompliant,
    },
  ].filter((item) => item.value > 0);

  return (
    <CardWidget title={title} description={description}>
      <SharedDonutChart
        data={chartData}
        centerValue={`${complianceRate}%`}
        centerValueColor={colors.compliant}
        centerSubtext="Compliant within 3 days"
      />
    </CardWidget>
  );
}
