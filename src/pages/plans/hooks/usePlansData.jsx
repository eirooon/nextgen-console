export const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First name", flex: 1, editable: true },
  { field: "lastName", headerName: "Last name", flex: 1, editable: true },
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
    sortable: false,
    flex: 1,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

export const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
];
