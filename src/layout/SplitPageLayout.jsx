import { blueGrey } from "@mui/material/colors";
import { Box, List, ListItemButton, ListItemText, Chip } from "@mui/material";
export default function SplitPageLayout({
  items = [], // [{ id, label, count }]
  selectedId,
  onSelect,
  leftWidth = 280, // px
  children, // right panel content
}) {
  const formatCount = (count) => {
    if (typeof count !== "number") return null;
    return count > 99 ? "99+" : count;
  };

  return (
    <Box sx={{ width: "100%", background: "#fff" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          height: `calc(100vh - 64px)`,
        }}
      >
        {/* Left sub-nav */}
        <Box
          sx={{
            width: leftWidth,
            borderRight: "1px solid rgba(0,0,0,0.12)",
            p: 0.75,
          }}
        >
          <List disablePadding sx={{ p: 1 }}>
            {items.map((item) => {
              const active = item.id === selectedId;

              return (
                <ListItemButton
                  key={item.id}
                  selected={active}
                  onClick={() => onSelect?.(item.id)}
                  sx={{
                    mb: 0.25,
                    "&.Mui-selected": { bgcolor: "rgba(111,83,255,0.10)" },
                    "&.Mui-selected:hover": {
                      bgcolor: "rgba(111,83,255,0.14)",
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 1.5,
                    p: 1.5,
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    sx={{ m: 0, flex: 1, minWidth: 0 }}
                    primaryTypographyProps={{
                      fontSize: 14,
                      // allow wrapping, but no overlap now
                    }}
                  />

                  {typeof item.count === "number" && (
                    <Box sx={{ flexShrink: 0 }}>
                      <Chip
                        label={formatCount(item.count)}
                        size="small"
                        sx={{
                          height: 22,
                          fontSize: 12,
                          fontWeight: 600,
                          bgcolor: active ? blueGrey[700] : "rgba(0,0,0,0.08)",
                          color: active ? "#fff" : "inherit",
                          "& .MuiChip-label": { px: 1 },
                        }}
                      />
                    </Box>
                  )}
                </ListItemButton>
              );
            })}
          </List>
        </Box>

        {/* Right content */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {/* Optional header area on right (keep for future) */}
          {children}
        </Box>
      </Box>
    </Box>
  );
}
