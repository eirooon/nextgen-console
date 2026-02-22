import { Box, Grid } from "@mui/material";
import SourceProtectionStatusWidget from "./components/widgets/SourceProtectionStatusWidget";
import RPOComplianceWidget from "./components/widgets/RPOComplianceWidget";
import AIAnomalyDetectionJobsSummaryWidget from "./components/widgets/AIAnomalyDetectionJobsSummaryWidget";
import JobHealthStatusWidget from "./components/widgets/JobHealthStatusWidget";
import PlanStatusWidget from "./components/widgets/PlanStatusWidget";
import RecentJobsWidget from "./components/widgets/RecentJobsWidget";

export default function DashboardLayout() {
  const sourceProtectionData = {
    success: 30,
    failed: 10,
    cancelled: 23,
    noPlan: 4,
    missed: 10,
  };
  const rpoComplianceData = {
    compliant: 60,
    notCompliant: 47,
    approvedExceptions: 23,
  };
  const anomalyStatusData = [
    {
      label: "Anomaly Detected",
      value: 8,
      color: "#b71c1c",
      bgColor: "#fff1f2",
    },
    { label: "Clean", value: 48, color: "#1b5e20", bgColor: "#f0fdf4" },
    { label: "Scan Failed", value: 2, color: "#e65100", bgColor: "#fff7ed" },
    { label: "In Progress", value: 20, color: "#0d47a1", bgColor: "#eff6ff" },
  ];
  const jobHealthData = {
    success: 30,
    failed: 10,
    missed: 10,
    warning: 23,
  };
  const planStatusData = {
    deployed: 76,
    deploying: 30,
    failed: 62,
    disabled: 20,
  };

  const recentJobsData = [
    {
      id: 1,
      jobName: "Sample Job Name A",
      jobType: "Incremental Backup",
      time: "15 minutes ago",
      progressValue: 25,
    },
    {
      id: 2,
      jobName: "Sample Job Name B",
      jobType: "Incremental Backup",
      time: "46 minutes ago",
      progressValue: 76,
    },
    {
      id: 3,
      jobName: "Sample Job Name C",
      jobType: "Incremental Backup",
      time: "1 hour ago",
      progressValue: 25,
    },
    {
      id: 4,
      jobName: "Sample Job Name D",
      jobType: "Incremental Backup",
      time: "8 hours ago",
      progressValue: 76,
    },
    {
      id: 5,
      jobName: "Sample Job Name E",
      jobType: "Incremental Backup",
      time: "3 days ago",
      progressValue: 76,
    },
    {
      id: 6,
      jobName: "Sample Job Name F",
      jobType: "Incremental Backup",
      time: "7 days ago",
      progressValue: 76,
    },
  ];
  return (
    <Grid
      container
      spacing={2}
      columns={12}
      sx={{
        // maxWidth: { l: "100%", xl: "90%" },
        m: { xl: "auto" },
        p: { xs: 2, md: 3 },
      }}
    >
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
        <SourceProtectionStatusWidget
          title="Source Protection Status"
          description="Overview of the last backup status for all sources."
          data={sourceProtectionData}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
        <RPOComplianceWidget
          title="Recovery Point Objective (RPO) Compliance"
          description="Shows sources with a successful backup in the last 3 days."
          data={rpoComplianceData}
        />
      </Grid>
      <Grid size={12}>
        <AIAnomalyDetectionJobsSummaryWidget
          title="AI Anomaly Detection Jobs Summary"
          description="Summary of AI scan job outcomes."
          data={anomalyStatusData}
          onViewAll={() => console.log("Navigating...")}
          onLinkClick={() => console.log("Navigating...")}
          onTimeRangeChange={(e) =>
            console.log("Time range changed:", e.target.value)
          }
          linkText="View all AI anomaly detection jobs"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
        <JobHealthStatusWidget
          title="Job Health Status"
          description="Overview of job success rates in the last 24 hours."
          data={jobHealthData}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
        <PlanStatusWidget
          title="Plan Status"
          description="Overview of protection plan deployment states."
          data={planStatusData}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
        <RecentJobsWidget
          title="Recent Jobs"
          description="List of all recent jobs."
          data={recentJobsData}
        />
      </Grid>
    </Grid>
  );
}
