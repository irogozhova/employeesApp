import { useCallback } from "react";
import TableSortLabel from "@material-ui/core/TableSortLabel";

const SortLabel = ({ children, field, sort, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(field);
  }, [field, onClick]);

  return (
    <TableSortLabel
      active={sort.field === field}
      direction={sort.isAsc ? "asc" : "desc"}
      onClick={handleClick}
    >
      {children}
    </TableSortLabel>
  );
};

export default SortLabel;
