import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

class Section extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <>
        <h2 className={css.feedback__title}>{title}</h2>
        {children}
      </>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};

export default Section;
