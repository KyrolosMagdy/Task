import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getPostsStarts } from '../../redux/posts/posts.actions';
import { connect } from 'react-redux';
import CustomTable from '../../components/table/table.component';
import { Typography } from '@material-ui/core';
import Moment from 'react-moment';
import UserCard from '../../components/card/card.component';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  infoWrapper: {
    display: 'flex',
    width: '50%',
    justifyContent: 'space-between',
    margin: '1rem',
    marginBottom: '5rem',

    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  textWrapper: {
    display: 'flex',
    justifyContent: 'left',

    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
    },
  },
  TitleWrapper: {
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'left',

    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
  },
}));

const PostsPage = ({ getPostsStartsAction, posts, location }) => {
  const classes = useStyles();
  const { userId } = useParams();
  const user = location.state.row;

  useEffect(() => {
    getPostsStartsAction(userId);
  }, [userId, getPostsStartsAction]);

  const handleMoreDataRequired = () => {
    console.log('More Posts Are Required');
  };

  const hanldeOnPostRowClick = (row) => {
    console.log('supposed to get comments');
    history.push({
      pathname: `/${user.id}/${row.id}`,
      state: {
        row: row,
        user: user,
      },
    });
  };

  const titles = ['Post Id', 'Post Title', 'Body'];
  const history = useHistory();

  console.log('posts: ', posts.length);
  return (
    <div style={{ margin: '3rem' }}>
      <button
        style={{
          color: '#8f9192',
          borderRadius: '5px',
          padding: '3px 13px',
          display: 'flex',
          alignItems: 'center',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: 'whitesmoke',
        }}
        onClick={() => history.push('/')}
      >
        Back{' '}
        <Typography variant="h5" display="inline">
          {' '}
          &#11178;{' '}
        </Typography>
      </button>

      <hr />
      <div style={{ margin: '1rem' }}>
        <UserCard user={user} />
      </div>

      <div className={classes.infoWrapper}>
        <div
          style={{ display: 'flex', flexDirection: 'column', margin: '1rem 0' }}
        >
          <Typography
            variant="h5"
            className={classes.textWrapper}
            color="secondary"
          >
            Total
          </Typography>
          <Typography
            variant="h5"
            className={classes.textWrapper}
            color="secondary"
          >
            No. of Posts
          </Typography>
          <Typography variant="h5" className={classes.textWrapper}>
            {posts.length}
          </Typography>
        </div>

        <div
          style={{ display: 'flex', flexDirection: 'column', margin: '1rem 0' }}
        >
          <Typography
            variant="h5"
            className={classes.textWrapper}
            color="secondary"
          >
            Current Page
          </Typography>
          <Typography
            variant="h5"
            className={classes.textWrapper}
            color="secondary"
          >
            No. of Posts
          </Typography>

          <Typography
            variant="h5"
            style={{
              color: '#521010',
            }}
            className={classes.textWrapper}
          >
            {posts.length}
          </Typography>
        </div>

        <div
          style={{ display: 'flex', flexDirection: 'column', margin: '1rem 0' }}
        >
          <Typography
            variant="h5"
            className={classes.textWrapper}
            color="secondary"
          >
            User
          </Typography>
          <Typography
            variant="h5"
            className={classes.textWrapper}
            color="secondary"
          >
            Creation Date
          </Typography>

          <Typography
            variant="h5"
            className={classes.textWrapper}
            style={{
              color: 'secondary',
            }}
          >
            <Moment format="DD-MM-YYYY" style={{ color: '#8f9192' }}>
              {user.created_at}
            </Moment>
          </Typography>
        </div>

        <div
          style={{ display: 'flex', flexDirection: 'column', margin: '1rem 0' }}
        >
          <Typography
            variant="h5"
            className={classes.textWrapper}
            color="secondary"
          >
            Current Page
          </Typography>
          <Typography
            variant="h5"
            className={classes.textWrapper}
            color="secondary"
          >
            No. of Posts
          </Typography>

          <Typography
            variant="h5"
            className={classes.textWrapper}
            style={{
              color: '#521010',
            }}
          >
            <Moment format="DD-MM-YYYY" style={{ color: '#8f9192' }}>
              {user.updated_at}
            </Moment>
          </Typography>
        </div>
      </div>
      <hr />
      <div style={{ marginTop: '3rem' }}>
        <Typography variant="h6" className={classes.TitleWrapper}>
          {' '}
          User Posts{' '}
        </Typography>
        <Typography
          variant="caption"
          className={classes.textWrapper}
          color="secondary"
        >
          {' '}
          Lorem idgdgjdgkg{' '}
        </Typography>
      </div>
      <div>
        {posts.length > 0 ? (
          <CustomTable
            data={posts}
            totalData={posts.length}
            onMoreDataRequired={handleMoreDataRequired}
            handleOnRowClick={hanldeOnPostRowClick}
            titles={titles}
            currentPage="posts"
          />
        ) : (
          <p> This User didn't post yet? </p>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getPostsStartsAction: (userId) => dispatch(getPostsStarts(userId)),
});

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
