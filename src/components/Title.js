import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

function Title(props) {
  return (
    <div className={props.classes.title}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
      >
        hmm
      </Typography>
      <Typography
        component="h5"
        variant="h6"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        what's on your mind?
      </Typography>
    </div>
  );
}

Title.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default Title;
