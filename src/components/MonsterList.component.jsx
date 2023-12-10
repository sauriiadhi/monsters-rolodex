// import React, { Component } from "react";
// import MonsterCard from "./MonsterCard.component"

// class MonsterList extends Component {
//   // constructor() {
//   // }
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => (
//           <MonsterCard monster={monster} key={monster.id}/>
//         ))}
//       </div>
//     );
//   }
// }

import React from 'react'
import MonsterCard from "./MonsterCard.component"

const MonsterList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <MonsterCard monster={monster} key={monster.id} />
    ))}
  </div>
)

export default MonsterList;



// export default MonsterList;