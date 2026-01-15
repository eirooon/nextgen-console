import { Breadcrumbs, Link, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { routeMeta, formatSectionTitle } from "../data/nav";

export default function AppBreadcrumbs() {
  const location = useLocation();
  const meta = routeMeta[location.pathname];

  if (!meta) return null;

  const sectionLabel = formatSectionTitle(meta.section);

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ color: "rgba(0,0,0,0.55)"}}>
      {/* Level 1: section */}
      <Typography sx={{ color: "rgba(0,0,0,0.45)", fontWeight: 400}}>
        {sectionLabel}
      </Typography>

      {/* Level 2: current page */}
      <Typography sx={{ color: "rgba(0,0,0,0.85)", fontWeight: 500 }}>
        {meta.label}
      </Typography>
    </Breadcrumbs>
  );
}
