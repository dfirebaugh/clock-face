import React from "react";
import Box from "./Box";
import withStyles from "../Contexts/withStyles";

const styles = theme =>
  theme && {
    box: {
      //   background: theme.primary.color, //TODO: fix this -- this is working due to conditional on line 30
      display: "grid",
      width: "20vw",
      height: "20vh"
    },
    wrapper: {
      marginLeft: "10vw",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: "1vw",
      rowGap: "7px",
      gridAutoRows: "22vh",
      width: "80%",
      height: "70%"
    }
  };

const ElevenBoxes = props => {
  const { hour, minutes, classes } = props;
  return (
    <div style={classes.wrapper}>
      {[...Array(12)].map((x, i) => (
        <Box
          key={i}
          style={{
            ...classes.box,
            background: i + 1 === hour ? "none" : "#BF607B"
          }}
          minutes={i + 1 === hour && minutes}
          i={i + 1}
        />
      ))}
    </div>
  );
};

export default withStyles(styles)(ElevenBoxes);
