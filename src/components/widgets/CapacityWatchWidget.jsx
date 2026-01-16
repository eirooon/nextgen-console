import { Card, CardHeader, CardContent, Typography } from "@mui/material";

export default function CapacityWatchWidget({ data }) {
  return (
    <Card variant="outlined">
      <CardHeader title="Capacity Watch"></CardHeader>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
}
