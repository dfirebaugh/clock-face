import React from "react";
import Box from "./Box";
import withStyles from "../Contexts/withStyles";

const styles = theme =>
  theme && {
    box: {
      //   background: theme.primary.color, //TODO: fix this -- this is working due to conditional on line 30
      width: 100,
      height: 100,
      marginRight: "2vw",
      marginTop: "2vw"
    },
    FlexBox: {
      width: "400px",
      display: "flex",
      flexWrap: "wrap"
    }
  };

const ElevenBoxes = props => {
  const { hour, minutes, classes } = props;
  return (
    <div style={classes.FlexBox}>
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
