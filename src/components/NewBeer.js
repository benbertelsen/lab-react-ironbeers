


//NOTE FOR LABS on FRIDAY 16th of JULY
//Threee components, and routes. We has seen GET with REACT and APIs, but not POST. We need to do:
// handleSubmitForm async = () => {
// const response = await axios.post(**URL GOES HERE**, this.state) 
//}

//page to show a form where a user can create new beers

import React from 'react';
import axios from "axios";

//This is as we know it with classes
class NewBeer extends React.Component {
    state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: '',
    };

//This handleChange-function will work for every form 👍 (but not if we have a checkbox)) "e" is sometimes called "event".
handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };


//PURPOSE to submit our input to the form and get it displayed to the user 👇 
//...with .preventDefault so the page does not reload but smoothly updates. Some of this is new. Such as history.push('/');
    
handleFormSubmit = async (event) => {
    event.preventDefault();
    await axios.post('https://ih-beers-api2.herokuapp.com/beers/new',this.state
    );
    this.props.history.push('/');
  };

  render() {
    const {
      name,
      tagline,
      description,
      first_brewed,
      attenuation_level,
      contributed_by,
      brewers_tips,
    } = this.state;
    
    return (
      <form onSubmit={this.handleFormSubmit}>
        <section className="beer-input-form">
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
          />
        </div>

        <div>
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            onChange={this.handleChange}
            value={tagline}
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            onChange={this.handleChange}
            value={description}
          />
        </div>

        <div>
          <label>First Brewed</label>
          <input
            type="text"
            name="first_brewed"
            onChange={this.handleChange}
            value={first_brewed}
          />
        </div>

        <div>
          <label>Brewers Tips</label>
          <input
            type="text"
            name="brewers_tips"
            onChange={this.handleChange}
            value={brewers_tips}
          />
        </div>

        <div>
          <label>Attenuation Level</label>
          <input
            type="text"
            name="attenuation_level"
            onChange={this.handleChange}
            value={attenuation_level}
          />
        </div>

        <div>
          <label>Contributed by</label>
          <input
            type="text"
            name="contributed_by"
            onChange={this.handleChange}
            value={contributed_by}
          />
        </div>
        </section>

        <button type="submit">Add New Beer</button>
      </form>
    );
  }
}
export default NewBeer;