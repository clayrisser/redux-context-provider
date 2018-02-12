import PropTypes from 'prop-types';
import { Component, cloneElement, Children } from 'react';
import _ from 'lodash';

export default class ReduxContextInjector extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    actions: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    context: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    reduxStateKeys: PropTypes.array.isRequired
  };

  getChildContext() {
    const context = {
      ...this.props.context,
      ...this.props.actions
    };
    _.each(this.props.reduxStateKeys, key => {
      context[key] = this.props[key];
    });
    return context;
  }

  render() {
    return cloneElement(Children.only(this.props.children), {});
  }
}
