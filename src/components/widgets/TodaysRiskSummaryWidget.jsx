import { Card, CardHeader, CardContent, Typography } from "@mui/material";

export default function TodaysRiskSummaryWidget({ data }) {
  return (
    <Card variant="outlined">
      <CardHeader title="Today's Risk Summary"></CardHeader>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
}
