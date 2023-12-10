// import React, { Component } from "react";

// class SearchBar extends Component {
//     render() {
//         const {className,placeHolder,onChangeHandler} = this.props;
//         return (
//             <>
//                 <input className={`search-box ${className}`} type={className} placeholder={placeHolder} onChange={onChangeHandler} />
//             </>
//         );
//     }
// }

import React from 'react'

export const SearchBar = (props) => {
    const { className, placeHolder, onChangeHandler } = props;
    return (
        <input className={`search-box ${className}`} type={className} placeholder={placeHolder} onChange={onChangeHandler} />
    )
}


export default SearchBar;