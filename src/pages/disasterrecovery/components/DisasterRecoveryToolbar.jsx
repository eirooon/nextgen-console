import React from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { subRoutes } from "../../../routes/subRoutes";
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

export default function DisasterRecoveryToolbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          startIcon={<AddOutlined />}
          onClick={() => navigate("/disaster-recovery/dr-runbooks/new")}
        >
          <Typography
            variant="body"
            noWrap
            component="span"
            sx={{ width: "100%" }}
          >
            Add {context}
          </Typography>
        </Button>
        <OutlinedInput
          id="outlined-adornment-password"
          endAdornment={
            <InputAdornment position="end">
              <SearchOutlined />
            </InputAdornment>
          }
          size="small"
          placeholder={`Search ${context.toLowerCase()}`}
        />
        <Button variant="outlined" color="secondary">
          Filters
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
      >
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
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Button
            aria-controls={open ? "basic-menu" : undefined}
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
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
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
