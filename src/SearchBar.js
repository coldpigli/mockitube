import React from 'react';


class SearchBar extends React.Component{

    state = {searchTerm: ''};


    onFormSubmit = (e) =>{
        e.preventDefault();

        //api call hoga yahan
        this.props.onFormSubmit(this.state.searchTerm);
    }

    render(){
        return (
            <div className = "search-bar ui segment">
                <form className = "ui form" onSubmit = {this.onFormSubmit}>
                    <div className = "field">
                        <label><h2>Mockitube</h2></label>
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