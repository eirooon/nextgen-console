import { Card, CardHeader, CardContent, Typography } from "@mui/material";

export default function SecurityCoverageWidget({ data }) {
  return (
    <Card variant="outlined">
      <CardHeader title="Security Coverage"></CardHeader>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
}
