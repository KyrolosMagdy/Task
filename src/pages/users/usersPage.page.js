import React, { useEffect } from 'react';
import CustomTable from '../../components/table/table.component';
import { connect } from 'react-redux';
import {
  getUsersStarts,
  LoadMoreUsers,
  SearchForSpecificUser,
} from '../../redux/users/users.actions';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: '3rem',
    [theme.breakpoints.up('sm')]: {
      margin: '15px',
      marginTop: '4rem',
    },
  },
  headerWrapper: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    borderColor: theme.palette.common.black,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
  },

  searchWrapper: {
    display: 'flex',
    padding: 0,
    margin: 0,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
}));

const UsersPage = ({
  getUsersStartsAction,
  users,
  totalUsers,
  rowsPerPage,
  loadMoreUsersAction,
  SearchForSpecificUserAction,
}) => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    getUsersStartsAction();
  }, [getUsersStartsAction]);

  const handleMoreUsersRequired = (pageNumber) => {
    loadMoreUsersAction(pageNumber);
  };

  const headers = [
    '#',
    'Name',
    'Email Address',
    'Gender',
    'Status',
    'Created Date',
    'Updated Date',
  ];

  const handleOnRowClick = (row) => {
    history.push({
      pathname: `/task/${row.id}`,
      state: {
        row: row,
      },
    });
  };

  const handleSearchChange = (e) => {
    SearchForSpecificUserAction(e.target.value);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.headerWrapper}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Users Directory
          </Typography>
          <Typography variant="body2" gutterBottom>
            Lorem ipsum dolor sit amet
          </Typography>
          <div className={classes.searchWrapper}>
            <div
              className={classes.search}
              style={{ border: '2px solid silver' }}
            >
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search By Name…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={handleSearchChange}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          {' '}
          <Typography varianr="h6">
            {' '}
            Showing {rowsPerPage} of {totalUsers}{' '}
          </Typography>{' '}
        </div>
      </div>
      {users.users.length > 0 ? (
        <CustomTable
          data={users.users}
          totalData={totalUsers}
          onMoreDataRequired={handleMoreUsersRequired}
          handleOnRowClick={handleOnRowClick}
          titles={headers}
          currentPage="users"
        />
      ) : (
        <div> No Users Yet </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  console.log('in the component');
  return {
    getUsersStartsAction: () => dispatch(getUsersStarts()),
    loadMoreUsersAction: (pageNumber) => dispatch(LoadMoreUsers(pageNumber)),
    SearchForSpecificUserAction: (userName) =>
      dispatch(SearchForSpecificUser(userName)),
  };
};

const mapStateToProps = (state) => ({
  users: state.users,
  totalUsers: state.users.totalUsers,
  rowsPerPage: state.users.rowsPerPage,
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
