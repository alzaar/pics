import React from 'react';

const SearchBar = (props) => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSearch();
  }
  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label className="">Image Search</label>
          <input type='text' value={props.term} onChange={(e) => props.onInputChange(e)}/>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
