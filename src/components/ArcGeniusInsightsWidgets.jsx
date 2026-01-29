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
    <Card
      variant="outlined"
      sx={{
        background: "linear-gradient(138deg, #8A2BFF 0%, #00A7E1 100%)",
        border: 0,
        boxShadow: [
          "0px 7px 8px -4px rgba(0, 0, 0, 0.10)",
          "0px 12px 17px 2px rgba(0, 0, 0, 0.08)",
          "0px 5px 22px 4px rgba(0, 0, 0, 0.05)",
        ].join(", "),
      }}
    >
      <CardHeader
        title="ArcGenius Insights"
        avatar={
          <Avatar
            sx={{ bgcolor: "transparent", width: 24, height: 24 }}
            aria-label="recipe"
          >
            <AutoAwesomeRounded sx={{ color: "#fff" }} />
          </Avatar>
        }
        sx={{ color: "#fff" }}
      ></CardHeader>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14, color: "#fff" }}>
          {data}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            pt: 2,
          }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ color: "#fff", borderColor: "#fff" }}
          >
            Resolve Issues with ArcGenius
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{ color: "#fff", borderColor: "#fff" }}
          >
            Ask ArcGenius about my environment
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
