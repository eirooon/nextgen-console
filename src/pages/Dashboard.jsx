import { Box, Grid, Typography } from "@mui/material";
import TodaysRiskSummaryWidget from "../components/widgets/TodaysRiskSummaryWidget";
import RestoreVerificationWidget from "../components/widgets/RestoreVerificationWidget";
import PriorityQueueWidget from "../components/widgets/PriorityQueueWidget";
import CapacityWatchWidget from "../components/widgets/CapacityWatchWidget";
import SecurityCoverageWidget from "../components/widgets/SecurityCoverageWidget";
import LiveOperationsAndAuditWidget from "../components/widgets/LiveOperationsAndAuditWidget";
import JobHealthTimelineWidget from "../components/widgets/JobHealthTimelineWidget";
import IncidentClustersWidget from "../components/widgets/IncidentClustersWidget";

export default function Dashboard({ data }) {
  const passedData = data + "Content displayed here.";
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2} columns={16}>
        <Typography sx={{ fontSize: 14 }}>
          Descriptiion about this dashboard.
        </Typography>
        <Grid size={16}>
          <TodaysRiskSummaryWidget data={TodaysRiskSummaryWidget} />
        </Grid>
        <Grid size={{ xs: 16, md: 8, lg: 8 }}>
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
              <PriorityQueueWidget data={"Content displayed here."} />
            </Grid>
            <Grid size={16}>
              <SecurityCoverageWidget data={"Content displayed here."} />
            </Grid>
            <Grid size={16}>
              <JobHealthTimelineWidget data={"Content displayed here."} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
