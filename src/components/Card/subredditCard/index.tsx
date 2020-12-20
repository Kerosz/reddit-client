import React from 'react';
import { Link } from 'react-router-dom';
import {
  withStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Chip,
  Avatar,
} from '@material-ui/core';
import subredditCardStyles, { StyleProps } from './subredditCard.styles';

export type SubredditDataProps = {
  data?: {
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
};

const SubredditCard: React.FC<StyleProps & SubredditDataProps> = ({
  classes,
  data,
}): React.ReactElement | null => {
  if (!data) return null;

  let shortDescription;
  if (data.public_description) {
    shortDescription = data.public_description;
  } else {
    [shortDescription] = data.description.split('\n');
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Chip
          avatar={<Avatar src={data.icon_img} alt={data.title} />}
          label={data.display_name_prefixed}
          component={Link}
          to={`/subreddit${data.url}`}
          style={{
            backgroundColor: data.primary_color ? data.primary_color : '',
            color: data.key_color ? data.key_color : 'inherit',
          }}
          clickable
        />
        <Typography variant="h5" component="h2">
          {data.title}
        </Typography>
        <Typography variant="body2" component="p">
          {shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/subreddit${data.url}`}>
          Browse Subreddit
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(subredditCardStyles)(SubredditCard);
