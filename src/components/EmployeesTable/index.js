import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

import SortLabel from "./SortLabel";

import styles from "./EmployeesTable.module.css";

const EmployeesTable = ({ data, sort, onChangeSort }) => {
  return (
    <TableContainer className={styles.root}>
      <Table aria-label="employees table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <SortLabel field="name" sort={sort} onClick={onChangeSort}>
                Name
              </SortLabel>
            </TableCell>
            <TableCell align="right">
              <SortLabel field="lastName" sort={sort} onClick={onChangeSort}>
                Last name
              </SortLabel>
            </TableCell>
            <TableCell align="right">Job Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.group}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeesTable;
