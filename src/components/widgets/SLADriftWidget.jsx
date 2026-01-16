import { Card, CardHeader, CardContent, Typography } from "@mui/material";

export default function SLADriftWidget({ data }) {
  return (
    <Card variant="outlined">
      <CardHeader title="SLA Drift: (RPO Risks)"></CardHeader>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
}
