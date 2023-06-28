import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
// import { robots } from "./robots";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

function App() {
  // class App extends Component { <- Classed are replaced by functions

  // Constructor is not needed with hooks

  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: "",
  //   };
  //   console.log("Construtor");
  // }

  const [robots, setRobots] = useState([]);
  const [searchfield, SetSearchfield] = useState("");

  // Cannot use componentDidMount with Hooks
  // componentDidMount() {
  //   // this.setState({ robots: robots });
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: users }));
  //   console.log("componentDidMount");
  // }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  // onSearchChange = (event) => {
  const onSearchChange = (event) => {
    // this.setState({ searchfield: event.target.value }); <- Now we use
    // the function defined with useState()
    SetSearchfield(event.target.value);
    // console.log(this.state.searchfield.toLowerCase());
    // console.log(filteredRobots);
  };

  // render() { Cannot use render() with  hooks
  // const { robots, searchfield } = this.state; <- No longer needed
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  // console.log("render");
  // Adding a condition in case it take a long time to fetch users
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f2">RoboFriends</h1>
      {/* <SearchBox searchChange={this.onSearchChange} /> "This" is for Classes */}
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}
// }

export default App;
