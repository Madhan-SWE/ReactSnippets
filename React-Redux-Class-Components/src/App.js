import { Component } from "react";
import { connect } from "react-redux";
import * as contactActions from "../src/components/Actions/contactActions";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      name: ""
    };
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let contact = {
      name: this.state.name
    };
    this.props.createContact(contact);
    console.log(this.state.name);
    this.setState({
      name: ""
    });
  }

  handleDelete(idx) {
    this.props.deleteContact(idx);
    console.log(idx);
  }

  render() {
    return (
      <div>
        <h1>Contacts Application</h1>
        <hr />
        <h2> Contacts List </h2>
        <ul>
          {this.props.contacts.map((contact, i) => (
            <li>
              {i} - {contact.name}
              <button onClick={(e) => this.handleDelete(i)}> Remove </button>
            </li>
          ))}
        </ul>

        <h2> Add contact </h2>
        <h3> {this.state.name} </h3>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input type="submit" onClick={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  };
};

const mapDispatchStateToProps = (dispatch) => {
  return {
    createContact: (contact) => dispatch(contactActions.createContact(contact)),
    deleteContact: (idx) => dispatch(contactActions.removeContact(idx))
  };
};

export default connect(mapStateToProps, mapDispatchStateToProps)(App);
