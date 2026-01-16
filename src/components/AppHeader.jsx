import { AppBar, Toolbar, Button, IconButton, Box } from "@mui/material";
import { AutoAwesomeRounded, Notifications } from "@mui/icons-material";
import AppBreadcrumbs from "./AppBreadcrumbs";

export default function AppHeader({ height = 64 }) {
  return (
    <AppBar position="sticky" sx={{ height }}>
      <Toolbar
        sx={{
          minHeight: height,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <AppBreadcrumbs />
        </Box>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Button
            variant="contained"
            startIcon={<AutoAwesomeRounded />}
            aria-label="Ask ArcGenuis"
            sx={{
              borderRadius: 999,
              textTransform: "none",
              background:
                "linear-gradient(90deg, rgba(138, 43, 255, 1), rgba(0, 167, 225, 1))",
              boxShadow: "none",
              "&:hover": { filter: "brightness(1.03)", boxShadow: "none" },
              pl: 1.75,
              pr: 1.75,
            }}
            size="small"
          >
            Ask ArcGenius
          </Button>

          <IconButton aria-label="Notifications">
            <Notifications />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
