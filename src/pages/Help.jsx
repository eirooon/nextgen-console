import { Typography } from "@mui/material";

export default function Help() {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Help Content
      </Typography>
      <Typography color="text.secondary">
        Main content area. Sidebar collapse/expand pushes this layout and persists.
      </Typography>
    </>
  );
}
