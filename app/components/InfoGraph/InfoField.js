import React, { Component, PropTypes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import classnames from 'classnames';
import style from './InfoField.css';

export default class InfoField extends Component {

  static propTypes = {
    // infoGraph: PropTypes.object.isRequired,
    // editInfoGraph: PropTypes.func.isRequired,
    // completeInfoGraph: PropTypes.func.isRequired
    title: PropTypes.object.isRequired,
    type: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  renderIcon(type) {
    let icon = '';
    if (type === 'rep') {
      icon = 'address-book';
    } else if (type === 'prospect') {
      icon = 'address-book';
    }
  }

  render() {
    const { title, type } = this.props;

    return (
      <div className={style.main}>
        <FontAwesomeIcon icon={icon} />
        <span>{ title }</span>
      </div>
    );
  }
}
