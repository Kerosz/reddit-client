import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import DescriptionIcon from '@material-ui/icons/Description';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { capitalize } from 'lodash';
import sidebarStyles, { StyleProps } from './sidebar.styles';

type Category = {
  name: string;
  icon: JSX.Element;
};

const Sidebar: React.FC<StyleProps> = ({ classes }) => {
  const categories: Category[] = [
    { name: 'hot', icon: <WhatshotIcon /> },
    { name: 'new', icon: <DescriptionIcon /> },
    { name: 'rising', icon: <TrendingUpIcon /> },
    { name: 'top', icon: <EqualizerIcon /> },
  ];

  return (
    <div className={classes.sidebar}>
      <List component="nav" aria-label="main mailbox folders">
        {categories.map(
          (category: Category): JSX.Element => (
            <ListItem button key={category.name}>
              <ListItemIcon>{category.icon}</ListItemIcon>
              <ListItemText primary={capitalize(category.name)} />
            </ListItem>
          ),
        )}
      </List>
      <div className={classes.card}>
        <h3 className={classes.title}>Featured Subreddits</h3>
        <Divider />
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>R</Avatar>
            </ListItemAvatar>
            <ListItemText primary="r/Genshin Impact" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>R</Avatar>
            </ListItemAvatar>
            <ListItemText primary="r/Valorante" />
          </ListItem>
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
