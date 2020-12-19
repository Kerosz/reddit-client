import React from 'react';
import { Container, withStyles } from '@material-ui/core';
import footerStyles, { StyleProps } from './footer.styles';

type Props = {
  width?: 'lg' | 'xs' | 'sm' | 'md' | 'xl' | undefined;
};

type InfoItem = {
  label: string;
  link: string;
  target?: true | false | null | undefined;
};

const footerLinks: InfoItem[] = [
  {
    label: 'About',
    link: 'https://github.com/Kerosz/reddit-client',
    target: true,
  },
  {
    label: 'License/Legal',
    link: 'https://github.com/Kerosz/reddit-client/blob/main/LICENSE',
    target: true,
  },
  {
    label: 'Issues',
    link: 'https://github.com/Kerosz/reddit-client/issues',
    target: true,
  },
  {
    label: 'Project Board',
    link: 'https://github.com/Kerosz/reddit-client/projects',
    target: true,
  },
  {
    label: 'Backlog',
    link: 'https://github.com/Kerosz/reddit-client/milestone/1',
    target: true,
  },
];

const Footer: React.FC<Props & StyleProps> = ({ width = 'lg', classes }) => (
  <footer className={classes.root}>
    <Container maxWidth={width}>
      <ul aria-label="footer list">
        {footerLinks.map(
          (item: InfoItem): JSX.Element =>
            item.target ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.item}
              >
                <li>{item.label}</li>
              </a>
            ) : (
              <a href={item.link} className={classes.item}>
                <li>{item.label}</li>
              </a>
            ),
        )}
      </ul>
    </Container>
  </footer>
);

export default withStyles(footerStyles)(Footer);
