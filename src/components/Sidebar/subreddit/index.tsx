import React from 'react';
import { withStyles, Tooltip } from '@material-ui/core';
import CakeIcon from '@material-ui/icons/Cake';
import SidebarBase from '../sidebarBase';
import Panel from '../panel';
import subredditStyles, { TStyleProps } from './subreddit.styles';
import { fd } from '../../../helpers';

export type TSidebarData = {
  display_name: string;
  public_description: string;
  active_user_count: number;
  subscribers: number;
  created_utc: number;
};

const Subreddit: React.FC<{ data: TSidebarData } & TStyleProps> = ({
  data,
  classes,
}) => {
  const formatedSubs = fd.shortenLargeNumber(data.subscribers);
  const formatedActive = fd.shortenLargeNumber(data.active_user_count);
  const formatCreated = fd.getCreatedTime(data.created_utc);
  const formatSinceCreated = fd.getTimeFromNow(data.created_utc);

  return (
    <SidebarBase
      content={
        <Panel
          title={`About ${data.display_name} Community`}
          content={
            <div className={classes.content}>
              <p className={classes.desc}>{data.public_description}</p>
              <div className={classes.stats}>
                <Tooltip
                  title={`${formatedSubs} total subscribers`}
                  arrow
                  placement="bottom"
                >
                  <div className={classes.frame} aria-label="Total subscribers">
                    <h5>{formatedSubs}</h5>
                    <p>Subscribers</p>
                  </div>
                </Tooltip>
                <Tooltip
                  title={`${formatedActive} users online`}
                  arrow
                  placement="bottom"
                >
                  <div className={classes.frame} aria-label="Users online">
                    <h5>{formatedActive}</h5>
                    <p>Online</p>
                  </div>
                </Tooltip>
              </div>
            </div>
          }
          action={
            <time className={classes.created}>
              <CakeIcon fontSize="small" />{' '}
              <Tooltip title={formatSinceCreated} arrow placement="bottom">
                <p>Created {formatCreated}</p>
              </Tooltip>
            </time>
          }
        />
      }
    />
  );
};

export default withStyles(subredditStyles)(Subreddit);
