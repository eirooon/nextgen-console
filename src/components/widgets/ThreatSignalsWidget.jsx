import { Card, CardHeader, CardContent, Typography } from "@mui/material";

export default function ThreatSignalsWidget({ data }) {
  return (
    <Card variant="outlined">
      <CardHeader title="Threat Signals"></CardHeader>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
}
