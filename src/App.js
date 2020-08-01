import React from "react";
import PropTypes from "prop-types";
import Form from "./components/Form";
import Title from "./components/Title";
import Display from "./components/Display";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import firebase from "./firebase.js";

const styles = (theme) => ({
  title: {
    margin: theme.spacing("10%", 0, 5),
  },
  newContainer: {
    padding: theme.spacing(3),
    marginBottom: "15%",
  },
  formInput: {
    width: "100%",
    margin: theme.spacing(1, 0, 0, 0),
  },
  button: {
    float: "right",
    margin: theme.spacing(1, 0, 0, 1),
  },
  wordWrap: "break-word",
  display: {
    marginBottom: theme.spacing(8),
  },
  flexEnd: {
    display: "flex", 
    justifyContent: "flex-end"
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref("data");
    itemsRef.on("value", (snapshot) => {
      let allData = snapshot.val();
      let newData = [];
      for (let dataItem in allData) {
        newData.push({
          id: dataItem,
          title: allData[dataItem].title,
          body: allData[dataItem].body,
          time: allData[dataItem].time,
          likes: allData[dataItem].likes
        });
      }
      this.setState({
        data: newData,
      });
    });
  }

  addData = (title, body) => {
    const itemsRef = firebase.database().ref("data");
    const newData = {
      title,
      body,
      time: new Date().getTime(),
      likes: 0
    };
    itemsRef.push(newData);
  };

  removeData = (id) => {
    const itemRef = firebase.database().ref(`/data/${id}`);
    itemRef.remove();
  }

  updateLikes = (id, likes) => {
    const likesItemRef = firebase.database().ref(`/data/${id}`);
    likesItemRef.update({
      likes
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <main>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Title classes={classes} />
          <Form classes={classes} addData={this.addData} />
          <Display classes={classes} data={this.state.data} removeData={this.removeData} updateLikes={this.updateLikes}/>
        </Container>
      </main>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
