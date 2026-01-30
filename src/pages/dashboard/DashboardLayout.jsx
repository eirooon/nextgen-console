import { Box, Grid, Typography } from "@mui/material";
import TodaysRiskSummaryWidget from "./components/widgets/TodaysRiskSummaryWidget";
import RestoreVerificationWidget from "./components/widgets/RestoreVerificationWidget";
import PriorityQueueWidget from "./components/widgets/PriorityQueueWidget";
import CapacityWatchWidget from "./components/widgets/CapacityWatchWidget";
import SecurityCoverageWidget from "./components/widgets/SecurityCoverageWidget";
import LiveOperationsAndAuditWidget from "./components/widgets/LiveOperationsAndAuditWidget";
import JobHealthTimelineWidget from "./components/widgets/JobHealthTimelineWidget";
import IncidentClustersWidget from "./components/widgets/IncidentClustersWidget";

export default function DashboardLayout() {
  const passedData = "Content displayed here.";
  const priorityQueueData = [
    {
      id: 1,
      title: "Payroll DB in Site East",
      message: "Missed RPO by 2 hours",
      severity: "critical",
    },
    {
      id: 2,
      title: "Repository Capacity in Site West",
      message:
        "Arcserve Cloud Cyber Resilient Storage is 92% full with just 6 days remaining.",
      severity: "critical",
    },
    {
      id: 3,
      title: "Security in Site West",
      message: "MFA is missing for 2 admins.",
      severity: "critical",
    },
    {
      id: 4,
      title: "Security in Site West",
      message: "A review of user access is required for five users.",
      severity: "warning",
    },
    {
      id: 5,
      title: "Security in Site West",
      message: "Outdated software detected in 10 systems.",
      severity: "warning",
    },
    {
      id: 6,
      title: "Backups in Site East",
      message: "3 jobs are stuck in retry state.",
      severity: "info",
    },
  ];
  const capacityWatchData = [
    {
      id: "s1",
      storage: "Arcserve Cloud Storage",
      usedPct: 92,
      daysToFull: 6,
      weeklyGrowth: "+ 1.2 GB/week",
      health: 85,
    },
    {
      id: "s2",
      storage: "Arcserve Cloud Cyber Resilient Storage",
      usedPct: 76,
      daysToFull: 3,
      weeklyGrowth: "+ 1.2 GB/week",
      health: 70,
    },
    {
      id: "s3",
      storage: "Another Storage",
      usedPct: 76,
      daysToFull: 2,
      weeklyGrowth: "+ 300 GB/week",
      health: 70,
    },
  ];
  return (
    <Box
      sx={{
        maxWidth: { xl: "95%", l: "100%" },
        m: { xl: "auto" },
        p: { xs: 2, md: 3 },
      }}
    >
      <Grid container spacing={2} columns={12}>
        <Typography sx={{ fontSize: 14 }}>
          See what needs attention today—active issues, job health, capacity,
          and security gaps in one place.
        </Typography>
        <Grid size={12}>
          <TodaysRiskSummaryWidget data={passedData} />
        </Grid>
        <Grid size={12}>
          <PriorityQueueWidget
            title="Priority Queue"
            description="Action list of issues to review, assign, or fix first."
            data={priorityQueueData}
            pageSize={5}
            onReviewItem={(item) => console.log("Review:", item)}
          />
        </Grid>
        <Grid size={12}>
          <CapacityWatchWidget
            title="Capacity Watch"
            description="Storage usage, growth, and time-to-full alerts."
            data={capacityWatchData}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 6, xl: 6 }}>
          <RestoreVerificationWidget
            title="Restore Verification"
            description="Restore test results—pass rate and failed verifications to investigate."
            data={passedData}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 6, xl: 6 }}>
          <SecurityCoverageWidget
            title="Security Coverage"
            description="Security gaps and coverage (e.g., immutability, MFA) with quick actions."
            data={passedData}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 6, xl: 6 }}>
          <LiveOperationsAndAuditWidget
            title="Live Operation & Audit"
            description="Real-time activity: throughput, job progress, and recent admin changes."
            data={passedData}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 6, xl: 6 }}>
          <JobHealthTimelineWidget
            title="Job Health Timeline"
            description="Success vs failed jobs across time windows to spot trends."
            data={passedData}
          />
        </Grid>
        <Grid size={12}>
          <IncidentClustersWidget
            title="Incident Clusters"
            description="Grouped related issues to reduce noise and speed triage."
            data={passedData}
          />
        </Grid>
        {/* <Grid size={{ xs: 16, md: 8, lg: 8 }}>
          <Grid container spacing={2}>
            <Grid size={16}>
              <RestoreVerificationWidget data={passedData} />
            </Grid>
            <Grid size={16}>
              <CapacityWatchWidget data={passedData} />
            </Grid>
            <Grid size={16}>
              <LiveOperationsAndAuditWidget data={passedData} />
            </Grid>
            <Grid size={16}>
              <IncidentClustersWidget data={passedData} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 16, md: 8, lg: 8 }}>
          <Grid container spacing={2}>
            <Grid size={16}>
              <PriorityQueueWidget
                items={priorityQueueItems}
                pageSize={5}
                onReviewItem={(item) => console.log("Review:", item)}
              />
            </Grid>
            <Grid size={16}>
              <SecurityCoverageWidget data={"Content displayed here."} />
            </Grid>
            <Grid size={16}>
              <JobHealthTimelineWidget data={"Content displayed here."} />
            </Grid>
          </Grid>
        </Grid> */}
      </Grid>
    </Box>
  );
}
