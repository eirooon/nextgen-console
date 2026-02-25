import CardWidget from "../../../../components/CardWidget";
import SharedDonutChart from "../SharedDonutChart";

const DEFAULT_COLORS = {
  deployed: "#00C853",
  deploying: "#2979FF",
  failed: "#FF1744",
  disabled: "#78909C",
};

export default function PlanStatusWidget({
  data,
  colors = DEFAULT_COLORS,
  title,
  description,
}) {
  const total = Object.values(data || {}).reduce(
    (acc, val) => acc + (val || 0),
    0,
  );
  const deployedRate =
    total > 0 ? Math.round(((data?.deployed ?? 0) / total) * 100) : 0;

  const chartData = [
    {
      id: "deployed",
      label: `Deployed (${data?.deployed ?? 0})`,
      value: data?.deployed ?? 0,
      color: colors.deployed,
    },
    {
      id: "deploying",
      label: `Deploying (${data?.deploying ?? 0})`,
      value: data?.deploying ?? 0,
      color: colors.deploying,
    },
    {
      id: "failed",
      label: `Failed (${data?.failed ?? 0})`,
      value: data?.failed ?? 0,
      color: colors.failed,
    },
    {
      id: "disabled",
      label: `Disabled (${data?.disabled ?? 0})`,
      value: data?.disabled ?? 0,
      color: colors.disabled,
    },
  ].filter((item) => item.value > 0);

  return (
    <CardWidget title={title} description={description}>
      <SharedDonutChart
        data={chartData}
        centerLabel="Deployed Rate"
        centerValue={`${deployedRate}%`}
        centerValueColor={colors.deployed}
        centerSubtext="Successful Deployment"
      />
    </CardWidget>
  );
}
