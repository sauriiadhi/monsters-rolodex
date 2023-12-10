// import React, { Component } from "react";

// class MonsterCard extends Component {
//     // constructor() {
//     // }
//     render() {
//         const { name,email,id } = this.props.monster;
//         return (
//             <div className="card-container">
//                 <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         );
//     }
// }

import React from 'react'

export const MonsterCard = ({monster}) => {
    const { name, email, id } = monster;
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}


export default MonsterCard;