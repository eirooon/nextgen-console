import { Box, Typography } from "@mui/material";
import AuditLogsTable from "./components/AuditLogsTable";
import AuditLogsToolbar from "./components/AuditLogsToolbar";

export default function AuditLogsLayout() {
  return (
    <Box>
      <AuditLogsToolbar />
      <AuditLogsTable />
    </Box>
  );
}
