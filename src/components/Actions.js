import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    textAlign: 'center'
  }
});

const Actions = (props) => {
  const classes = useStyles();
  
  return (
    <section
      className={classes.container}
      {...props}
    />
  );
};

export default Actions;
