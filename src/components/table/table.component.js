import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { SetRowsPerPage } from '../../redux/users/users.actions';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
    marginTop: '20px',
  },
  inactive: {
    color: 'red',
  },
  active: {
    color: 'green',
  },
});

const CustomTable = ({
  data,
  totalData,
  rowsPerPage,
  setRowsPerPageAction,
  onMoreDataRequired,
  handleOnRowClick,
  titles,
  currentPage,
}) => {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);

  const rows = data;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const ckeckIfMoreDataIsRequired = () => {
    const updated = rowsPerPage * page;
    const backendPageNumber = Math.floor((updated + 10) / rows.length) + 1;
    console.log('checks: ', rowsPerPage);
    if (backendPageNumber > 1) {
      onMoreDataRequired(backendPageNumber);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    ckeckIfMoreDataIsRequired();
  };

  const StyledTableCell = withStyles((theme) => ({
    head: {
      color: theme.palette.common.black,
      fontWeight: 'bold',
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPageAction(parseInt(event.target.value, 10));
    setPage(0);
    ckeckIfMoreDataIsRequired();
  };

  const hanldeRowClicked = (row) => {
    console.log('rowClicke: ', row);
    handleOnRowClick(row);
  };

  console.log('row: ', rows);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {titles.map((head) => (
              <StyledTableCell align="center"> {head} </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => {
            if (currentPage === 'posts') {
              return (
                <StyledTableRow
                  key={row.name}
                  onClick={() => hanldeRowClicked(row)}
                >
                  <StyledTableCell align="center">{row.id}</StyledTableCell>
                  <StyledTableCell align="center">{row.title}</StyledTableCell>
                  <StyledTableCell align="center">{row.body}</StyledTableCell>
                </StyledTableRow>
              );
            }
            if (currentPage === 'comments') {
              return (
                <StyledTableRow
                  key={row.name}
                  onClick={() => hanldeRowClicked(row)}
                >
                  <StyledTableCell align="center">{row.id}</StyledTableCell>
                  <StyledTableCell align="center">{row.name}</StyledTableCell>
                  <StyledTableCell align="center">{row.email}</StyledTableCell>
                  <StyledTableCell align="center">{row.body}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Moment format="DD-MM-YYYY hh:mm a">
                      {row.created_at}
                    </Moment>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Moment format="DD-MM-YYYY hh:mm a">
                      {row.updated_at}
                    </Moment>
                  </StyledTableCell>
                </StyledTableRow>
              );
            }
            return (
              <StyledTableRow
                key={row.name}
                onClick={() => hanldeRowClicked(row)}
              >
                <StyledTableCell align="center">{row.id}</StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.gender}</StyledTableCell>
                <StyledTableCell
                  className={`${row.status !== 'Inactive' && classes.active}`}
                  style={{ width: 160 }}
                  align="center"
                >
                  • {row.status}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Moment format="DD-MM-YYYY hh:mm a">{row.created_at}</Moment>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Moment format="DD-MM-YYYY hh:mm a">{row.updated_at}</Moment>
                </StyledTableCell>
              </StyledTableRow>
            );
          })}

          {emptyRows > 0 && (
            <StyledTableRow style={{ height: 53 * emptyRows }}>
              <StyledTableCell colSpan={6} />
            </StyledTableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              shape="rounded"
              rowsPerPageOptions={[5, 10]}
              colSpan={3}
              count={totalData}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({
  rowsPerPage: state.users.rowsPerPage,
});

const mapDispatchToProps = (dispatch) => ({
  setRowsPerPageAction: (rowsPerPage) => dispatch(SetRowsPerPage(rowsPerPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomTable);
