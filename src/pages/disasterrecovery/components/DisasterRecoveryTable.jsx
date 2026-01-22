import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "../hooks/useDisasterRecoveryData";

export default function DisasterRecoveryTable() {
  return (
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
  );
}
