import { Card, CardHeader, CardContent, Typography } from "@mui/material";

export default function PlatformAssuranceWidget({ data }) {
  return (
    <Card variant="outlined">
      <CardHeader title="Platform Assurance"></CardHeader>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
}
