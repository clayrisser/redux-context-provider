import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _ from 'lodash';
import { Provider, connect } from 'react-redux';
import { compose } from 'redux';
import ReduxContextInjector from './ReduxContextInjector';

export default class ReduxContext extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    context: PropTypes.object,
    // eslint-disable-next-line react/forbid-prop-types
    actions: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    store: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
  };
  static defaultProps = {
    context: {}
  };

  componentWillMount() {
    const { store, context, actions } = this.props;
    this.context = { ...context, store };
    const contextTypes = {};
    this.ComposedReduxContextInjector = compose(
      connect(state => state, this.props.actions)
    )(ReduxContextInjector);
    _.each(_.keys(this.context), key => {
      contextTypes[key] = PropTypes[this.getPropType(this.context[key])];
    });
    _.each(_.keys(actions), key => {
      contextTypes[key] = PropTypes[this.getPropType(actions[key])];
    });
    const state = store.getState();
    this.reduxStateKeys = _.keys(state);
    _.each(this.reduxStateKeys, key => {
      contextTypes[key] = PropTypes[this.getPropType(state[key])];
    });
    this.ComposedReduxContextInjector.WrappedComponent.childContextTypes = contextTypes;
  }

  getPropType(variable) {
    if (_.isString(variable)) {
      return 'string';
    } else if (_.isArray(variable)) {
      return 'array';
    } else if (_.isFunction(variable)) {
      return 'func';
    }
    return typeof variable;
  }

  render() {
    const { actions, store } = this.props;
    const { ComposedReduxContextInjector } = this;
    return (
      <Provider store={store}>
        <ComposedReduxContextInjector
          context={this.context}
          actions={actions}
          reduxStateKeys={this.reduxStateKeys}
        >
          {this.props.children}
        </ComposedReduxContextInjector>
      </Provider>
    );
  }
}
