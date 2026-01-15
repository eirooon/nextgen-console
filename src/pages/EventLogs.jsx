import { Typography } from "@mui/material";

export default function EventLogs() {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Event Logs Content
      </Typography>
      <Typography color="text.secondary">
        Main content area. Sidebar collapse/expand pushes this layout and persists.
      </Typography>
    </>
  );
}
