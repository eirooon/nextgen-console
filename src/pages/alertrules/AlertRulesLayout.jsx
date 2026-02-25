import { Box, Typography } from "@mui/material";
import AlertRulesTable from "./components/AlertRulesTable";
import AlertRulesToolbar from "./components/AlertRulesToolbar";

export default function AlertRulesLayout() {
  return (
    <Box>
      <AlertRulesToolbar />
      <AlertRulesTable />
    </Box>
  );
}
