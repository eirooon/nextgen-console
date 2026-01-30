import { useOutletContext } from "react-router-dom";
import React from "react";
import {
  Box,
  Typography,
  Divider,
  OutlinedInput,
  InputAdornment,
  Button,
  Chip,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import {
  SearchOutlined,
  ArrowDropDown,
  SettingsOutlined,
  AddOutlined,
} from "@mui/icons-material";
import { subRoutes } from "../../../routes/subRoutes";

export default function DestinationsToolbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const { selectedId } = useOutletContext();

  const subRouteIdToLabel = Object.fromEntries(
    Object.values(subRoutes).map((r) => [r.id, r.label])
  );
  const context =
    (subRouteIdToLabel[selectedId] ?? "").replace(/^All\s+/i, "") || null;

  return (
    <Box
      sx={{
        p: 2,
        borderBottom: "1px solid rgba(0,0,0,0.12)",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        gap: 1,
      }}
    >
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Button variant="contained" startIcon={<AddOutlined />}>
          <Typography
            noWrap
            component="span"
            sx={{ width: "100%" }}
            variant="body"
          >
            Add {context}
          </Typography>
        </Button>
        <OutlinedInput
          size="small"
          placeholder={`Search ${context.toLowerCase()}`}
          endAdornment={
            <InputAdornment position="end">
              <SearchOutlined />
            </InputAdornment>
          }
        />
        <Button variant="outlined" color="secondary">
          Filters
        </Button>
      </Box>

      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography fontSize={14}>Selected:</Typography>
        <Chip
          label={42}
          size="small"
          sx={{
            height: 22,
            fontSize: 12,
            fontWeight: 500,
            bgcolor: "rgba(0,0,0,0.08)",
            "& .MuiChip-label": { px: 1 },
          }}
        />
        <Divider orientation="vertical" flexItem variant="middle" />
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Button
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="outlined"
            color="secondary"
            endIcon={<ArrowDropDown />}
          >
            Actions
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleClose}>
              Collect Diagnostic Information
            </MenuItem>
            <MenuItem onClick={handleClose}>Install and Upgrade Agent</MenuItem>
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu>

          <IconButton
            size="small"
            sx={{
              border: "1px solid rgba(0, 114, 154, 0.5)",
              borderRadius: "4px",
              color: "#00729A",
            }}
          >
            <SettingsOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
