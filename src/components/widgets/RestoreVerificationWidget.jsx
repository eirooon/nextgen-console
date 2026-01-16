import { Card, CardHeader, CardContent, Typography } from "@mui/material";

export default function RestoreVerificationWidget({ data }) {
  return (
    <Card variant="outlined">
      <CardHeader title="Restore Verification"></CardHeader>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
}
