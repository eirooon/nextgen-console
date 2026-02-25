import { useOutletContext } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { AddOutlined, FileDownload, SearchOutlined } from "@mui/icons-material";
import { subRoutes } from "../../routes/subRoutes";
import SettingsTable from "./components/SettingsTable";

export default function SourceGroups() {
  const { selectedId } = useOutletContext();

  const subRouteIdToLabel = Object.fromEntries(
    Object.values(subRoutes).map((r) => [r.id, r.label]),
  );
  const context =
    (subRouteIdToLabel[selectedId] ?? "").replace(/^All\s+/i, "") || null;

  return (
    <>
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
        </Box>
      </Box>
      <SettingsTable />
    </>
  );
}
