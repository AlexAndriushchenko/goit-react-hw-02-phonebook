import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <>
        <label className={css.filter_label}>
          Find contacts by name
          <input type="text" value={value} onChange={onChange} />
        </label>
      </>
    );
  }
}

// Section.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.object,
// };

export default Filter;
