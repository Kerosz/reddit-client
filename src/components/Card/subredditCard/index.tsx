import React from 'react';
import { Link } from 'react-router-dom';
import {
  withStyles,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
  Avatar,
  Chip,
} from '@material-ui/core';
import ReplyAllIcon from '@material-ui/icons/ReplyAll';
import subredditCardStyles, { StyleProps } from './subredditCard.styles';
import { fd } from '../../../helpers';

export type TSubredditData = {
  title: string;
  display_name: string;
  display_name_prefixed: string;
  primary_color: string;
  key_color: string;
  description: string;
  public_description: string;
  subscribers: string;
  header_title: string;
  banner_img: string;
  icon_img: string;
  url: string;
  created_utc: number;
};

export type SubredditDataProps = {
  data?: TSubredditData;
};

const SubredditCard: React.FC<StyleProps & SubredditDataProps> = ({
  classes,
  data,
}): React.ReactElement | null => {
  if (!data) return null;

  const shortDescription =
    data.public_description || data.description.split('\n')[0];

  const headerPreview =
    data.banner_img ||
    `${process.env.PUBLIC_URL}/images/subreddit_placeholder.png`;

  const timeSinceCreated = fd.getTimeFromNow(data.created_utc, true);
  const formatedSubscribers = fd.shortenLargeNumber(data.subscribers);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={data.icon_img} alt={data.title} />
        }
        title={data.display_name_prefixed}
        subheader={`a community for ${timeSinceCreated}`}
        component={Link}
        to={`/subreddit/${data.display_name}`}
        className={classes.header}
      />
      <CardMedia
        className={classes.media}
        image={headerPreview}
        title={data.title}
        component={Link}
        to={`/subreddit/${data.display_name}`}
      />
      <CardContent>
        <Chip
          variant="outlined"
          color="primary"
          label={`${formatedSubscribers} subscribers`}
        />
        <div className={classes.body}>
          <Typography variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {shortDescription}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          aria-label="browse subreddit"
          startIcon={<ReplyAllIcon />}
          component={Link}
          to={`/subreddit/${data.display_name}`}
        >
          Browse subreddit
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(subredditCardStyles)(SubredditCard);
