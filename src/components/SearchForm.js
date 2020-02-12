import React, { useState } from 'react';

const SearchForm = (props) => {
    const [nameValue, setNameValue] = useState('');
    const [clicked, setClicked] = useState(false);

    const handleChange = (event) => {
        event.preventDefault();
        setNameValue(event.target.value);
    }

    return (
        <div
            style={{
                background: '#F5FFFA',
                paddingTop: '0.5em',
                paddingBottom: '0.5em',
                paddingLeft: '35%'
            }}>
            <input 
                onChange={handleChange}
                className="form_input" 
                type="text" 
                name="pokemon name"
                placeholder="enter name" 
                value={nameValue}
                disabled={clicked}
            />
            <button className="form_button" 
                onClick={() => {
                    if (nameValue.length === 0) {
                        return;
                    }
                    if (clicked===false) {
                        setClicked(true);
                        props.searchName(nameValue.toLowerCase())
                    }
                    else {
                        props.reload();
                    }
                }}
            >
                    {clicked===false ? "search" : "reload"}
            </button>
        </div>
    );
}

export default SearchForm;


