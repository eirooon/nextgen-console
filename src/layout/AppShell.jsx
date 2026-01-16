import { useMemo } from "react";
import { Box } from "@mui/material";
import SideNav from "../components/SideNav";
import AppHeader from "../components/AppHeader";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const DRAWER_OPEN = 230;
const DRAWER_CLOSED = 56;
const HEADER_H = 64;

export default function AppShell({ children }) {
  const [collapsed, setCollapsed] = useLocalStorageState(
    "arcserve.sidebar.collapsed",
    false
  );

  const prefersReducedMotion = usePrefersReducedMotion();

  const drawerWidth = useMemo(
    () => (collapsed ? DRAWER_CLOSED : DRAWER_OPEN),
    [collapsed]
  );

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <SideNav
        collapsed={collapsed}
        drawerWidth={drawerWidth}
        onToggle={() => setCollapsed(!collapsed)}
        prefersReducedMotion={prefersReducedMotion}
      />

      {/* No ml here — Drawer already consumes width in the flex row */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <AppHeader height={HEADER_H} />
        <Box component="main" sx={{ p: { xs: 2, md: 3 } }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
