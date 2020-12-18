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
import useDataWithMeta from '../../hooks/useDataWithMeta';

type Category = {
  name: string;
  path: string;
  icon: JSX.Element;
};

type Props = {
  type?: 'main' | 'post' | null;
};

const Sidebar: React.FC<Props & StyleProps> = ({ type, classes }) => {
  const subredditUrl = `https://www.reddit.com/subreddits/.json`;

  const categories: Category[] = [
    { name: 'all', path: '/', icon: <DynamicFeedIcon /> },
    { name: 'hot', path: '/filter/hot', icon: <WhatshotIcon /> },
    { name: 'new', path: '/filter/new', icon: <DescriptionIcon /> },
    { name: 'rising', path: '/filter/rising', icon: <TrendingUpIcon /> },
    { name: 'top', path: '/filter/top', icon: <EqualizerIcon /> },
  ];

  const { result: subreddits } = useDataWithMeta(subredditUrl);

  if (type === 'post') {
    return (
      <aside
        className={classes.sidebar}
        aria-label="Extra content about categories and ads"
      >
        <div className={classes.card}>
          <h3 className={classes.title}>Featured Subreddits</h3>
          <Divider />
          <List>
            {subreddits?.slice(0, 5).map(
              (data: any): JSX.Element => {
                const subCount = String(data.subscribers).replace(
                  /(\d)(?=(\d\d\d)+(?!\d))/g,
                  '$1.',
                );

                return (
                  <ListItem
                    component={Link}
                    button
                    key={data.id}
                    to={`/subreddit/r/${data.display_name}`}
                  >
                    <ListItemAvatar>
                      <Avatar alt={data.display_name} src={data.icon_img} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={`r/${data.display_name}`}
                      secondary={`${subCount} subscribers`}
                    />
                  </ListItem>
                );
              },
            )}
          </List>
          <Divider />
          <CardActions>
            <Button component={Link} to="/subreddits" size="small">
              All Subreddits
            </Button>
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
      </aside>
    );
  }

  return (
    <aside
      className={classes.sidebar}
      aria-label="Extra content about categories and ads"
    >
      <List aria-label="Reddit category list">
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
          {subreddits?.slice(0, 5).map(
            (data: any): JSX.Element => {
              const subCount = String(data.subscribers).replace(
                /(\d)(?=(\d\d\d)+(?!\d))/g,
                '$1.',
              );

              return (
                <ListItem
                  component={Link}
                  button
                  key={data.id}
                  to={`/subreddit/r/${data.display_name}`}
                >
                  <ListItemAvatar>
                    <Avatar alt={data.display_name} src={data.icon_img} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`r/${data.display_name}`}
                    secondary={`${subCount} subscribers`}
                  />
                </ListItem>
              );
            },
          )}
        </List>
        <Divider />
        <CardActions>
          <Button component={Link} to="/subreddits" size="small">
            All Subreddits
          </Button>
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
    </aside>
  );
};

export default withStyles(sidebarStyles)(Sidebar);
