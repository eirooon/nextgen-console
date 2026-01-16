import { Card, CardHeader, CardContent, Typography } from "@mui/material";

export default function JobHealthTimelineWidget({ data }) {
  return (
    <Card variant="outlined">
      <CardHeader title="Job Health Timeline"></CardHeader>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
}
