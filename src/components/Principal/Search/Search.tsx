import React from 'react'

import './Search.css'
import search from './search.png'


function Search(){
    return (
        <div className="search">
            <div className="searchBox">
                <input type="text" id="txtBusca" placeholder="Buscar estabelecimento" className="searchText"/>
                <div className="searchImgBox ">
                    <img src={search} alt="search" className="searchImg"/>
                </div>
            </div>
        </div>
    )
}
export default Search
