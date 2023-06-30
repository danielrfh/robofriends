// This is the main component of the app. Also called Smart Component
// because it has the state of the app. Initially creared with classes
// then converted to React Hooks.

import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
// import { robots } from "./robots";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

function App() {
  // class App extends Component { <- Classed are replaced by functions

  /*  Constructor is not needed with hooks
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
    console.log("Construtor");
  } */

  const [robots, setRobots] = useState([]);
  const [searchfield, SetSearchfield] = useState("");

  /* Don't need to use lificycle methods like componentDidMount with Hooks
  componentDidMount() {
    this.setState({ robots: robots });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
    console.log("componentDidMount");
  } */

  /* Instead we now use the useEffect() hook to fetch the users from the
  server */
  useEffect(() => {
    // Fill the robots array with the users from the API.
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) /* Get the users from the API
      in the form of a Promise and call json method. */
      .then((users) => setRobots(users)); /* Get second promise with 
      users and fill the array of robots with the users from the API*/
  }, []);

  // Listen for search changes on SearchBox.
  const onSearchChange = (event) => {
    // onSearchChange = (event) => {
    // this.setState({ searchfield: event.target.value }); <- Now we use
    // the function defined with useState()
    SetSearchfield(event.target.value);
    // console.log(this.state.searchfield.toLowerCase());
    // console.log(filteredRobots);
  };

  // render() { <- Don't need render() with  hooks
  // const { robots, searchfield } = this.state; <- No longer needed

  // Create a function that will filter the users based on the searchfield
  // and return the robots that match the searchfield.
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  // console.log("render");
  // Adding a condition in case it take a long time to fetch users
  return !robots.length ? (
    <h1>Loading</h1> // If there are no users, display a message
  ) : (
    <div className="tc">
      {/* Center Header and SearchBox*/}
      <h1 className="f2">RoboFriends</h1>
      {/* <SearchBox searchChange={this.onSearchChange} /> "This" is for Classes */}
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        {/* If there any errors show message in ErrorBoundry Component */}
        <ErrorBoundry>
          {/* Display only the robots filtered */}
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}
// }

export default App;
