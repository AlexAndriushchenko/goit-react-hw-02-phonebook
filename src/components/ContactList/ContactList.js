import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact} = this.props;
    return (
      <div>
        <ul className={css.contact_list}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={css.contact_item}>
              <p className={css.contact_text}>
                {name} {number}
              </p>
              <button
                className={css.contact_delbtn}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
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
