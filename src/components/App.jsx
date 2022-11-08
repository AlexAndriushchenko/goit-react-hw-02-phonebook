import React, { Component } from "react";
import { nanoid } from 'nanoid';
import Section from "./Section/Section";
import PhonebookForm from "./PhonebookForm/PhonebookForm";

import ContactList from "./ContactList/ContactList";
// import newContacts from "./Contacts";
import Filter from "./Filter/Filter";

export class App extends Component {
  
  state = {
    //contacts: [],
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    number: '',
    filter: '',
  };

  
  addContact = data => { 
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };
 
  changeFilter = evt => {
    this.setState({filter: evt.currentTarget.value})
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  render() {

    const { contacts, name, number, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
     
    return (<>
      <Section title="Phonebook">
        <PhonebookForm
          // contacts={contacts}
          name={name}
          number={number}
          onSubmitData={this.addContact} />
      </Section>

      <Filter value={filter} onChange={this.changeFilter}/>

       <Section title="Contacts">
        {/* <ContactList contacts={contacts} /> */}
         <ContactList contacts={visibleContacts} />
        </Section>
    </>);

  }
}
  
export default App;
