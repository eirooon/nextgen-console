import { Typography } from "@mui/material";

export default function AlertRules() {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Alert Rules Content
      </Typography>
      <Typography color="text.secondary">
        Main content area. Sidebar collapse/expand pushes this layout and persists.
      </Typography>
    </>
  );
}
