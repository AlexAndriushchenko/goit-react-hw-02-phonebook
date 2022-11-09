import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm ";
import ContactList from "./ContactList/ContactList";
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
    filter: '',
  };

  addContact = data => { 
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    for (const contact of this.state.contacts)
    {
      if (contact.name === data.name) {
        window.alert(`${contact.name} is already in contacts.`);
        return;
      }   
    }
    
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),  
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

    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
     
    return (<>   
        <h1>Phonebook</h1>
        <ContactForm onSubmitData={this.addContact} />
      
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/> 
      <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />     
    </>);
  }
}
  
export default App;
