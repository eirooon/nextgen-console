import { Card, CardHeader, CardContent, Typography } from "@mui/material";

export default function RecoveryConfidenceWidget({ data }) {
  return (
    <Card variant="outlined">
      <CardHeader title="Recovery Confidence"></CardHeader>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
}
