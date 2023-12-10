// import { Component } from "react";
import './App.css';
import MonsterList from "./components/MonsterList.component"
import SearchBar from "./components/SearchBar.component"

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchMonster: ''
//     }
//     this.timer = null;
//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//             return { monsters: users };
//           })
//       );
//   }

//   onSearchChange = (event) => {
//     const inputValue = event && event.target && event.target.value;
//     clearTimeout(this.timer);
//     this.timer = setTimeout(() => {
//       let searchMonster = "";
//       if (inputValue) {
//         searchMonster =
//           event.target.value[0].toUpperCase() + event.target.value.slice(1);
//       }
//       this.setState(() => {
//         return { searchMonster };
//       });
//     }, 300);
//   }

//   render() {
//     const { monsters, searchMonster } = this.state;
//     const { onSearchChange } = this;
//     const filterMonster = monsters.filter((monster) => {
//       return monster.name.includes(searchMonster)
//     })
//     return (
//       <div className="App">
//         <div className="header">
//           <h1 className="app-title">Monster Rolodex</h1>
//           <SearchBar className="input" onChangeHandler={onSearchChange} placeHolder="Search Monster Type" />
//         </div>
//         <MonsterList monsters={filterMonster} />
//       </div>
//     )
//   }
// }



import React, { useEffect, useState } from 'react'

export const App = () => {

  const [ searchMonster, setSearchMonster] = useState("");
  const [ monsters, setMonsters] = useState([]);
  const [ filterMonster, setFilterMonster] = useState(monsters);
  const [ timer, setTimer] = useState(null);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((users) => setMonsters(users)
          );
  },[]);

  useEffect(() => {
    const newFilterMonster = monsters.filter((monster) => {
    return monster.name.includes(searchMonster)
    });
    setFilterMonster(newFilterMonster);
  }, [monsters,searchMonster]);


  const onSearchChange = (event) => {
    const inputValue = event && event.target && event.target.value;
    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        let formattedSearchMonster = "";
        if (inputValue) {
          formattedSearchMonster = inputValue[0].toUpperCase() + inputValue.slice(1);
        }
        setSearchMonster(formattedSearchMonster);
      }, 300)
    );
  }

  return (
    <div className="App">
      <div className="header">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBar className="input" onChangeHandler={onSearchChange} placeHolder="Search Monster Type" />
      </div>
      <MonsterList monsters={filterMonster} />
    </div>
  )
}

export default App;