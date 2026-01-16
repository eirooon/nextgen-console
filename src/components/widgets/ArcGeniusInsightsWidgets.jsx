import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import { AutoAwesomeRounded } from "@mui/icons-material";

export default function ArcGeniusInsightsWidgets({ data }) {
  return (
    <Card variant="outlined">
      <CardHeader
        title="ArcGenius Insights"
        avatar={
          <Avatar
            sx={{ bgcolor: "transparent", width: 24, height: 24 }}
            aria-label="recipe"
          >
            <AutoAwesomeRounded sx={{ color: "primary.main" }} />
          </Avatar>
        }
      ></CardHeader>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {data}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            pt: 2,
          }}
        >
          <Button variant="outlined" size="small" color="secondary">
            Resolve Issues with ArcGenius
          </Button>
          <Button variant="outlined" size="small" color="secondary">
            Ask ArcGenius about my environment.
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
