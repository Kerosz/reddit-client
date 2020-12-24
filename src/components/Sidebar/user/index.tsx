import React from 'react';
import { withStyles, Tooltip } from '@material-ui/core';
import SidebarBase from '../sidebarBase';
import Panel from '../panel';
import userStyles, { TStyleProps } from './user.styles';
import { fd } from '../../../helpers';

export type TUserData = {
  name: string;
  awardee_karma: string;
  comment_karma: number;
  total_karma: number;
  created_utc: number;
};

const User: React.FC<{ data: TUserData } & TStyleProps> = ({
  data,
  classes,
}) => {
  const formatedCreated = fd.getCreatedTime(data.created_utc);
  const formatedSince = fd.getTimeFromNow(data.created_utc);

  return (
    <SidebarBase
      content={
        <Panel
          title={`About ${data.name}`}
          content={
            <div className={classes.content}>
              <div className={classes.stats}>
                <Tooltip
                  title={`${data.awardee_karma} Karma`}
                  arrow
                  placement="bottom"
                >
                  <div className={classes.frame} aria-label="Total karma">
                    <h5>Karma</h5>
                    <p>{data.awardee_karma}</p>
                  </div>
                </Tooltip>
                <Tooltip title={formatedSince} arrow placement="bottom">
                  <div className={classes.frame} aria-label="Users online">
                    <h5>Cake day</h5>
                    <p>{formatedCreated}</p>
                  </div>
                </Tooltip>
              </div>
            </div>
          }
          divider={false}
        />
      }
    />
  );
};

export default withStyles(userStyles)(User);
