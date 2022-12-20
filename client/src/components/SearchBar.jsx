import React from "react";
import "../index.css";


const SearchBar = () => {
    return (
        <header className="searchblock">
            <div className="search">
                <input type="text" placeholder="Search tasks..."/>
                {/* searchbar from tailwind? */}
            </div>
        </header>
    )
}
export default SearchBar;




