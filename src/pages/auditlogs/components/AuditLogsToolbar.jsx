import React from "react";
import {
  Box,
  Typography,
  OutlinedInput,
  InputAdornment,
  Button,
  IconButton,
} from "@mui/material";
import {
  SearchOutlined,
  SettingsOutlined,
  FileDownload,
} from "@mui/icons-material";

export default function AuditLogsToolbar() {
  return (
    <Box
      sx={{
        p: 2,
        borderBottom: "1px solid rgba(0,0,0,0.12)",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        gap: 1,
        backgroundColor: "background.paper",
      }}
    >
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <OutlinedInput
          size="small"
          placeholder="Search audit logs"
          endAdornment={
            <InputAdornment position="end">
              <SearchOutlined />
            </InputAdornment>
          }
        />
      </Box>

      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<FileDownload />}
          >
            <Typography
              noWrap
              component="span"
              sx={{ width: "100%" }}
              variant="body"
            >
              Export
            </Typography>
          </Button>

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
