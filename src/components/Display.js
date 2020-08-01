import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import moment from "moment";

class Display extends React.Component {
  onDelete = (id) => {
    this.props.removeData(id);
  };

  onLike = (id, likes) => {
    this.props.updateLikes(id, likes + 1);
  };

  render() {
    return (
      <Container maxWidth="md" className={this.props.classes.display}>
        <Grid container spacing={2}>
          {this.props.data.reverse().map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="caption" display="block" gutterBottom>
                    {moment(card.time).format("lll")}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    className={this.props.classes.wordWrap}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                    gutterBottom
                    className={this.props.classes.wordWrap}
                  >
                    {card.body}
                  </Typography>
                  <div className={this.props.classes.flexEnd}>
                    <ButtonGroup
                      variant="text"
                      color="primary"
                      aria-label="text primary button group"
                      size="small"
                    >
                      <Button
                        onClick={this.onLike.bind(this, card.id, card.likes)}
                        size="small"
                      >
                        {"Like".concat(card.likes > 0 ? ` ${card.likes}` : "")}
                      </Button>
                      <Button
                        onClick={this.onDelete.bind(this, card.id)}
                        size="small"
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

Display.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  removeData: PropTypes.func.isRequired,
  updateLikes: PropTypes.func.isRequired,
};

export default Display;
