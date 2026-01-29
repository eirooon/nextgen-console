import { Typography, Card, CardHeader, CardContent, Grid } from "@mui/material";

import CardItemButton from "../../../../components/CardItemButton";
import {
  Monitor,
  LocationOn,
  MenuBook,
  Storage,
  Cached,
  PlayArrow,
  LibraryBooks,
  Notifications,
} from "@mui/icons-material";

export default function QuickActions() {
  const data = [
    {
      label: "Add a Source",
      description: "Choose what to protect.",
      icon: <Monitor />,
    },
    {
      label: "Add a Destination",
      description: "Select where backups are stored (cloud, NAS, or repo).",
      icon: <LocationOn />,
    },
    {
      label: "Create a Backup Policy",
      description: "Set schedule, retention, and encryption for backups.",
      icon: <MenuBook />,
    },
    {
      label: "Run Backup Now",
      description: "Set schedule, retention, and encryption for backups.",
      icon: <Storage />,
    },
    {
      label: "Restore Files and Folders",
      description: "Find a recovery point and restore with a preview step.",
      icon: <Cached />,
    },
    {
      label: "Test a Restore",
      description: "Verify recoverability without impacting production.",
      icon: <PlayArrow />,
    },
    {
      label: "Resolve Alerts",
      description: "Review issues that may prevent backups from completing.",
      icon: <Notifications />,
    },
    {
      label: "View Job History",
      description: "See recent runs, duration, results, and error details.",
      icon: <LibraryBooks />,
    },
  ];

  return (
    <Card variant="outlined">
      <CardHeader
        title={
          <Typography variant="h6" fontWeight="bold">
            Quick Actions
          </Typography>
        }
        subheader="
          Get started securing your environment."
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
