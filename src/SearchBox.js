import React from 'react';
import './SearchBox.css'

const SearchBox = ({searchFun}) => {

	return(
		
		<div className="SearchBox">
			<input type="text" placeholder="Search robots" onChange={searchFun} />
		</div>
 

		);
}

export default SearchBox;