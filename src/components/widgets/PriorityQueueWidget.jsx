import { Card, CardHeader, CardContent, Typography } from "@mui/material";

export default function PriorityQueueWidget({ data }) {
  return (
    <Card variant="outlined">
      <CardHeader title="Priority Queue"></CardHeader>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
}
