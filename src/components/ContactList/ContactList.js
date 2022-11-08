import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <div>
        <ul className={css.contact_list}>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name} {number}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
