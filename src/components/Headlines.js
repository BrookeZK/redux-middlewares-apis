import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';

class Headlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  incrementCounter = () => {
    this.props.dispatch({type: 'INCREMENT_COUNTER'});
    // this.setState({counter: this.state.counter + 1});
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoaded, headlines } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Headlines</h1>
          <h2>{this.props.count}</h2>
          <button onClick={this.incrementCounter}>count!</button>
          <ul>
            {headlines.map((headline, index) =>
              <li key={index}>
                <h3>{headline.title}</h3>
                <p>{headline.abstract}</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}

const moopStateToProps = state => {
  return {
    headlines: state.headlines,
    isLoading: state.isLoading,
    error: state.error,
    count: state.count
  }
}

export default connect(moopStateToProps)(Headlines);