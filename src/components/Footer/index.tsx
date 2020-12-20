import React from 'react';
import { Container, withStyles } from '@material-ui/core';
import footerStyles, { StyleProps } from './footer.styles';

type Props = {
  width?: 'lg' | 'xs' | 'sm' | 'md' | 'xl' | undefined;
};

type InfoItem = {
  id: number;
  label: string;
  link: string;
  target?: true | false | null | undefined;
};

const footerLinks: InfoItem[] = [
  {
    id: 1,
    label: 'About',
    link: 'https://github.com/Kerosz/reddit-client/blob/main/README.md',
    target: true,
  },
  {
    id: 2,
    label: 'License/Legal',
    link: 'https://github.com/Kerosz/reddit-client/blob/main/LICENSE',
    target: true,
  },
  {
    id: 3,
    label: 'Issues',
    link: 'https://github.com/Kerosz/reddit-client/issues',
    target: true,
  },
  {
    id: 4,
    label: 'Project Board',
    link: 'https://github.com/Kerosz/reddit-client/projects',
    target: true,
  },
  {
    id: 5,
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
                key={`${item.id}-${item.label}`}
              >
                <li>{item.label}</li>
              </a>
            ) : (
              <a
                href={item.link}
                className={classes.item}
                key={`${item.id}-${item.label}`}
              >
                <li>{item.label}</li>
              </a>
            ),
        )}
      </ul>
    </Container>
  </footer>
);

export default withStyles(footerStyles)(Footer);
