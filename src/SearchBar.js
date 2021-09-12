import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component{

    state = {searchTerm: ''};


    onFormSubmit = (e) =>{
        e.preventDefault();

        //api call hoga yahan
    }

    render(){
        return (
            <div className = "search-bar ui segment">
                <form className = "ui form" onSubmit = {this.onFormSubmit}>
                    <div className = "field">
                        <label>Search Videos</label>
                        <input type = "text" 
                        value = {this.state.searchTerm} 
                        placeholder = 'Search Mockitube'
                        onChange = {(e)=>{this.setState({searchTerm: e.target.value})}}/>
                    </div>
                </form>

            </div>
        )
        
    }
}

export default SearchBar;