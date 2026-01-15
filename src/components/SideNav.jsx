import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  Divider,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  IconButton,
  Avatar,
  Popover
} from "@mui/material";

import { 
  VerifiedUser, 
  AppsOutlined, 
  KeyboardDoubleArrowLeftRounded, 
  KeyboardDoubleArrowRightRounded,
  Person,
  ChevronRightOutlined,
  CloudUpload,
  HelpRounded
} from "@mui/icons-material";

import { navSections } from "../data/nav";
import arcserveLogoFull from "../assets/arcserve-full-logo.svg"
import arcserveLogoSmall from "../assets/arcserve-small-logo.svg"

export default function SideNav({ collapsed, drawerWidth, onToggle, prefersReducedMotion }) {
  const location = useLocation();

  const productOptions = [
    { id: "udp", label: "Arcserve UDP", icon: <VerifiedUser sx={{ color: "rgba(255, 213, 0, 1)" }} /> },
    { id: "cloud", label: "Arcserve Cloud Direct", icon: <CloudUpload sx={{ color: "rgb(19, 157, 9)" }} /> },
    { id: "shadow", label: "Arcserve ShadowProtect", icon: <HelpRounded sx={{ color: "rgb(4, 168, 135)" }} /> },
  ];
  

  const [activeProduct, setActiveProduct] = React.useState("udp");
  const [productAnchorEl, setProductAnchorEl] = React.useState(null);

  const openProductMenu = (e) => setProductAnchorEl(e.currentTarget);
  const closeProductMenu = () => setProductAnchorEl(null);

  const productMenuOpen = Boolean(productAnchorEl);
  
  const selectedProduct = productOptions.find((p) => p.id === activeProduct) || productOptions[0];

  return (
    <Drawer
      variant="permanent"
      open={!collapsed}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          overflowX: "hidden",
          transition: prefersReducedMotion
            ? "none"
            : "width 220ms cubic-bezier(0.2, 0, 0, 1)",
          willChange: prefersReducedMotion ? "auto" : "width",
        },
      }}
    >
      {/* Top / brand row */}
      <Box sx={{ p: 1.75 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: collapsed ? "column" : "row",
            alignItems: "center", // ✅ center cross-axis for both modes
            justifyContent: collapsed ? "center" : "space-between",
            gap: collapsed ? 1 : 0,
            width: "100%",
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: collapsed ? "center" : "flex-start", // ✅ center in collapsed
              width: "100%",  
            }}
          >
            {collapsed ? (
              <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <img src={arcserveLogoSmall} alt="Arcserve" />
              </Box>
            ) : (
                <img src={arcserveLogoFull} alt="Arcserve" />
            )}
          </Box>

          {/* Toggle */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: collapsed ? "center" : "flex-end", // ✅ center in collapsed
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={onToggle}
              size="small"
              sx={{
                borderRadius: 999, // optional: more like your mock (circular)
                color: "rgba(255,255,255,0.92)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.10)" },

                // keep slight separation under logo in collapsed mode
                mt: collapsed ? 0.5 : 0,

                // ✅ remove left nudge so it truly centers
                ml: 0,
              }}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? (
                <KeyboardDoubleArrowRightRounded fontSize="small" />
              ) : (
                <KeyboardDoubleArrowLeftRounded fontSize="small" />
              )}
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Product Switcher */}
      <Box
        sx={{
          padding: "0px 8px 12px 8px",
          display: "flex",
          flexDirection: collapsed ? "column" : "row",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "space-between",
          gap: collapsed ? 1 : 0,
          width: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "8px",
            width: "100%",
            cursor: "pointer",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.07)" },
          }}
          onClick={openProductMenu} // ✅ click anywhere on the switcher
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") openProductMenu(e);
          }}
        >
          {collapsed ? (
            <Tooltip title={selectedProduct.label} placement="right">
              <Box
                sx={{
                  p: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {selectedProduct.icon}
              </Box>
            </Tooltip>
          ) : (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1,
              }}
            >
             <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
              {selectedProduct.icon}
              <Typography fontSize={12} sx={{ ml: 1 }}>
                {selectedProduct.label}
              </Typography>
            </Box>

              {/* ✅ anchor the popover specifically to the apps icon */}
              <Box
                onClick={(e) => {
                  e.stopPropagation();
                  openProductMenu(e);
                }}
                sx={{
                  display: "grid",
                  placeItems: "center",
                  width: 28,
                  height: 28,
                  borderRadius: 1,
                  color: "rgba(255,255,255,0.85)",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" },
                }}
                aria-label="Open product switcher"
              >
                <AppsOutlined />
              </Box>
            </Box>
          )}
        </Box>

        {/* ✅ Popover menu */}
        <Popover
          open={productMenuOpen}
          anchorEl={productAnchorEl}
          onClose={closeProductMenu}
          anchorOrigin={{ vertical: "center", horizontal: "right" }}
          transformOrigin={{ vertical: "center", horizontal: "left" }}
          PaperProps={{
            sx: {
              mt: 1,
              ml: 2, // pushes it away from the sidebar edge (like your screenshot)
              width: 270,
              borderRadius: 0.75,
              boxShadow: "0 5px 10px rgba(0,0,0,0.05)",
              overflow: "hidden",
            },
          }}
        >
          <Box sx={{ p: 1, bgcolor: "background.paper" }}>
            <List disablePadding>
              {productOptions.map((p) => {
                const selected = p.id === activeProduct;

                return (
                  <ListItemButton
                    key={p.id}
                    onClick={() => {
                      setActiveProduct(p.id);
                      closeProductMenu();
                    }}
                    sx={{
                      borderRadius: 0.5,
                      mb: 0.25,
                      p: 1.25,
                      gap: 1.5,
                      bgcolor: selected ? "rgba(111,83,255,0.12)" : "transparent",
                      "&:hover": {
                        bgcolor: selected ? "rgba(111,83,255,0.14)" : "rgba(0,0,0,0.04)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: 2,
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                        {p.icon}
                    </Box>

                    <ListItemText
                      primary={p.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        color: selected ? "#6f53ff" : "rgba(0,0,0,0.82)",
                      }}

                    />
                  </ListItemButton>
                );
              })}

            </List>
          </Box>
        </Popover>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

             
      {/* Sections */}
      <Box sx={{ flex: 1, overflow: "auto" }}>
        {navSections.map((section, sectionIndex) => {
          const isLast = sectionIndex === navSections.length - 1;

          return (
            <Box key={section.title}>
              <Box sx={{ pl: 1, pr: 1, pt: 1 }}>
                {!collapsed && (
                  <Typography
                    sx={{
                      px: 1.25,
                      py: 1,
                      fontSize: 10,
                      color: "rgba(255,255,255,0.50)",
                    }}
                  >
                    {section.title}
                  </Typography>
                )}

                <List disablePadding>
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.to;

                    const button = (
                      <ListItemButton
                        component={NavLink}
                        to={item.to}
                        sx={{
                          px: collapsed ? 1 : 1.25,
                          justifyContent: collapsed ? "center" : "flex-start",
                          mb: 0.25,
                          bgcolor: isActive ? "rgba(111,83,255,0.22)" : "transparent",
                          boxShadow: isActive
                            ? `0 8px 18px rgba(0,0,0,0.18),
                              inset 0 0 0 1px rgba(111,83,255,0.42)`
                            : "none",
                          position: "relative",
                          overflow: "hidden",
                          "&:hover": {
                            bgcolor: isActive
                              ? "rgba(111,83,255,0.26)"
                              : "rgba(255,255,255,0.08)",
                          },
                        }}
                      >

                        {/* Icon Gradient Color */}
                        <svg width={0} height={0}>
                          <linearGradient id="mainGradient" x1="100%" y1="100%" x2="20%" y2="10%">
                            <stop offset="0%" stopColor="#8A2BFF" />
                            <stop offset="36%" stopColor="#5957F4" />
                            <stop offset="100%" stopColor="#00A7E1" />
                          </linearGradient>
                        </svg>
                        
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: collapsed ? 0 : 1.5,
                            width: 24,
                            height: 24,
                            display: "grid",
                            placeItems: "center",
                          }}
                        >
                          <Icon sx={{ fill: "url(#mainGradient)"}}/>
                        </ListItemIcon>

                        {!collapsed && (
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                              fontSize: 12,
                              color: "rgba(255,255,255,0.90)",
                              fontWeight: isActive ? 600 : 500,
                            }}
                          />
                        )}
                      </ListItemButton>
                    );

                    return (
                      <Box key={item.to}>
                        {collapsed ? (
                          <Tooltip title={item.label} placement="right">
                            {button}
                          </Tooltip>
                        ) : (
                          button
                        )}
                      </Box>
                    );
                  })}
                </List>
              </Box>

              {/* Divider between sections ONLY (not after the last one) */}
              {collapsed && !isLast && (
                <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />
              )}
            </Box>
          );
        })}
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

      {/* Profile*/}

      <Box sx={{p: 1.75, 
            display: "flex",
            flexDirection: collapsed ? "column" : "row",
            alignItems: "center", // ✅ center cross-axis for both modes
            justifyContent: collapsed ? "center" : "space-between",
            gap: collapsed ? 1 : 0,
            width: "100%",}}>
        <Box sx={{ width: "100%"}}>
          {collapsed ? (
                <Box sx={{ 
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                 }}>
                  <Avatar sx={{ width: 28, height: 28, bgcolor: "#D6F4FF", color: "#00A7E1"}}>
                    <Person  fontSize="small"/>
                  </Avatar>
                </Box>
              ) : (
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                 <Box sx={{ display: "flex", alignItems: "center", gap: 1.25}}>
                    <Avatar sx={{ width: 28, height: 28, bgcolor: "#D6F4FF", color: "#00A7E1"}}>
                      <Person  fontSize="small"/>
                    </Avatar>
                    <Box sx={{ lineHeight: 1.1 }}>
                      <Typography sx={{ fontSize: 10, color: "rgba(255,255,255,0.6)" }}>
                        Arcserve Inc.
                      </Typography>
                      <Typography sx={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.92)" }}>
                        John Doe
                      </Typography>
                    </Box>
                  </Box>
                    <ChevronRightOutlined/>
                  </Box>
              )}
        </Box>
      </Box>
    </Drawer>
  );
}
