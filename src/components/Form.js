import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props.classes,
      title: "",
      body: "",
    };
  }

  changeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  changeBody = (e) => {
    this.setState({
      body: e.target.value,
    });
  };

  clear = () => {
    this.setState({
      title: "",
      body: "",
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addData(this.state.title, this.state.body);
    this.clear();
  };

  render() {
    const { classes } = this.state;
    return (
      <Container maxWidth="sm">
        <Paper className={classes.newContainer}>
          <Typography
            component="h3"
            variant="h4"
            align="center"
            color="textSecondary"
          >
            i'm hmming about...
          </Typography>
          <form onSubmit={this.onSubmit}>
            <TextField
              required
              className={classes.formInput}
              id="outlined-required"
              label="Title"
              variant="outlined"
              onChange={this.changeTitle}
              value={this.state.title}
            />
            <TextField
              id="outlined-multiline-static"
              className={classes.formInput}
              label="Main content"
              multiline
              rows={5}
              variant="outlined"
              onChange={this.changeBody}
              value={this.state.body}
            />
            <div className={classes.flexEnd}>
              <Button
                variant="outlined"
                className={classes.button}
                color="primary"
                onClick={this.clear}
              >
                Clear
              </Button>
              <Button
                type="submit"
                variant="contained"
                className={classes.button}
                color="primary"
              >
                Submit
              </Button>
            </div>
          </form>
        </Paper>
      </Container>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
  addData: PropTypes.func.isRequired,
};

export default Form;
