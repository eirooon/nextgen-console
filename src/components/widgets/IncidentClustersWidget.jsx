import { Card, CardHeader, CardContent, Typography } from "@mui/material";

export default function IncidentClustersWidget({ data }) {
  return (
    <Card variant="outlined">
      <CardHeader title="Incident Clusters"></CardHeader>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
}
