import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardImage from '../../assets/card-image.jpg';
import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: 'whitesmoke',
    padding: '1rem',
  },
  mediaWrapper: {
    display: 'flex',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  media: {
    height: 200,
    width: 280,
    display: 'flex',

    [theme.breakpoints.down('md')]: {
      height: 200,
      width: '100%',
    },
  },
  TitleWrapper: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '16px',
    margin: 0,

    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  },
  textWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '1rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  },
  bodyWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyContent: {
    fontSize: '17px',
  },
}));

const PostCard = ({ post }) => {
  const classes = useStyles();

  console.log('post: ', post);

  return (
    <Card className={classes.root}>
      <div className={classes.mediaWrapper}>
        <div>
          <p className={classes.TitleWrapper}>{post.title}</p>

          <Typography color="secondary" className={classes.textWrapper}>
            <Moment format=" D MMMM ">{post.updated_at}</Moment>
            <p style={{ margin: '0 0.25rem' }}> At </p>{' '}
            <Moment format=" HH:MM ">{post.updated_at}</Moment>
          </Typography>
          <CardMedia
            className={classes.media}
            image={CardImage}
            title="Contemplative Reptile"
          />
        </div>

        <div className={classes.bodyWrapper} style={{ width: '100%' }}>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.bodyContent}
            component="p"
          >
            {post.body}
          </Typography>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
