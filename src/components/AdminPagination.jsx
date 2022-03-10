import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationAdmin({
  rowsXpage,
  helpLength,
  paginado,
  currentPage,
}) {
  const classes = useStyles();

  let maxPages = Math.ceil(helpLength / rowsXpage);

  return (
    <div className={classes.root}>
      <Pagination count={maxPages} 
      variant="outlined" 
      color="primary"
      page={currentPage}
      onChange={paginado}
       />
    </div>
  );
}




