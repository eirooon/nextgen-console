import * as React from "react";
import CardWidget from "../../../../components/CardWidget";
import { Box, Typography, LinearProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function CapacityWatchWidget({ title, description, data }) {
  const columns = React.useMemo(
    () => [
      {
        field: "storage",
        headerName: "Storage",
        flex: 3,
      },
      {
        field: "usedPct",
        headerName: "Used",
        flex: 1,
        valueFormatter: (value) => `${value}%`,
      },
      {
        field: "daysToFull",
        headerName: "Days to Full",
        flex: 1,
        valueFormatter: (value) => `${value} days`,
      },
      {
        field: "weeklyGrowth",
        headerName: "Weekly Growth",
        flex: 1,
      },
      {
        field: "health",
        headerName: "Health",
        flex: 1,
        renderCell: (params) => {
          const value = Number(params.value ?? 0);
          return (
            <Box
              sx={{
                borderRadius: 999,
                overflow: "hidden",
                bgcolor: "rgba(0,0,0,0.08)",
                mt: 2.5,
              }}
            >
              <LinearProgress
                variant="determinate"
                value={Math.max(0, Math.min(100, value))}
                sx={{
                  height: 8,
                  "& .MuiLinearProgress-bar": {
                    borderRadius: 999,
                  },
                }}
              />
            </Box>
          );
        },
      },
    ],
    []
  );

  const safeRows = data?.length
    ? data
    : [
        {
          id: 1,
          storage: "Arcserve Cloud Storage",
          usedPct: 92,
          daysToFull: 12,
          weeklyGrowth: "+ 1.2 GB/week",
          health: 92,
        },
        {
          id: 2,
          storage: "Arcserve Cloud Cyber Resilient Storage",
          usedPct: 76,
          daysToFull: 3,
          weeklyGrowth: "+ 1.2 GB/week",
          health: 70,
        },
        {
          id: 3,
          storage: "Another Storage",
          usedPct: 76,
          daysToFull: 2,
          weeklyGrowth: "+ 300 GB/week",
          health: 70,
        },
      ];

  return (
    <CardWidget title={title} description={description}>
      <DataGrid
        rows={safeRows}
        columns={columns}
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        disableRowSelectionOnClick
        disableVirtualization
        disableColumnResize
        autoHeight
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </CardWidget>
  );
}
