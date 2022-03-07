import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationAdmin({ rowsXpage, helpLength, paginado , currentPage, setCurrentPAge}) {
  const classes = useStyles();

  const pageNumber = [];

  let maxPages = Math.ceil(helpLength / rowsXpage);
  for (let i = 0; i < maxPages; i++) {
    pageNumber.push(i + 1);
  }

  return (
    <div className={classes.root}>
      <Pagination 
      count={maxPages} 
      variant="outlined" 
      color="primary" 
      page={currentPage}
      onChange={paginado}/>
    </div>
  );
}




// export default function PaginationControlled() {
//   const classes = useStyles();
//   const [page, setPage] = React.useState(1);
//   const handleChange = (event, value) => {
//     setPage(value);
//   };

//   return (
//     <div className={classes.root}>
//       <Typography>Page: {page}</Typography>
//       <Pagination count={10} page={page} onChange={handleChange} />
//     </div>
//   );
// }

