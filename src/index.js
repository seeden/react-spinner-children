import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import Spin from 'spin.js';

export default class Spinner extends Component {
  static propTypes = {
    className: PropTypes.string,
    config: PropTypes.object.isRequired,
    loaded: PropTypes.bool.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    config: {},
    loaded: false,
    className: 'loader',
  };

  componentDidMount() {
    this.updateSpinner();
  }

  componentDidUpdate() {
    this.updateSpinner();
  }

  componentWillUnmount() {
    if (this.spinner) {
      this.spinner.stop();
      this.spinner = null;
    }
  }

  updateSpinner() {
    const loaded = this.props.loaded;

    if (!loaded && !this.spinner) {
      this.spinner = new Spin(this.props.config);
      this.spinner.spin(this.refs.loader);
    } else if (loaded && this.spinner) {
      this.spinner.stop();
      this.spinner = null;
    }
  }

  render() {
    const { loaded, className } = this.props;

    if (loaded) {
      return this.props.children
       ? Children.only(this.props.children)
       : null;
    }

    return <div className={className} ref="loader" />;
  }
}
