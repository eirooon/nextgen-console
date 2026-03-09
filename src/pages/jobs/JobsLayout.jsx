import React from "react";
import {
  Box,
  Typography,
  Divider,
  OutlinedInput,
  InputAdornment,
  Button,
  Badge,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import SplitPageLayout from "../../layout/SplitPageLayout";
import {
  SearchOutlined,
  ArrowDropDown,
  SettingsOutlined,
} from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";

import { columns, rows } from "./hooks/useJobsData";

export default function JobsLayout() {
  const [selectedId, setSelectedId] = React.useState("all");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const items = [
    { id: "all", label: "All Jobs", count: 100 },
    { id: "machines", label: "Jobs In Progress", count: 2 },
    { id: "no-plan", label: "Jobs Failed", count: 30 },
    { id: "agentless", label: "Jobs Completed", count: 60 },
  ];

  return (
    <SplitPageLayout
      rootLabel="Sources"
      items={items}
      selectedId={selectedId}
      onSelect={setSelectedId}
    >
      {/* Empty right panel placeholder */}
      <Box>
        {/* Toolbar */}
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
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  <SearchOutlined />
                </InputAdornment>
              }
              size="small"
              placeholder="Search jobs"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Typography fontSize={14}>Selected:</Typography>
            <Badge
              badgeContent={4}
              color="default"
              sx={{
                "& .MuiBadge-badge": {
                  bgcolor: "rgba(0,0,0,0.08)",
                },
                mr: 1,
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
                <MenuItem onClick={handleClose}>
                  Install and Upgrade Agent
                </MenuItem>
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
        {/* Table */}
        <Box sx={{ width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5, 10, 15]}
            checkboxSelection
            disableRowSelectionOnClick
          ></DataGrid>
        </Box>
      </Box>
    </SplitPageLayout>
  );
}
