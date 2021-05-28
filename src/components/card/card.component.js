import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 18,
    fontWeight: 'bold',

    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    width: '90px',
    height: '90px',

    [theme.breakpoints.down('md')]: {
      width: '50px',
      height: '50px',
    },
  },
  emailWrapper: {
    fontSize: 16,
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  },
  greenColor: {
    color: 'green',
  },
  statusWrapper: {
    fontSize: '16px',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
    },
  },
}));

const UserCard = ({ user }) => {
  const classes = useStyles();

  return (
    <div>
      <CardContent
        style={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
          padding: '16px 0',
        }}
      >
        <Avatar
          src="/broken-image.jpg"
          display="inline"
          className={classes.avatar}
        />
        <span
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            marginLeft: '15px',
          }}
        >
          <Typography
            className={classes.title}
            variant="h4"
            gutterBottom
            style={{ display: 'flex' }}
          >
            {user.name}
          </Typography>
          <Typography
            variant="h5"
            display="inline"
            className={classes.emailWrapper}
            component="h2"
            color="secondary"
          >
            {user.email}
          </Typography>
          <Typography
            variant="h5"
            display="inline"
            className={`${classes.statusWrapper} ${
              user.status === 'Active' && classes.greenColor
            }`}
            component="h2"
            color="secondary"
          >
            • {user.status}
          </Typography>
        </span>
      </CardContent>
    </div>
  );
};

export default UserCard;
