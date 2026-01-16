import { Box, Grid, Typography } from "@mui/material";
import ArcGeniusInsightsWidget from "../components/widgets/ArcGeniusInsightsWidgets.jsx";
import OverallProtectionStatusWidget from "../components/widgets/OverallProtectionStatusWidget.jsx";
import RecoveryConfidenceWidget from "../components/widgets/RecoveryConfidenceWidget.jsx";
import SLATrendsWidget from "../components/widgets/SLATrendsWidget.jsx";
import SLADriftWidget from "../components/widgets/SLADriftWidget.jsx";
import ThreatSignalsWidget from "../components/widgets/ThreatSignalsWidget.jsx";
import PlatformVitalityAndComplianceWidget from "../components/widgets/PlatformVitalityAndComplianceWidget.jsx";
import PlatformAssuranceWidget from "../components/widgets/PlatformAssuranceWidget.jsx";

export default function ResilienceCenter() {
  const arcGeniusInsightsData =
    "Most issues today are caused by agent connectivity. Updating agents and restarting 1 service will restore fulls protection";
  const overallProtectionStatusData = {
    protected: "91%",
    atrisk: "3%",
    unprotected: "6%",
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2} columns={16}>
        <Typography sx={{ fontSize: 14 }}>
          Know what’s protected, what’s at risk, and what to fix next—based on
          proven recovery signals.
        </Typography>
        <Grid size={16}>
          <ArcGeniusInsightsWidget data={arcGeniusInsightsData} />
        </Grid>
        <Grid size={{ xs: 16, md: 8, lg: 8 }}>
          <Grid container spacing={2}>
            <Grid size={16}>
              <OverallProtectionStatusWidget
                data={overallProtectionStatusData}
              />
            </Grid>
            <Grid size={16}>
              <SLADriftWidget data={"Content displayed here."} />
            </Grid>
            <Grid size={16}>
              <SLATrendsWidget data={"Content displayed here."} />
            </Grid>
            <Grid size={16}>
              <ThreatSignalsWidget data={"Content displayed here."} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 16, md: 8, lg: 8 }}>
          <Grid container spacing={2}>
            <Grid size={16}>
              <RecoveryConfidenceWidget data={"Content displayed here."} />
            </Grid>
            <Grid size={16}>
              <PlatformVitalityAndComplianceWidget
                data={"Content displayed here."}
              />
            </Grid>
            <Grid size={16}>
              <PlatformAssuranceWidget data={"Content displayed here."} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
