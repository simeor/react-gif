import React from 'react'

class SearchBar extends React.Component{

  handleUpdate = (e) => {
    this.props.search(e.target.value)
  }

  render(){
    return(
      <input type="text" className="form-control form-search"
        onChange={this.handleUpdate} placeholder="Search.."
      />
    )
  }
}

export default SearchBar
