import React from "react";
import withStyles from "../Contexts/withStyles";

const styles = theme =>
  theme && {
    minutes: {
      color: theme.primary.contrastText,
      fontSize: "calc( 55px + (24 - 16) * (100vw - 400px) / (800 - 400) )",
      placeSelf: "center"
    }
  };

const Minutes = props => (
  <h1 style={props.classes.minutes} className="minutes">
    {props.minutes}
  </h1>
);

const MinutesWithTheme = withStyles(styles)(Minutes);
const Box = props => {
  return (
    <div style={props.style} className="box">
      <MinutesWithTheme {...props} />
    </div>
  );
};

export default Box;
