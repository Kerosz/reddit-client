import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import DescriptionIcon from '@material-ui/icons/Description';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { capitalize } from 'lodash';
import sidebarStyles, { StyleProps } from './sidebar.styles';

type Category = {
  name: string;
  path: string;
  icon: JSX.Element;
};

const Sidebar: React.FC<{ result: any } & StyleProps> = ({
  result,
  classes,
}) => {
  const categories: Category[] = [
    { name: 'all', path: '/', icon: <DynamicFeedIcon /> },
    { name: 'hot', path: '/hot', icon: <WhatshotIcon /> },
    { name: 'new', path: '/new', icon: <DescriptionIcon /> },
    { name: 'rising', path: '/rising', icon: <TrendingUpIcon /> },
    { name: 'top', path: '/top', icon: <EqualizerIcon /> },
  ];

  return (
    <div className={classes.sidebar}>
      <List component="nav" aria-label="main mailbox folders">
        {categories.map(
          (category: Category): JSX.Element => (
            <Link
              className={classes.link}
              to={category.path}
              key={category.name}
            >
              <ListItem className={classes.listItem} button>
                <ListItemIcon>{category.icon}</ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listText }}
                  primary={capitalize(category.name)}
                />
              </ListItem>
            </Link>
          ),
        )}
      </List>
      <div className={classes.card}>
        <h3 className={classes.title}>Featured Subreddits</h3>
        <Divider />
        <List>
          {result?.data.children.slice(0, 5).map(
            ({ data }: any): JSX.Element => {
              const subCount = String(data.subreddit_subscribers).replace(
                /(\d)(?=(\d\d\d)+(?!\d))/g,
                '$1.',
              );

              return (
                <ListItem button key={data.id}>
                  <ListItemAvatar>
                    <Avatar alt={data.subreddit} src={data.thumbnail} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`r/${data.subreddit}`}
                    secondary={`Subscribers: ${subCount}`}
                  />
                </ListItem>
              );
            },
          )}
        </List>
        <Divider />
        <CardActions>
          <Button size="small">All Categories</Button>
          <Button size="small">Near You</Button>
        </CardActions>
      </div>

      <div className={classes.card}>
        <h3 className={classes.title}>Addvertisement</h3>
        <Divider />
        <img
          src={`${process.env.PUBLIC_URL}/images/ad.png`}
          alt="Burger addvertisement"
          className={classes.ad}
        />
      </div>
    </div>
  );
};

export default withStyles(sidebarStyles)(Sidebar);
