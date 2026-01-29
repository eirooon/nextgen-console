import { Box, Divider, Grid, Typography } from "@mui/material";
import ArcGeniusInsightsWidget from "../../components/ArcGeniusInsightsWidgets.jsx";
import OverallProtectionStatusWidget from "./components/widgets/OverallProtectionStatusWidget.jsx";
import RecoveryConfidenceWidget from "./components/widgets/RecoveryConfidenceWidget.jsx";
import SLATrendsWidget from "./components/widgets/SLATrendsWidget.jsx";
import SLADriftWidget from "./components/widgets/SLADriftWidget.jsx";
import ThreatSignalsWidget from "./components/widgets/ThreatSignalsWidget.jsx";
import PlatformVitalityAndComplianceWidget from "./components/widgets/PlatformVitalityAndComplianceWidget.jsx";
import PlatformAssuranceWidget from "./components/widgets/PlatformAssuranceWidget.jsx";

import RecomendedObjectives from "./components/widgets/RecomendedObjectives.jsx";
import QuickActions from "./components/widgets/QuickActions.jsx";

export default function ResilienceCenterLayout() {
  const arcGeniusInsightsData =
    "Most issues today are caused by agent connectivity. Updating agents and restarting 1 service will restore fulls protection";
  const overallProtectionStatusData = {
    protected: 88,
    atrisk: 12,
    unprotected: 24,
    trend: [2, 5, 3, 8, 4, 6, 3],
  };
  const recoveryConfidenceData = {
    score: 93,
    trend: 12,
  };
  const slaDriftData = [
    {
      id: "1",
      source: "Admin-PC-01",
      policy: "Sample Policy A",
      lastSuccessful: "1 hour ago",
      timePastRpo: "42 minutes",
      primaryCause: "Repo full",
    },
    {
      id: "2",
      source: "Admin-PC-02",
      policy: "Sample Policy B",
      lastSuccessful: "1 hour ago",
      timePastRpo: "90 minutes",
      primaryCause: "Network issue",
    },
    {
      id: "3",
      source: "Admin-PC-03",
      policy: "Sample Policy C",
      lastSuccessful: "1 hour ago",
      timePastRpo: "120 minutes",
      primaryCause: "Network issue",
    },
    {
      id: "4",
      source: "Admin-PC-04",
      policy: "Sample Policy C",
      lastSuccessful: "1 hour ago",
      timePastRpo: "120 minutes",
      primaryCause: "Network issue",
    },
    {
      id: "5",
      source: "Admin-PC-05",
      policy: "Sample Policy C",
      lastSuccessful: "1 hour ago",
      timePastRpo: "120 minutes",
      primaryCause: "Network issue",
    },
  ];
  const slaTrendsData = [
    { date: new Date(2025, 10, 1), compliant: 55, breach: 2 },
    { date: new Date(2025, 10, 5), compliant: 60, breach: 5 },
    { date: new Date(2025, 10, 10), compliant: 40, breach: 15 }, // Spot the dip
    { date: new Date(2025, 10, 15), compliant: 65, breach: 1 },
    { date: new Date(2025, 10, 20), compliant: 58, breach: 2 },
  ];
  // const threatSignalData = [
  //   { detected: 356, clean: 360, compromised: 640, incidents: 0 },
  //   { detected: 356, clean: 360, compromised: 640, incidents: 0 },
  //   { detected: 356, clean: 360, compromised: 640, incidents: 0 },
  //   { detected: 356, clean: 360, compromised: 640, incidents: 0 },
  // ];
  return (
    <Box
      sx={{
        maxWidth: { xl: "95%", l: "100%" },
        m: { xl: "auto" },
        p: { xs: 2, md: 3 },
      }}
    >
      <Grid container spacing={3} columns={12}>
        <Typography sx={{ fontSize: 14 }}>
          Know what’s protected, what’s at risk, and what to fix next—based on
          proven recovery signals.
        </Typography>
        <Grid size={12}>
          <ArcGeniusInsightsWidget data={arcGeniusInsightsData} />
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 6, xl: 4 }}>
          <OverallProtectionStatusWidget data={overallProtectionStatusData} />
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 6, xl: 4 }}>
          <RecoveryConfidenceWidget data={recoveryConfidenceData} />
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 6, xl: 4 }}>
          <SLADriftWidget data={slaDriftData} />
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 6, xl: 6 }}>
          <PlatformVitalityAndComplianceWidget data={"ss"} />
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 12, xl: 6 }}>
          <SLATrendsWidget data={slaTrendsData} />
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 12, xl: 6 }}>
          <PlatformAssuranceWidget data={"Content displayed here."} />
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 12, xl: 6 }}>
          <ThreatSignalsWidget data={"Content displayed here."} />
        </Grid>
        <Grid size={12}>
          <RecomendedObjectives />
        </Grid>
        <Grid size={12}>
          <QuickActions />
        </Grid>
      </Grid>
    </Box>
  );
}
