import React, { Component, Fragment } from 'react';
import Section from './components/section';
import Container from './components/container';
import Form from './components/form';
import Contacts from './components/contacts';
import Filter from './components/filter';
import dataGenerator from './helpers/dataGenerator';
import contactsData from './data/contacts.json';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: dataGenerator(contactsData),
    filter: '',
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;
    const isContactValid = this.validateContact(data, contacts);

    if (isContactValid) {
      data.id = nanoid();

      this.setState(({ contacts }) => ({
        contacts: [data, ...contacts],
      }));
    }
  };

  validateContact = (data, contacts) => {
    if (contacts.some(({ name }) => name === data.name)) {
      alert(`${data.name} is already in contacts!`);
      return false;
    } else if (contacts.some(({ number }) => number === data.number)) {
      alert(`${data.number} is already in contacts!`);
      return false;
    } else return true;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleSearch = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getFiltredContacts() {
    const { contacts, filter } = this.state;
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(person =>
      person.name.toLowerCase().includes(lowerCaseFilter),
    );
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFiltredContacts();

    return (
      <Fragment>
        <Section title="Phonebook">
          <Container>
            <Form onSubmit={this.formSubmitHandler} />
          </Container>
        </Section>

        <Section title="Contacts">
          <Container>
            <Filter value={filter} onChange={this.handleSearch} />
            <Contacts
              contacts={filteredContacts}
              onDeleteButtonClick={this.deleteContact}
            />
          </Container>
        </Section>
      </Fragment>
    );
  }
}

export default App;
