import CardWidget from "../../../../components/CardWidget";
import DonutChart from "../DonutChart";

const DEFAULT_COLORS = {
  compliant: "#00C853",
  notCompliant: "#FF1744",
  approvedExceptions: "#78909C",
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
    {
      id: "approvedExceptions",
      label: `Approved Exceptions (${data?.approvedExceptions ?? 0})`,
      value: data?.approvedExceptions ?? 0,
      color: colors.approvedExceptions,
    },
  ].filter((item) => item.value > 0);

  return (
    <CardWidget title={title} description={description}>
      <DonutChart
        data={chartData}
        centerValue={`${complianceRate}%`}
        centerValueColor={colors.compliant}
        centerSubtext="compliant within 3 days"
      />
    </CardWidget>
  );
}
