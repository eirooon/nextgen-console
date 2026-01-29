import { Card, CardHeader, CardContent, Typography, Box } from "@mui/material";
import { RadarChart } from "@mui/x-charts/RadarChart";
import { green, grey } from "@mui/material/colors";

export default function PlatformVitalityWidget({ data }) {
  // Data formatted for MUI RadarChart
  const radarData = [
    data?.integrations ?? 80, // Integration Health
    data?.agents ?? 62, // Agent Compliance
    data?.storage ?? 85, // Storage Integrity
  ];

  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardHeader
        title={
          <Typography variant="h6" fontWeight="bold">
            Platform Vitality and Compliance
          </Typography>
        }
        subheader="Holistic health across core pillars"
      />
      <CardContent>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <RadarChart
            series={[
              {
                data: radarData,
                color: green[600],
              },
            ]}
            radar={{
              metrics: [
                "Integration Health",
                "Agent Compliance",
                "Storage Integrity",
              ],
              max: 120,
            }}
            height={400}
            // HOVER SETTINGS
            slotProps={{
              tooltip: {
                // 'axis' trigger shows the specific metric value on hover
                trigger: "axis",
              },
            }}
            // Customizing the grid appearance
            sx={{
              "& .MuiRadarGrid-root": {
                stroke: grey[300],
              },
            }}
            shape="circular"
          />
        </Box>
      </CardContent>
    </Card>
  );
}
