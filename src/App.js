import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

class App extends Component {
  state = {
    iAskedForBoba: false
  }
  askForBoba = () => {
    this.setState({ iAskedForBoba: true });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <div className="Aligner-item Aligner-item--top"></div>
          <Button className="Aligner-item" variant="contained" onClick={this.askForBoba} color={this.state.iAskedForBoba ? "primary" : "secondary" } className={classes.button}>
            {this.state.iAskedForBoba ? "I asked for Boba." : "I need to ask for Boba." }
          </Button>
        <div className="Aligner-item Aligner-item--bottom"></div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);
