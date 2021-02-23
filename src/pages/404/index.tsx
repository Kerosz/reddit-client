import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Layout from '../../components/Layout';
import noMatchStyles, { TStyleProps } from './404.styles';

const NoMatch: React.FC<TStyleProps> = ({ classes }) => {
  return (
    <Layout>
      <div className={classes.root}>
        <h2>Looks like you are lost</h2>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIosIcon />}
          component={Link}
          to="/"
        >
          Go Home
        </Button>
        <img
          src={`${process.env.PUBLIC_URL}/images/404.png`}
          alt="Sailer on a 404 mast"
        />
      </div>
    </Layout>
  );
};

export default withStyles(noMatchStyles)(NoMatch);
