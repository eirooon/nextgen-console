import { useMemo } from "react";
import { Box } from "@mui/material";
import AppNavigation from "../components/AppNavigation";
import AppHeader from "../components/AppHeader";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { headerStyleMap } from "../theme/headerStyleMap";
import { useLocation } from "react-router-dom";

const DRAWER_OPEN = 240;
const DRAWER_CLOSED = 58;
const HEADER_H = 64;

export default function AppShell({ children }) {
  const [collapsed, setCollapsed] = useLocalStorageState(
    "arcserve.sidebar.collapsed",
    false,
  );

  const prefersReducedMotion = usePrefersReducedMotion();

  const drawerWidth = useMemo(
    () => (collapsed ? DRAWER_CLOSED : DRAWER_OPEN),
    [collapsed],
  );

  const location = useLocation();

  const headerSx = headerStyleMap[location.pathname] || headerStyleMap["*"];

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <AppNavigation
        collapsed={collapsed}
        drawerWidth={drawerWidth}
        onToggle={() => setCollapsed(!collapsed)}
        prefersReducedMotion={prefersReducedMotion}
      />

      {/* No ml here — Drawer already consumes width in the flex row */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <AppHeader height={HEADER_H} sx={headerSx} />
        <Box component="main">{children}</Box>
      </Box>
    </Box>
  );
}
