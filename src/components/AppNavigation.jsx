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
  Popover,
  Collapse,
  Chip,
  Switch,
} from "@mui/material";

import {
  VerifiedUser,
  UnfoldMore,
  KeyboardDoubleArrowLeftRounded,
  KeyboardDoubleArrowRightRounded,
  CloudUpload,
  HelpRounded,
  ExpandMore,
  DarkModeOutlined,
  TranslateOutlined,
  LogoutOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";

import { navSections } from "../data/nav";
import arcserveLogoFull from "../assets/arcserve-full-logo.svg";
import arcserveLogoSmall from "../assets/arcserve-small-logo.svg";

// LocalStorage helpers
const STORAGE_KEY = "appNavigationState:v1";

function safeParse(json, fallback) {
  try {
    const v = JSON.parse(json);
    return v ?? fallback;
  } catch {
    return fallback;
  }
}

export default function AppNavigation({
  collapsed,
  drawerWidth,
  onToggle,
  prefersReducedMotion,
}) {
  const location = useLocation();
  const transitionTime = prefersReducedMotion ? "0ms" : "220ms";
  const transitionCurve = "cubic-bezier(0.2, 0, 0, 1)";
  const sharedTransition = `${transitionTime} ${transitionCurve}`;

  const productOptions = React.useMemo(
    () => [
      {
        id: "udp",
        label: "Unified Data Protection (UDP)",
        icon: <VerifiedUser sx={{ color: "rgba(255, 213, 0, 1)" }} />,
      },
      {
        id: "cloud",
        label: "Cloud Direct",
        icon: <CloudUpload sx={{ color: "rgb(19, 157, 9)" }} />,
      },
      {
        id: "shadow",
        label: "ShadowProtect",
        icon: <HelpRounded sx={{ color: "rgb(36, 203, 225)" }} />,
      },
    ],
    [],
  );

  // Load initial persisted state once
  const persisted = React.useMemo(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    return safeParse(raw, {});
  }, []);

  // Persist active product
  const [activeProduct, setActiveProduct] = React.useState(
    persisted.activeProduct || "udp",
  );

  const [productAnchorEl, setProductAnchorEl] = React.useState(null);

  // Persist open sections
  const [openSections, setOpenSections] = React.useState(() => {
    // defaults: open all
    const initial = {};
    navSections.forEach((s) => {
      initial[s.title] = true;
    });

    // Apply persisted section state (if any)
    if (persisted.openSections && typeof persisted.openSections === "object") {
      Object.keys(initial).forEach((title) => {
        if (typeof persisted.openSections[title] === "boolean") {
          initial[title] = persisted.openSections[title];
        }
      });
    }

    return initial;
  });

  const toggleSection = React.useCallback((title) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  }, []);

  // Persist collapsed state too (in addition to whatever parent controls)
  // - This keeps UI consistent on refresh.
  React.useEffect(() => {
    // only write if prop is boolean
    if (typeof collapsed === "boolean") {
      const raw = localStorage.getItem(STORAGE_KEY);
      const existing = safeParse(raw, {});
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          ...existing,
          collapsed,
        }),
      );
    }
  }, [collapsed]);

  //Persist openSections + activeProduct whenever they change
  React.useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    const existing = safeParse(raw, {});
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ...existing,
        activeProduct,
        openSections,
      }),
    );
  }, [activeProduct, openSections]);

  // Keep current section open based on route (won't close others)
  React.useEffect(() => {
    const currentPath = location.pathname;

    const containingSection = navSections.find((s) =>
      s.items.some((item) => currentPath.startsWith(item.to)),
    );

    if (containingSection) {
      setOpenSections((prev) => ({
        ...prev,
        [containingSection.title]: true,
      }));
    }
  }, [location.pathname]);

  const openProductMenu = React.useCallback((e) => {
    setProductAnchorEl(e.currentTarget);
  }, []);

  const closeProductMenu = React.useCallback(() => {
    setProductAnchorEl(null);
  }, []);

  const productMenuOpen = Boolean(productAnchorEl);

  const selectedProduct = React.useMemo(() => {
    return (
      productOptions.find((p) => p.id === activeProduct) || productOptions[0]
    );
  }, [activeProduct, productOptions]);

  const transition = prefersReducedMotion
    ? "none"
    : "220ms cubic-bezier(0.2, 0, 0, 1)";

  // --- Profile menu ---
  const user = React.useMemo(
    () => ({
      name: "Erron Sevilla",
      organization: "Arcserve",
      initials: "ES",
      planLabel: "Pro",
      version: "v1.5.69",
    }),
    [],
  );

  const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);
  const profileMenuOpen = Boolean(profileAnchorEl);

  const openProfileMenu = React.useCallback((e) => {
    setProfileAnchorEl(e.currentTarget);
  }, []);

  const closeProfileMenu = React.useCallback(() => {
    setProfileAnchorEl(null);
  }, []);

  // Dark mode switch (wire this to your theme later if needed)
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <Drawer
      variant="permanent"
      open={!collapsed}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          overflowX: "hidden",
          transition: prefersReducedMotion
            ? "none"
            : `width ${sharedTransition}`,
          boxSizing: "border-box",
        },
      }}
    >
      {/* Top / brand row */}
      <Box sx={{ p: 1.75 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: collapsed ? "column" : "row",
            alignItems: "center",
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
              justifyContent: collapsed ? "center" : "flex-start",
              width: "100%",
            }}
          >
            {collapsed ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
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
              justifyContent: collapsed ? "center" : "flex-end",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={() => {
                // ✅ UPDATED: persist in localStorage immediately as well
                const raw = localStorage.getItem(STORAGE_KEY);
                const existing = safeParse(raw, {});
                localStorage.setItem(
                  STORAGE_KEY,
                  JSON.stringify({
                    ...existing,
                    collapsed: !collapsed,
                  }),
                );

                onToggle?.();
              }}
              size="small"
              sx={{
                borderRadius: 999,
                color: "rgba(255,255,255,0.92)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.10)" },
                mt: collapsed ? 0.5 : 0,
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
          padding: "0px 8px 8px 8px",
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
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "8px",
            width: "100%",
            cursor: "pointer",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
          }}
          onClick={openProductMenu}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") openProductMenu(e);
          }}
        >
          <Tooltip
            title={collapsed ? selectedProduct.label : ""}
            placement="right"
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 1,
                gap: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", minWidth: 0 }}>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    display: "grid",
                    placeItems: "center",
                    flex: "0 0 auto",
                  }}
                >
                  {selectedProduct.icon}
                </Box>

                <Box
                  sx={{
                    display: collapsed ? "none" : "block",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    maxWidth: collapsed ? 0 : 200,
                    opacity: collapsed ? 0 : 1,
                    ml: collapsed ? 0 : 1,
                    transition: prefersReducedMotion
                      ? "none"
                      : `max-width ${transition}, opacity 160ms ease, margin-left ${transition}`,
                  }}
                >
                  <Typography
                    fontSize={14}
                    fontWeight={500}
                    sx={{
                      color: "rgba(255,255,255,0.92)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      minWidth: 0,
                    }}
                  >
                    {selectedProduct.label}
                  </Typography>
                </Box>
              </Box>

              <Box
                onClick={(e) => {
                  e.stopPropagation();
                  openProductMenu(e);
                }}
                sx={{
                  display: collapsed ? "none" : "grid",
                  placeItems: "center",
                  width: 28,
                  height: 28,
                  borderRadius: 1,
                  color: "rgba(255,255,255,0.85)",
                  flex: "0 0 auto",
                  opacity: collapsed ? 0 : 1,
                  pointerEvents: collapsed ? "none" : "auto",
                  transition: prefersReducedMotion
                    ? "none"
                    : "opacity 150ms ease",
                }}
                aria-label="Open product switcher"
              >
                <UnfoldMore />
              </Box>
            </Box>
          </Tooltip>
        </Box>

        {/*Product Switcher Popover*/}
        <Popover
          open={productMenuOpen}
          anchorEl={productAnchorEl}
          onClose={closeProductMenu}
          anchorOrigin={{ vertical: "center", horizontal: "right" }}
          transformOrigin={{ vertical: "center", horizontal: "left" }}
          PaperProps={{
            sx: {
              width: 380,
              borderRadius: 4,
              boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
              overflow: "hidden",
              p: 1.5,
              border: "1px solid #eeeeee",
            },
          }}
        >
          <Box sx={{ px: 1, pb: 1, pt: 1 }}>
            <Typography
              sx={{ fontSize: 14, fontWeight: 600, color: "rgba(0,0,0,0.60)" }}
            >
              Switch Product
            </Typography>
          </Box>

          <List disablePadding>
            {productOptions.map((p) => {
              const selected = p.id === activeProduct;

              return (
                <ListItemButton
                  key={p.id}
                  sx={{ py: 1, px: 1 }}
                  onClick={() => {
                    setActiveProduct(p.id);
                    closeProductMenu();
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 32,
                      color: selected ? "#6f53ff" : "rgba(0,0,0,0.45)",
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
                  </ListItemIcon>

                  <ListItemText
                    primary={p.label}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "rgba(0,0,0,0.70)",
                    }}
                  />

                  {selected && (
                    <Chip
                      label="Active"
                      size="small"
                      sx={{
                        fontSize: 14,
                        bgcolor: "#E8F5E9",
                        color: "#2E7D32",
                        fontWeight: 500,
                      }}
                    />
                  )}
                </ListItemButton>
              );
            })}
          </List>
        </Popover>
      </Box>

      <Divider
        sx={{ borderColor: "rgba(255,255,255,0.1)", mb: collapsed ? 0 : 1 }}
      />

      {/* Sections */}
      <Box sx={{ flex: 1, overflow: "auto" }}>
        {navSections.map((section, sectionIndex) => {
          const isLast = sectionIndex === navSections.length - 1;
          const isOpen = !!openSections[section.title];

          return (
            <Box key={section.title}>
              <Box sx={{ pl: 1, pr: 1 }}>
                {!collapsed && (
                  <ListItemButton
                    onClick={() => toggleSection(section.title)}
                    sx={{
                      borderRadius: 1,
                      "&:hover": { bgcolor: "rgba(255,255,255,0.06)" },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      pl: 1,
                      pr: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 14,
                        color: "rgba(255,255,255, 0.70)",
                      }}
                    >
                      {section.title}
                    </Typography>

                    <ExpandMore
                      sx={{
                        fontSize: 20,
                        color: "rgba(255,255,255, 0.70)",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: prefersReducedMotion
                          ? "none"
                          : "transform 160ms ease",
                      }}
                    />
                  </ListItemButton>
                )}

                <Collapse
                  in={collapsed ? true : !!openSections[section.title]}
                  timeout={prefersReducedMotion ? 0 : 200}
                >
                  <List disablePadding sx={{ pb: 1, mt: collapsed ? 0 : 0.5 }}>
                    {section.items.map((item) => {
                      const Icon = item.icon;

                      const button = (
                        <ListItemButton
                          component={NavLink}
                          to={item.to}
                          sx={{
                            height: 40,
                            alignItems: "center",
                            justifyContent: collapsed ? "center" : "flex-start",
                            borderRadius: 1.5,
                            mt: collapsed ? 1 : 0,
                            "&.active": {
                              bgcolor: "rgba(111,83,255,0.22)",
                            },
                            "&.active:hover": {
                              bgcolor: "rgba(111,83,255,0.26)",
                            },
                            "&:hover": {
                              bgcolor: "rgba(255,255,255,0.08)",
                            },
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: collapsed ? 0 : 1.5,
                              width: 20,
                              height: 20,
                              display: "grid",
                              placeItems: "center",
                            }}
                          >
                            <Icon
                              sx={{
                                color: "rgba(255,255,255)",
                                width: 20,
                                height: 20,
                              }}
                            />
                          </ListItemIcon>

                          {!collapsed && (
                            <ListItemText
                              primary={item.label}
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: 400,
                                color: "rgba(255,255,255)",
                              }}
                            />
                          )}
                        </ListItemButton>
                      );

                      return (
                        <Box
                          key={item.to}
                          sx={{
                            mb: 0.5,
                            "&:last-of-type": { mb: 0 },
                          }}
                        >
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
                </Collapse>
              </Box>

              {collapsed && !isLast && (
                <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
              )}
            </Box>
          );
        })}
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

      {/*Profile*/}
      <Box sx={{ p: 1.25, width: "100%" }}>
        {collapsed ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Tooltip
              title={`${user.name} (${user.organization})`}
              placement="right"
            >
              <IconButton
                onClick={openProfileMenu}
                sx={{ p: 0.5 }}
                aria-label="Open profile menu"
              >
                <Avatar
                  sx={{
                    width: 34,
                    height: 34,
                    bgcolor: "rgba(255,255,255,0.16)",
                    color: "rgba(255,255,255,0.92)",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {user.initials}
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        ) : (
          <Box
            onClick={openProfileMenu}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openProfileMenu(e);
            }}
            sx={{
              cursor: "pointer",
              borderRadius: 2,
              px: 1,
              py: 0.9,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
              "&:hover": { bgcolor: "rgba(255,255,255,0.06)" },
            }}
            aria-label="Open profile menu"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.25,
                minWidth: 0,
              }}
            >
              <Avatar
                sx={{
                  width: 38,
                  height: 38,
                  bgcolor: "rgba(255,255,255,0.16)",
                  color: "rgba(255,255,255,0.92)",
                  fontSize: 16,
                  fontWeight: 500,
                  flex: "0 0 auto",
                }}
              >
                {user.initials}
              </Avatar>

              <Box sx={{ minWidth: 0 }}>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.92)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {user.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.80)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {user.organization}
                </Typography>
              </Box>
            </Box>

            <IconButton
              disableRipple
              size="small"
              sx={{ color: "rgba(255,255,255,0.75)" }}
              aria-label="Open profile menu"
            >
              <ExpandMore
                sx={{
                  fontSize: 20,
                  transform: profileMenuOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: prefersReducedMotion
                    ? "none"
                    : "transform 160ms ease",
                }}
              />
            </IconButton>
          </Box>
        )}

        {/* Profile popover */}
        <Popover
          open={profileMenuOpen}
          anchorEl={profileAnchorEl}
          onClose={closeProfileMenu}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "bottom", horizontal: "left" }}
          PaperProps={{
            sx: {
              width: 300,
              borderRadius: 3,
              boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
              overflow: "hidden",
              border: "1px solid #eeeeee",
            },
          }}
        >
          <Box sx={{ p: 2, bgcolor: "background.paper" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: "rgba(0,0,0,0.06)",
                  color: "rgba(0,0,0,0.75)",
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                {user.initials}
              </Avatar>

              <Box sx={{ minWidth: 0 }}>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "rgba(0,0,0,0.85)",
                  }}
                >
                  {user.name}
                </Typography>

                <Typography sx={{ fontSize: 12, color: "rgba(0,0,0,0.45)" }}>
                  {user.organization}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ borderColor: "rgba(0,0,0,0.05)" }} />

          <List disablePadding>
            <ListItemButton
              disableRipple
              sx={{ py: 1 }}
              onClick={(e) => e.preventDefault()}
            >
              <ListItemIcon sx={{ minWidth: 32, color: "rgba(0,0,0,0.55)" }}>
                <DarkModeOutlined />
              </ListItemIcon>

              <ListItemText
                primary="Dark Mode"
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "rgba(0,0,0,0.70)",
                }}
              />

              <Switch
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                onClick={(e) => e.stopPropagation()}
              />
            </ListItemButton>

            <Divider sx={{ borderColor: "rgba(0,0,0,0.05)" }} />

            <ListItemButton
              sx={{ py: 1 }}
              onClick={() => {
                closeProfileMenu();
              }}
            >
              <ListItemIcon sx={{ minWidth: 32, color: "rgba(0,0,0,0.45)" }}>
                <PersonOutlineOutlined />
              </ListItemIcon>
              <ListItemText
                primary="My Profile"
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 400,
                  // NOTE: you had rgba(0,0,0,0) (invisible). Keeping your original would hide text.
                  color: "rgba(0,0,0,0.70)",
                }}
              />
            </ListItemButton>

            <ListItemButton
              sx={{ py: 1 }}
              onClick={() => {
                closeProfileMenu();
              }}
            >
              <ListItemIcon sx={{ minWidth: 32, color: "rgba(0,0,0,0.45)" }}>
                <TranslateOutlined />
              </ListItemIcon>
              <ListItemText
                primary="Language"
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "rgba(0,0,0,0.70)",
                }}
              />
            </ListItemButton>

            <Divider sx={{ borderColor: "rgba(0,0,0,0.05)" }} />

            <ListItemButton
              sx={{ py: 1.6 }}
              onClick={() => {
                closeProfileMenu();
              }}
            >
              <ListItemIcon sx={{ minWidth: 32, color: "#E53935" }}>
                <LogoutOutlined />
              </ListItemIcon>
              <ListItemText
                primary="Log out"
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "rgba(0,0,0,0.70)",
                }}
              />
            </ListItemButton>

            <Box sx={{ px: 2, pb: 1.5, pt: 0.5 }}>
              <Typography sx={{ fontSize: 12, color: "rgba(0,0,0,0.35)" }}>
                {user.version} · Terms &amp; Conditions
              </Typography>
            </Box>
          </List>
        </Popover>
      </Box>
    </Drawer>
  );
}
