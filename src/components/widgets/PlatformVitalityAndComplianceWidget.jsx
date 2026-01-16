import { Card, CardHeader, CardContent, Typography } from "@mui/material";

export default function PlatformVitalityAndComplianceWidget({ data }) {
  return (
    <Card variant="outlined">
      <CardHeader title="Platform Vitality & Compliance"></CardHeader>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
}
