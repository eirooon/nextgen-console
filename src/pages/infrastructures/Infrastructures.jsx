import { Box, Typography } from "@mui/material";

export default function Infrastructures() {
  return (
    <Box sx={{ width: "100%", p: { xs: 2, md: 3 } }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Infrastructures Content
      </Typography>
      <Typography color="text.secondary">
        Main content area. Sidebar collapse/expand pushes this layout and
        persists.
      </Typography>
    </Box>
  );
}
