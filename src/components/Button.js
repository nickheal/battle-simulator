import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(({
  palette,
  typography
}) => ({
  button: {
    background: palette.primary,
    border: 0,
    color: '#fff',
    cursor: 'pointer',
    fontFamily: typography.fontFamily,
    fontSize: 36,
    padding: [8, 24],
    transition: 'background 100ms ease-in-out',

    '&:hover, &:focus': {
      background: palette.dark
    }
  }
}));

const Button = (props) => {
  const classes = useStyles();

  return (
    <button
      className={classes.button}
      {...props}
    />
  );
};

export default Button;