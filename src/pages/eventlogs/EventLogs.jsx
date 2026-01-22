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
  AddOutlined,
} from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";

export default function EventLogs() {
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
    { id: "all", label: "All Event Logs", count: 100 },
    { id: "machines", label: "Assured Recovery", count: 2 },
    {
      id: "no-plan",
      label: "Assured Security - AI Anomaly Detection",
      count: 30,
    },
    {
      id: "agentless",
      label: "Assured Security - Malware Scan",
      count: 60,
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      flex: 1,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      flex: 1,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      flex: 1,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
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
