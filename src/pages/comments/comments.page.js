import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCommsntsStarts } from '../../redux/comments/comments.actions';
import CustomTable from '../../components/table/table.component';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../components/postCard/postCard.components';
import UserCard from '../../components/card/card.component';

const useStyles = makeStyles((theme) => ({
  titleWrapper: {
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'flex',
    marginTop: '1.5rem',
  },
  textWrapper: {
    fontSize: '16px',
    color: '#8f9192',
    display: 'flex',
  },
}));

const CommentPage = ({ location, fetchCommentsStartsAction, comments }) => {
  const { postId } = useParams();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    fetchCommentsStartsAction(postId);
  }, [postId, fetchCommentsStartsAction]);

  const handleOnMoreCommentsRequires = () => {
    console.log('there is no more data');
  };

  const handleOnCommentRowClick = () => {
    console.log('we are supposed to do nothing');
  };

  const titles = [
    '#',
    'Name',
    'Email Address',
    'Body',
    'Created Date',
    'Updated Date',
  ];

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
        onClick={() =>
          history.push({
            pathname: `/${postId}`,
            state: {
              row: location.state.user,
            },
          })
        }
      >
        Back{' '}
        <Typography variant="h5" display="inline">
          {' '}
          &#11178;{' '}
        </Typography>
      </button>

      <hr />
      <UserCard user={location.state.user} />
      <PostCard post={location.state.row} />
      <div>
        <Typography className={classes.titleWrapper}>Comments</Typography>
        <Typography className={classes.textWrapper}>
          djhgjkdghjkd ddjgkldsg dgd g
        </Typography>
      </div>
      <CustomTable
        data={comments}
        totalData={comments.length}
        onMoreDataRequired={handleOnMoreCommentsRequires}
        handleOnRowClick={handleOnCommentRowClick}
        titles={titles}
        currentPage="comments"
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCommentsStartsAction: (postId) => dispatch(fetchCommsntsStarts(postId)),
});

const mapStateToProps = (state) => ({
  comments: state.comments.comments,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentPage);
