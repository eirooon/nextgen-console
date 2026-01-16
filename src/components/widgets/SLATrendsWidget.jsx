import { Card, CardHeader, CardContent, Typography } from "@mui/material";

export default function SLATrendsWidget({ data }) {
  return (
    <Card variant="outlined">
      <CardHeader title="SLA Trends"></CardHeader>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
}
