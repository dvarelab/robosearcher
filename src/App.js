import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './SearchBox';
import CardList from './CardList'
import ScrollY from './ScrollY';
import { robots } from './robots';

 
class App extends React.Component {

    constructor() {
      super();
      this.state = {
        "robots": [],
        "searchInput": '' 
      }
    }

    componentDidMount() {
    setInterval(
      () => {
        this.setState({robots});
      },
      3000
    );
  }

    onSearch = (event) => {
      this.setState({"searchInput": event.target.value});
    }

    
    
    render() {
      const filteredList = this.state.robots.filter((robot) => {
        return robot.name.toLowerCase().includes(this.state.searchInput.toLowerCase());
      });
        if(!this.state.robots.length)
          return (
          <div className="App">
            <header><h1>ROBOSEARCHER</h1></header>
            <SearchBox searchFun={this.onSearch} />
          <ScrollY>
            <div className="Loader"></div>
          </ScrollY>
          </div>
            );
      return (
        <div className="App">
          <header><h1>ROBOSEARCHER</h1></header>
          <SearchBox searchFun={this.onSearch} />
          <ScrollY>
           
            <CardList robots={filteredList} />
            }
          </ScrollY >
      </div>
      );
    }
  }

 
export default App;
