import React from 'react';
import { Link } from 'react-router-dom';
import {
  withStyles,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import capitalize from 'lodash/capitalize';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import DescriptionIcon from '@material-ui/icons/Description';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import Panel from '../panel';
import sidebarStyles, { StyleProps } from './sidebar.styles';
import useDataWithMeta from '../../../hooks/useDataWithMeta';
import { fd } from '../../../helpers';

const filterOptions: Option[] = [
  { name: 'all', path: '/', icon: <DynamicFeedIcon /> },
  { name: 'hot', path: '/filter/hot', icon: <WhatshotIcon /> },
  { name: 'new', path: '/filter/new', icon: <DescriptionIcon /> },
  { name: 'rising', path: '/filter/rising', icon: <TrendingUpIcon /> },
  { name: 'top', path: '/filter/top', icon: <EqualizerIcon /> },
];

type Option = {
  name: string;
  path: string;
  icon: JSX.Element;
};

type SubredditProps = {
  id: string;
  display_name: string;
  icon_img: string;
  subscribers: number;
};

type Props = {
  filter?: true | false | null;
  content?: React.ReactNode | React.ReactElement | HTMLElement | string | null;
};

const SidebarBase: React.FC<Props & StyleProps> = ({
  filter,
  content,
  classes,
}) => {
  const subredditUrl = `https://www.reddit.com/subreddits/.json`;

  const { result: subreddits, isLoading } = useDataWithMeta(subredditUrl);

  return (
    <aside
      className={classes.sidebar}
      aria-label="Extra content about categories and ads"
    >
      {content && content}
      {filter && (
        <List aria-label="Reddit category list">
          {filterOptions.map(
            (option: Option): JSX.Element => (
              <Link className={classes.link} to={option.path} key={option.name}>
                <ListItem className={classes.listItem} button>
                  <ListItemIcon>{option.icon}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listText }}
                    primary={capitalize(option.name)}
                  />
                </ListItem>
              </Link>
            ),
          )}
        </List>
      )}
      <Panel
        aria-label="Featired Subreddits"
        title="Featured Subreddits"
        content={
          <List>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              subreddits.slice(0, 5).map((data: SubredditProps) => (
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
                    secondary={`${fd.addNumberSeparator(
                      data.subscribers,
                    )} subscribers`}
                  />
                </ListItem>
              ))
            )}
          </List>
        }
        action={
          <Button component={Link} to="/subreddits" size="small">
            All Subreddits
          </Button>
        }
      />

      <Panel
        aria-label="Advertisement"
        title="Advertisement"
        content={
          <img
            src={`${process.env.PUBLIC_URL}/images/ad.png`}
            alt="Burger advertisement"
            className={classes.ad}
          />
        }
      />
    </aside>
  );
};

export default withStyles(sidebarStyles)(SidebarBase);
