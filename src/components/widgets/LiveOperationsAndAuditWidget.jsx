import { Card, CardHeader, CardContent, Typography } from "@mui/material";

export default function LiveOperationsAndAuditWidget({ data }) {
  return (
    <Card variant="outlined">
      <CardHeader title="Live Operations & Audit"></CardHeader>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
}
