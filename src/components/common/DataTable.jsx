import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Box
} from "@mui/material";

function DataTable({ columns, rows }) {
  return (
    <Box sx={{ overflowX: "auto" }}>
      <Paper sx={{ border: "1px solid #ddd", boxShadow: "none" }}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field} sx={{ fontWeight: "bold" }}>
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={column.field}>
                    {column.renderCell ? column.renderCell(row) : row[column.field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}

export default DataTable;
