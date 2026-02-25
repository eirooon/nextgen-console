import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Divider,
} from "@mui/material";
import {
  AutoAwesomeRounded,
  Notifications,
  Help,
  RocketLaunch,
} from "@mui/icons-material";
import AppBreadcrumbs from "./AppBreadcrumbs";

export default function AppHeader({ height = 64, sx }) {
  return (
    <AppBar
      position="sticky"
      sx={{
        height,
        boxShadow: "none",
        background: "transparent",
        ...sx,
      }}
    >
      <Toolbar
        sx={{
          minHeight: height,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <AppBreadcrumbs />
        </Box>

        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
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
              pt: 0.75,
              pb: 0.75,
            }}
            size="small"
          >
            Ask ArcGenie
          </Button>
          <IconButton aria-label="Notifications">
            <Notifications />
          </IconButton>
          <IconButton aria-label="UDP Quick Start Guide">
            <RocketLaunch />
          </IconButton>
          <IconButton aria-label="Help & Support">
            <Help />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
