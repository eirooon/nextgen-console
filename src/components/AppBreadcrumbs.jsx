import React from "react";
import { Breadcrumbs, Typography, Link } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { buildRouteRegistry } from "../routes/routeRegistry";
import { getBreadcrumbTrail } from "../routes/getBreadcrumbTrail";
import { subRoutes } from "../routes/subRoutes";

const registry = buildRouteRegistry({ subRoutes });

export default function AppBreadcrumbs() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const trail = getBreadcrumbTrail(pathname, registry);
  if (!trail.length) return null;

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {trail.map((crumb, idx) => {
        const isLast = idx === trail.length - 1;

        // For "virtual section nodes", don't navigate
        const isSection = crumb.path.startsWith("__section__/");

        if (isLast) {
          return (
            <Typography
              key={crumb.path}
              sx={{
                fontSize: 16,
                fontWeight: 500,
                color: "#000",
              }}
            >
              {crumb.label}
            </Typography>
          );
        }

        return (
          <Link
            key={crumb.path}
            component="button"
            underline="hover"
            onClick={() => {
              if (!isSection) navigate(crumb.path);
            }}
            sx={{
              fontSize: 16,
              color: "text.secondary",
              fontWeight: 500,
              cursor: isSection ? "default" : "pointer",
            }}
          >
            {crumb.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
