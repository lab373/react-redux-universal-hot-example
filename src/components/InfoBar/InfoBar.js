import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {load} from 'redux/modules/info';

@connect(
    state => ({info: state.info.data}),
    dispatch => bindActionCreators({load}, dispatch))
export default class InfoBar extends Component {
  static propTypes = {
    info: PropTypes.object,
    load: PropTypes.func.isRequired
  }

  render() {
    const styles = require('./InfoBar.scss');
    return (
      <div className={styles.infoBar + ' well'} pullRight>
        <div className="container">
          2017
        </div>
      </div>
    );
  }
}
