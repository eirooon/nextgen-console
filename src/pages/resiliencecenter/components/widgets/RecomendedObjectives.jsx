import {
  Typography,
  Stack,
  Grid,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";

import CardItemButton from "../../../../components/CardItemButton";
import {
  VerifiedUser,
  PublishedWithChanges,
  CheckCircle,
  PlayCircleFilled,
  Edit,
  BarChart,
} from "@mui/icons-material";

export default function RecomendedObjectives() {
  const data = [
    {
      label: "Protect my Environment",
      description: "Review unprotected systems and plan coverage",
      icon: <VerifiedUser />,
    },
    {
      label: "Test Recoverability",
      description: "Schedule updates for 14 outdated production agents.",
      icon: <PublishedWithChanges />,
    },
    {
      label: "Optimize Storage",
      description: "Set schedule, retention, and encryption for backups.",
      icon: <CheckCircle />,
    },
    {
      label: "Plan Deployment",
      description: "Recommended deployment architecture",
      icon: <PlayCircleFilled />,
    },
    {
      label: "Tune Protection Policies",
      description: "Asses and improve backup policies",
      icon: <Edit />,
    },
    {
      label: "Review Assessments",
      description: "Assess and monitor asset protection",
      icon: <BarChart />,
    },
  ];

  return (
    <Card variant="outlined">
      <CardHeader
        title={
          <Typography variant="h6" fontWeight="bold">
            Recommended Objectives
          </Typography>
        }
        subheader="Actions you need to take based on your current situation."
      />
      <CardContent>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item size={{ xs: 12, md: 6, lg: 4, xl: 4 }} key={index}>
              {/* We spread the item object to pass label, description, and icon as individual props */}
              <CardItemButton {...item} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
